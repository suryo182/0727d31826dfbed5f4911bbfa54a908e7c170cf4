import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  getContactById,
  updateContact,
} from '../../store/actions/contactActions';
import './styles.css';

const AddContactTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: #0e101c;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    justifyContent: 'center',
  },
}));

export default function EditContactPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selected } = useSelector((state) => state);
  const { id } = useParams();
  const classes = useStyles();
  // console.log(id, '<<<< id');
  // console.log(selected, '<<< selected');

  useEffect(() => {
    dispatch(getContactById(id));
  }, [dispatch, id]);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const { firstName, lastName, age, photo } = data;
    dispatch(
      updateContact({
        id,
        firstName,
        lastName,
        age,
        photo,
      })
    );
    history.push('/');
  };

  return (
    <React.Fragment>
      <TitleWrapper>
        <AddContactTitle>Edit Contact</AddContactTitle>
      </TitleWrapper>
      {selected.id === id ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            name="firstName"
            defaultValue={`${selected.firstName}`}
            placeholder="Enter first name"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.firstName && <p>This field is required</p>}
          <label>Last Name</label>
          <input
            name="lastName"
            defaultValue={`${selected.lastName}`}
            placeholder="Enter last name"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.lastName && <p>This field is required</p>}
          <label>Age</label>
          <input
            name="age"
            defaultValue={`${selected.age}`}
            ref={register({ required: true })}
            type="number"
            placeholder="Enter age"
          />
          {errors.age && <p>This field is required</p>}
          <label>Image Url</label>
          <input
            name="photo"
            defaultValue={`${selected.photo}`}
            ref={register({ required: true })}
            placeholder="Please enter image url"
          />
          {errors.photo && <p>This field is required</p>}
          <input type="submit" />
        </form>
      ) : (
        <div className={classes.root}>
          <CircularProgress size={100} />
        </div>
      )}
    </React.Fragment>
  );
}
