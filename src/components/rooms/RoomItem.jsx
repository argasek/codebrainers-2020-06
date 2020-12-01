import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from "reactstrap";
import Room from 'models/room';

class RoomItem extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      className: "room-item"
    };

    console.log('constructor(): ' + props.index);
  }

  componentDidMount() {
    console.log('componentDidMount(): ' + this.props.index);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate()');

    this.updateClassNameWhenIndexChanged(prevState);
  }

  updateClassNameWhenIndexChanged(prevState) {
    const index = this.state.index;

    if (prevState.index !== index) {
      console.log(`Index changed from ${prevState.index} to ${index}`);
      let className = `room-item active-${index}`;
      this.setState({ className });
    }
  }

  render() {
    const room = this.props.room;

    const onClick = () => {
      if (this.props.isLastItem === true) {
        let index = this.state.index;
        index = ++index === 4 ? 0 : index;
        this.setState({ index })
      }
    };

    return (
      <ListGroupItem className={this.state.className} onClick={ onClick }>
        { room.name }
      </ListGroupItem>
    );
  }

}

RoomItem.propTypes = {
  room: PropTypes.instanceOf(Room).isRequired,
  label: PropTypes.string,
  isLastItem: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};


export default RoomItem;