import React from 'react';
import { connect } from 'react-redux';
import { addCircle } from '../actions/circles';

const AddCircle = ({ addCircle }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addCircle();
      }}
      className='btn btn-dark my-1 post-submit'
    >
      Add Circle
    </button>
  );
};

export default connect(null, { addCircle })(AddCircle);
