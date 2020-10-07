import React, { useEffect, Fragment } from 'react';
import Circles from './Circles';
import AddCircle from './AddCircle';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { getCircles } from '../actions/circles';
import socketIOClient from 'socket.io-client';

const Landing = ({ circles, getCircles }) => {
  useEffect(() => {
    getCircles();
  }, [getCircles]);

  useEffect(() => {
    //const socket = socketIOClient(`http://localhost:5000/`);
     const socket = socketIOClient(`https://websocketsapp.herokuapp.com/socket.io/?EIO=4&transport=websocket`);
    socket.on('changeState', () => {
      getCircles();
    });
    socket.on('addItem', () => {
      getCircles();
    });
    socket.on('deleteItem', () => {
      getCircles();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {!circles ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <AddCircle />
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <Circles circles={circles} />
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  circles: state.circlesData.circles,
});

export default connect(mapStateToProps, {
  getCircles,
})(Landing);
