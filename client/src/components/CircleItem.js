import React from 'react';
import { flipCircle, deleteCircle } from '../actions/circles';
import { connect } from 'react-redux';
import { DeleteBtn, FlipButton } from './Buttons';

const CircleItem = ({ is_active, _id, flipCircle, deleteCircle }) => {
  return (
    <div
      className='circle-container'
      style={{
        position: 'relative',
      }}
    >
      <div
        className='circle'
        style={{
          position: 'relative',
          backgroundColor: `${is_active ? 'green' : 'red'}`,
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '2em',
          padding: '2em',
          cursor: 'pointer',
        }}
      />
      <DeleteBtn deleteCircle={deleteCircle} id={_id} />
      <FlipButton flipCircle={flipCircle} id={_id} isActive={is_active} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  circles: state.circlesData.circles,
});

export default connect(mapStateToProps, { flipCircle, deleteCircle })(
  CircleItem
);
