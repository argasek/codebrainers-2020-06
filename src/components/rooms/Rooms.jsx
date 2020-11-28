import { Card, CardBody } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Room from "components/rooms/Room";
import InProgress from "components/shared/InProgress";

const ROOMS_FETCH_DELAY = 250;

class Rooms extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            rooms: [],
            successRooms: undefined,
            inProgress: false,
        };
    }

    componentDidMount() {
        this.fetchRooms().finally(() => {
            this.setState({ inProgress: false });
        });
    }

    fetchRooms() {
        const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
        this.setState({ inProgress: true });

        return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
            axios
                .get(requestUrl)
                .then((response) => {
                    const data = response.data;
                    const rooms = data.map((item) => {
                        const { id, name } = item;
                        return { id, name };
                    });
                    const successRooms = true;
                    this.setState({ rooms, successRooms });
                    resolve();
                })
                .catch((error) => {
                    this.setState({ successRooms: false });
                    reject();
                });
        });
    }

    render() {
        const { rooms, successRooms, inProgress } = this.state;

        return (
            <Card className="mb-4">
                <CardBody>
                    <InProgress inProgress={inProgress} />
                    {successRooms === false && <p>Nie udało się pobrać Pokoi</p>}
                    {successRooms && (
                        <div className="room">
                            {rooms.map((room, index, arr) => (
                                <Room name={room.name} key={index} />
                            ))}
                        </div>
                    )}
                </CardBody>
            </Card>
        );
    }
}

Rooms.propTypes = {
    delayFetch: PropTypes.func.isRequired,
};

export default Rooms;
