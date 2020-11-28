import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import PlantRow from "components/plants/Plant";
import axios from "axios";
import Plant from "models/plant";

const PLANTS_FETCH_DELAY = 5000;

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
          debugger;
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
  render() {
    const {inProgress, successPlants, plants} = this.state;
    return (
      <Card className="mb-4">
        <CardBody>
            <PlantRow plant={plants[0]}  />
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
