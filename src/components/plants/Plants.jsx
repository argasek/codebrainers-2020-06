import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import PlantRow from "components/plants/Plant";

const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";

class Plants extends React.PureComponent {

  render() {
    const plant = {
      id: 1,
      name: 'Some plant'
    };

    return (
      <Card className="mb-4">
        <CardBody>
            <PlantRow plant={plant}  />
        </CardBody>
      </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
