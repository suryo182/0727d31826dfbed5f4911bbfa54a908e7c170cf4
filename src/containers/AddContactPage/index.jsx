import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addContact } from '../../store/actions/contactActions';
import styled from 'styled-components';
import './styles.css';
import { useHistory } from 'react-router-dom';

const AddContactTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: #0e101c;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function AddContactPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const { firstName, lastName, age, photo } = data;
    dispatch(
      addContact({
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
        <AddContactTitle>Add New Contact</AddContactTitle>
      </TitleWrapper>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="add-contact-form">
        <label>First Name</label>
        <input
          name="firstName"
          placeholder="Enter first name"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.firstName && <p>This field is required</p>}
        <label>Last Name</label>
        <input
          name="lastName"
          placeholder="Enter last name"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.lastName && <p>This field is required</p>}
        <label>Age</label>
        <input
          name="age"
          ref={register({ required: true })}
          type="number"
          placeholder="Enter age"
        />
        {errors.age && <p>This field is required</p>}
        <label>Image Url</label>
        <input
          name="photo"
          ref={register({ required: true })}
          placeholder="Please enter image url"
        />
        {errors.photo && <p>This field is required</p>}
        <input type="submit" />
      </form>
    </React.Fragment>
  );
}
