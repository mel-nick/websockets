import React, { Fragment } from 'react';

export const DeleteBtn = ({ id, deleteCircle }) => {
  return (
    <Fragment>
      <i
        className='fas fa-trash-alt delete'
        onClick={() => deleteCircle(id)}
      ></i>
    </Fragment>
  );
};

export const FlipButton = ({ flipCircle, id, isActive }) => {
  return (
    <Fragment>
      <i
        className='fas fa-sync-alt flip'
        onClick={() => flipCircle(id, !isActive)}
      ></i>
    </Fragment>
  );
};
