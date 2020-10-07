import {
  GET_CIRCLES,
  CIRCLES_LOADED,
  FLIP_CIRCLE,
  ADD_CIRCLE,
  CIRCLE_ADDED,
  DELETE_CIRCLE,
} from '../actions/types';

const initialState = {
  circles: [],
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CIRCLES: {
      return {
        ...state,
        loading: true,
      };
    }
    case CIRCLES_LOADED:
      return {
        ...state,
        circles: payload,
        loading: false,
      };
    case ADD_CIRCLE:
      return {
        ...state,
        loading: true,
      };
    case CIRCLE_ADDED:
      return {
        ...state,
        circles: [payload, ...state.circles],
        loading: false,
      };
    case FLIP_CIRCLE:
      return {
        ...state,
        circles: state.circles.map((circle) => {
          if (circle._id === payload._id) {
            return (circle.is_active = payload);
          } else return circle;
        }),
      };
    case DELETE_CIRCLE:
      return {
        ...state,
        circles: state.circles.filter(({ _id }) => _id !== payload),
      };
    default:
      return state;
  }
}
