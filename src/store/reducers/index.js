import { SET_DATA } from '../actions';

const initialState = {
  lists: [],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, lists: action.payload };
    default:
      return state;
  }
}
