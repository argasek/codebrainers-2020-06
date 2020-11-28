import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from "reactstrap";
import classNames from 'classnames';
import Plant from 'models/plant';
import Category from 'models/category';

class PlantItem extends React.PureComponent {

  render() {
    const { name, blooming, categoryId, requiredExposure, wateringInterval, difficulty } = this.props.plant;
    const { isLastItems, categories, categoriesSuccess } = this.props;

    const getCategoryName = () => {
      const category = categories.find(item => item.id === categoryId);
      if (categoriesSuccess === undefined) {
        return '?';
      }
      return category instanceof Category ? category.name : 'Unknown category';
    }

    const categoryName = getCategoryName();

    return (
      <Card className={ classNames({ "mb-lg-3": !isLastItems }) }>
        <CardHeader className="bg-secondary">
          <CardTitle tag="h5">{ name }</CardTitle>
          <CardSubtitle tag="h6" className="mb-2">Card subtitle</CardSubtitle>
        </CardHeader>
        <CardBody>

          <CardText>
            <p>blooming: { blooming }</p>
            <p>category: { categoryName }</p>
            <p>requiredExposure: { requiredExposure }</p>
            <p>wateringInterval: { wateringInterval }</p>
            <p>difficulty: { difficulty }</p>
          </CardText>
        </CardBody>
      </Card>
    );
  }

}

PlantItem.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
  categories: PropTypes.arrayOf(PropTypes.instanceOf(Category)).isRequired
};

export default PlantItem;