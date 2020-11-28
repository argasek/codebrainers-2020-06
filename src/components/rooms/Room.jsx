import React from 'react';

import './Room.scss';

class Room extends React.PureComponent {

  render() {

    return (
      <div>
        <p>{this.props.id} {' '} {this.props.name}</p>
      </div>
    )
  }

}


export default Room;