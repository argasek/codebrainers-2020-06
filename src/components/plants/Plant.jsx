import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';
import {Card, CardTitle, CardSubtitle, CardText, CardBody, CardHeader} from "reactstrap";
import classNames from 'classnames';

class Plant extends React.PureComponent {

  render() {
  const {name, blooming, category, requiredExposure, wateringInterval, difficulty } = this.props.plant;
    const {isLastItems} = this.props;
    return (
        <Card className={classNames({"mb-lg-3":!isLastItems})}>
          <CardHeader className="bg-secondary">
            <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2">Card subtitle</CardSubtitle>
          </CardHeader>
        <CardBody>

          <CardText>
            <p>blooming: {blooming}</p>
            <p>category: {category}</p>
            <p>category: {category}</p>
            <p>requiredExposure: {requiredExposure}</p>
            <p>requiredExposure: {requiredExposure}</p>
            <p>wateringInterval: {wateringInterval}</p>
            <p>wateringInterval: {wateringInterval}</p>
            <p>difficulty: {difficulty}</p>
          </CardText>
        </CardBody>
      </Card>
    )
  }

}

Plant.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Plant;