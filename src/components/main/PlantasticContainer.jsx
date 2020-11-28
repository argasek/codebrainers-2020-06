import React from "react";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_ROOMS } from "constants/Routes";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import PlantCreate from 'components/plants/PlantCreate';
import axios from 'axios';
import Category from 'models/Category';

const CATEGORIES_FETCH_DELAY = 2500;


class PlantasticContainer extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      categoriesInProgress: false,
      successCategories: undefined,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories()
      .finally(() => {
        this.setState({ categoriesInProgress: false });
      })
  }

  fetchCategories() {

    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    this.setState({ categoriesInProgress: true });
    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map(item => {
            const category = new Category();
            category.fromPlain(item);
            return category;
          });

          const successCategories = true;
          this.setState({ categories, successCategories });
          resolve();
        })
        .catch((error) => {
          this.setState({ successCategories: false });
          reject();
        })
        .finally(() => {
          console.log('Resolved');
        });
    });
  }

  render() {
    const {
      delayFetch,
      fertilizingFrequency,
      inputOnChange,
      plantName,
      someSelectField,
    } = this.props;

    const {
      categories,
      successCategories,
      categoriesInProgress
    } = this.state;

    return (
      <Container>
        <Switch>
          <Route exact path={ROUTE_PLANTS}>
            <PlantCreate
              fertilizingFrequency={fertilizingFrequency}
              inputOnChange={inputOnChange}
              plantName={plantName}
              someSelectField={someSelectField}
            />
            <Plants
              delayFetch={delayFetch}
              categories={categories}
              successCategories={successCategories}
              categoriesInProgress={categoriesInProgress}
            />
          </Route>
          <Route path={ROUTE_CATEGORIES}>
            <Categories
              categories={categories}
              successCategories={successCategories}
              categoriesInProgress={categoriesInProgress}
            />
          </Route>
          <Route path={ROUTE_ROOMS}>
            <Rooms
              delayFetch={delayFetch} />
          </Route>
        </Switch>
      </Container>
    )
  }
}

export default PlantasticContainer;
