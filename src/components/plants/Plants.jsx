import { Card, CardBody, Col, Row } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import PlantItem from "components/plants/PlantItem";
import axios from "axios";
import Plant from "models/plant";
import Category from 'models/category';
import withCategories from 'components/withCategories';


const CATEGORIES_FETCH_DELAY = 2000;
const PLANTS_FETCH_DELAY = 2000;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      plantsInProgress: false,
      plantsSuccess: undefined,
    };
  }

  componentDidMount() {
    const plantsInProgress = true;

    this.setState({
      plantsInProgress
    });

    this.props.fetchCategories();

    this.fetchPlants().finally(() => {
      this.setState({ plantsInProgress: false });
    });
  }

  fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      return axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          console.log(data);
          const plantsSuccess = true;
          const plants = data.map((item) => {
            const plant = new Plant();
            return plant.fromPlain(item);
          });
          this.setState({ plants, plantsSuccess });
          resolve(response);
        })
        .catch((error) => {
          this.setState({ plantsSuccess: false });
          reject(error);
        });
    });
  }


  isWithinLastIndices = (arr, howMany, index) => {
    const getLastIndices = (arrayCount, howMany) => 
      Array
        .from(new Array(arrayCount).fill(1), (x, index) => x + index)
        .slice(arrayCount - howMany);

    return getLastIndices(arr.length, howMany).includes(index);
  };

  plantsMapper = (plant, index, arr) => (
    <Col lg={ 4 } xl={ 3 } md={ 2 }>
      <PlantItem
        categories={this.props.categories}
        categoriesSuccess={this.props.categoriesSuccess}
        plant={ plant }
        key={ plant.id }
        isLastItems={ this.isWithinLastIndices(arr, 3, index) }
        index={ index }
      />
    </Col>

  );

  render() {
    const {
      plants,
      plantsInProgress,
      plantsSuccess,
    } = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <Row>
            { plants.map(this.plantsMapper) }
          </Row>
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default withCategories(Plants);
