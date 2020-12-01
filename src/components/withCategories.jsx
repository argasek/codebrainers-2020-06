import React from 'react';
import axios from 'axios';
import Category from 'models/category';

const CATEGORIES_FETCH_DELAY = 500;

const delay = (ms, func) => {
  return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
};

const withCategories = (WrappedComponent) => {
  return class extends React.PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        categoriesErrorMessage: '',
        categoriesInProgress: false,
        categoriesSuccess: undefined,
        categories: [],
      };
    }

    /**
     *
     * @param {function} resolve
     * @param {function} reject
     * @returns {Promise}
     */
    fetchCategories = (resolve, reject) => {
      return axios.get('http://gentle-tor-07382.herokuapp.com/categories/')
        .then((response) => this.fetchCategoriesSuccess(response, resolve))
        .catch((error) => this.fetchCategoriesFailure(error, reject));
    };

    /**
     * Fetch Categories with some predefined delay.
     * @returns {Promise<TimerHandler>}
     */
    fetchCategoriesDelayed = () => {
      console.log('Method Categories.fetchCategoriesDelayed() fired');

      const categoriesInProgress = true;
      this.setState({ categoriesInProgress });

      return delay(CATEGORIES_FETCH_DELAY, this.fetchCategories)
        .finally(this.fetchCategoriesFinally);
    };

    fetchCategoriesFailure = (error, reject) => {
      const categoriesSuccess = false;
      const categoriesErrorMessage = error.message;

      this.setState({
        categoriesErrorMessage,
        categoriesSuccess,
      });

      reject();
    };

    fetchCategoriesFinally = () => {
      console.log('Categories finally');
      const categoriesInProgress = false;
      this.setState({ categoriesInProgress });
    };

    fetchCategoriesSuccess = (response, resolve) => {
      const data = response.data;

      const categories = data.map((item) => {
        const category = new Category();
        return category.fromPlain(item);
      });
      const categoriesSuccess = true;
      const categoriesErrorMessage = '';

      this.setState({
        categories,
        categoriesErrorMessage,
        categoriesSuccess,
      });

      console.log('Fetched categories');

      resolve();
    };

    render() {

      return (
        <WrappedComponent
          { ...this.state }
          { ...this.props }
          fetchCategories={ this.fetchCategoriesDelayed }
        />
      );
    }
  };
};

export default withCategories;