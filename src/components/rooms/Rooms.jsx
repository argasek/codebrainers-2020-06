import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import RoomItem from "components/rooms/RoomItem";
import InProgress from "components/shared/InProgress";
import withRooms from 'components/withRooms';

class Rooms extends React.PureComponent {

  componentDidMount() {
    this.props.fetchRooms();
  }

  roomsMapper = (item, index, arr) => (
    <RoomItem
      room={item}
      label='room'
      key={index}
      isLastItem={arr.length - 1 === index}
      index={index}
    />
  )

  render() {
    const {
      rooms,
      roomsInProgress,
      roomsSuccess,
    } = this.props;

    return (
      <Card>
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={roomsInProgress} />
            {
              roomsSuccess === false &&
              <p>Failed to fetch rooms.</p>
            }
            {
              roomsSuccess
              &&
              <ListGroup className="rooms">
                {
                  rooms.map(this.roomsMapper)
                }
              </ListGroup>
            }
          </div>
        </CardBody>
      </Card>
    )
  }
}


export default withRooms(Rooms);