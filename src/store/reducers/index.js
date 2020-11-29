import {
  START_LOADING,
  FINISH_LOADING,
  SET_DATA,
  ADD_DATA,
  UPDATE_DATA,
  GET_BY_ID,
  SET_FAVORITES,
  DELETE_FAV,
  DELETE_DATA,
} from '../actions';

const initialState = {
  lists: [],
  isLoading: false,
  selected: [],
  favorites: [],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, lists: action.payload };
    case SET_FAVORITES:
      return { ...state, favorites: state.favorites.concat(action.payload) };
    case DELETE_FAV:
      const updatedData = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
      return { ...state, favorites: updatedData };
    case DELETE_DATA:
      const dataAfterDeleted = state.lists.filter(
        (list) => list.id !== action.payload
      );
      return { ...state, lists: dataAfterDeleted };
    case ADD_DATA:
      return { ...state, lists: state.lists.concat(action.payload) };
    case UPDATE_DATA:
      const newData = state.lists.filter((list) => list.id !== action.payload);
      return { ...state, lists: newData };
    case GET_BY_ID:
      return { ...state, selected: action.payload };
    case START_LOADING:
      return { ...state, isLoading: true };
    case FINISH_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
