import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectRooms } from './selectors';
import { addRoom, getRooms } from './actions';

export class Rooms extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getRooms();
  }

  createRoom = () => {
    this.props.addRoom();
  }

  render() {
    const { roomsList } = this.props;
    return (
      <div>Test Rooms
        <a onClick={this.createRoom} >Create Room</a>
        ___
        {roomsList.map((item) => <div key={item.get('id')}>{item.get('name')}</div>)}
      </div>
    );
  }
}

Rooms.propTypes = {
  roomsList: PropTypes.object,
  addRoom: PropTypes.func,
  getRooms: PropTypes.func,
};

const mapStateToProps = () => createStructuredSelector({
  roomsList: makeSelectRooms(),
});

function mapDispatchToProps(dispatch) {
  return {
    addRoom: () => dispatch(addRoom()),
    getRooms: () => dispatch(getRooms()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
