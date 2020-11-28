import { Card, CardBody, Row, Col } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import PlantItem from "components/plants/Plant";
import axios from "axios";
import Plant from "models/plant";



const PLANTS_FETCH_DELAY = 0;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inProgress: false,
      successPlants: undefined,
      plants: [new Plant()],
    };
  }


  componentDidMount() {
    this.fetchPlants()
      .finally(() => {
        this.setState({ inProgress: false });
      })
  }

  fetchPlants() {

    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({ inProgress: true });
    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      return axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          console.log(data);
          // const categories = data.map((item) => item.name);
          const successPlants = true;
          const plants = data.map((item)=> {
            const plant = new Plant();
            return  plant.fromPlain(item);
          });
          this.setState({ plants, successPlants });
          console.log('after setState();')
          resolve(response);
        })
        .catch((error) => {
          this.setState({ successPlants: false });
          reject(error);
        })
        .finally(() => {
          console.log('Resolved');
        });
    });
  }
  getLastIndices = (arrayCount, howMany) => {
    return Array.from(new Array(arrayCount).fill(1), (x, index) => x + index).slice(arrayCount - howMany);
  }
  isWithinLastIndices = (arr, howMany, index) => {
    return this.getLastIndices(arr.length, howMany).includes(index);
  }
  plantsMapper = (plant, index, arr) => (
    <Col lg={4} xl={3} md={2}>
       <PlantItem
      plant = {plant}
      key={plant.id}
      isLastItems={this.isWithinLastIndices(arr, 3, index)}
      index={index}
    />
    </Col>

  );
  render() {
    const {inProgress, successPlants, plants} = this.state;
    return (
      <Card className="mb-4">
        <CardBody>
          <Row>
          {plants.map(this.plantsMapper)}
          </Row>
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
