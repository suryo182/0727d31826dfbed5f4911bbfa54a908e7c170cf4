import {
  START_LOADING,
  FINISH_LOADING,
  SET_DATA,
  ADD_DATA,
  UPDATE_DATA,
  GET_BY_ID,
  SET_FAVORITES,
  DELETE_FAV,
} from '.';

export const setData = (data) => ({ type: SET_DATA, payload: data });
export const updateData = (data) => ({ type: UPDATE_DATA, payload: data });
export const dataById = (data) => ({ type: GET_BY_ID, payload: data });
export const addToFav = (details) => ({
  type: SET_FAVORITES,
  payload: details,
});
export const deleteFav = (id) => ({ type: DELETE_FAV, payload: id });

export const fetchData = () => (dispatch) => {
  dispatch(startLoading());
  fetch(`https://simple-contact-crud.herokuapp.com/contact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch(setData(data.data)))
    .catch((err) => console.log(err, 'error fetch'))
    .finally(() => dispatch(finishLoading()));
};

export const addContact = (data) => (dispatch) => {
  fetch('https://simple-contact-crud.herokuapp.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, '<<<< successfully added');
      dispatch({
        type: ADD_DATA,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err, '<<< error post new contact');
    });
};

export const updateContact = (data) => (dispatch) => {
  const { firstName, lastName, age, photo } = data;
  fetch(`https://simple-contact-crud.herokuapp.com/contact/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, age, photo }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, '<<<< data updated');
      dispatch(updateData(data.data.id));
    })
    .catch((err) => {
      console.log(err, '<<<< error update contact');
    });
};

export const getContactById = (id) => (dispatch) => {
  fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, '<<<< data by id');
      dispatch(dataById(data.data));
    })
    .catch((err) => {
      console.log(err, '<<< error fetch data by id');
    });
};

const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

const finishLoading = () => {
  return {
    type: FINISH_LOADING,
  };
};
