import { SET_DATA } from './';

export const setData = (data) => ({ type: SET_DATA, payload: data });

export const fetchData = () => (dispatch) => {
  fetch(`https://simple-contact-crud.herokuapp.com/contact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch(setData(data.data)))
    .catch((err) => console.log(err, 'error fetch'));
};
