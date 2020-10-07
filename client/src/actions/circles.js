import axios from 'axios';
import {
  GET_CIRCLES,
  CIRCLES_LOADED,
  FLIP_CIRCLE,
  ADD_CIRCLE,
  CIRCLE_ADDED,
  DELETE_CIRCLE,
} from './types';

//get circles
export const getCircles = () => async (dispatch) => {
  dispatch({
    type: GET_CIRCLES,
  });
  try {
    const res = await axios.get(`/api/circles`);
    dispatch({
      type: CIRCLES_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log('error', err);
  }
};

// add  user
export const addCircle = () => async (dispatch) => {
  dispatch({
    type: ADD_CIRCLE,
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/circles', config);
    dispatch({
      type: CIRCLE_ADDED,
      payload: res.data,
    });
  } catch (err) {
    console.log('error', err);
  }
};

// set active  user
export const flipCircle = (_id, is_active) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put('/api/circles', { _id, is_active }, config);
    dispatch({
      type: FLIP_CIRCLE,
      payload: res.data,
    });
  } catch (err) {
    console.log('error', err);
  }
};

// delete  user
export const deleteCircle = (_id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    await axios.delete('/api/circles', { _id }, config);
    dispatch({
      type: DELETE_CIRCLE,
      payload: _id,
    });
  } catch (err) {
    console.log('error', err);
  }
};
