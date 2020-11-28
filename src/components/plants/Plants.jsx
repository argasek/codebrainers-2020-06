import { Card, CardBody, Col, Row } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import PlantItem from "components/plants/PlantItem";
import axios from "axios";
import Plant from "models/plant";
import Category from 'models/category';


const CATEGORIES_FETCH_DELAY = 2000;
const PLANTS_FETCH_DELAY = 2000;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoriesInProgress: false,
      categoriesSuccess: undefined,
      plants: [],
      plantsInProgress: false,
      plantsSuccess: undefined,
    };
  }

  componentDidMount() {
    const categoriesInProgress = true;
    const plantsInProgress = true;

    this.setState({
      categoriesInProgress,
      plantsInProgress
    });

    this.fetchCategories().finally(() => {
      this.setState({ categoriesInProgress: false });
    });

    this.fetchPlants().finally(() => {
      this.setState({ plantsInProgress: false });
    });
  }

  fetchCategories() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      return axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => {
            const category = new Category();
            return category.fromPlain(item);
          });
          const categoriesSuccess = true;
          this.setState({ categories, categoriesSuccess });
          resolve(response);
        })
        .catch((error) => {
          this.setState({ categoriesSuccess: false });
          reject(error);
        });
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
        categories={this.state.categories}
        categoriesSuccess={this.state.categoriesSuccess}
        plant={ plant }
        key={ plant.id }
        isLastItems={ this.isWithinLastIndices(arr, 3, index) }
        index={ index }
      />
    </Col>

  );

  render() {
    const {
      categoriesInProgress,
      categoriesSuccess,
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

export default Plants;
