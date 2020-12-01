import React from 'react';
import axios from 'axios';
import Room from 'models/room';

const ROOMS_FETCH_DELAY = 500;

const delay = (ms, func) => {
  return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
};

const withRooms = (WrappedComponent) => {
  return class extends React.PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        roomsErrorMessage: '',
        roomsInProgress: false,
        roomsSuccess: undefined,
        rooms: [],
      };
    }

    /**
     *
     * @param {function} resolve
     * @param {function} reject
     * @returns {Promise}
     */
    fetchRooms = (resolve, reject) => {
      return axios.get('http://gentle-tor-07382.herokuapp.com/rooms/')
        .then((response) => this.fetchRoomsSuccess(response, resolve))
        .catch((error) => this.fetchRoomsFailure(error, reject));
    };

    /**
     * Fetch Rooms with some predefined delay.
     * @returns {Promise<TimerHandler>}
     */
    fetchRoomsDelayed = () => {
      console.log('Method Rooms.fetchRoomsDelayed() fired');

      const roomsInProgress = true;
      this.setState({ roomsInProgress });

      return delay(ROOMS_FETCH_DELAY, this.fetchRooms)
        .finally(this.fetchRoomsFinally);
    };

    fetchRoomsFailure = (error, reject) => {
      const roomsSuccess = false;
      const roomsErrorMessage = error.message;

      this.setState({
        roomsErrorMessage,
        roomsSuccess,
      });

      reject();
    };

    fetchRoomsFinally = () => {
      console.log('Rooms finally');
      const roomsInProgress = false;
      this.setState({ roomsInProgress });
    };

    fetchRoomsSuccess = (response, resolve) => {
      const data = response.data;

      const rooms = data.map((item) => {
        const room = new Room();
        return room.fromPlain(item);
      });
      const roomsSuccess = true;
      const roomsErrorMessage = '';

      this.setState({
        rooms,
        roomsErrorMessage,
        roomsSuccess,
      });

      console.log('Fetched rooms');

      resolve();
    };

    render() {

      return (
        <WrappedComponent
          { ...this.state }
          { ...this.props }
          fetchRooms={ this.fetchRoomsDelayed }
        />
      );
    }
  };
};

export default withRooms;