import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Snackbar,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ImageIcon from '@material-ui/icons/Image';
import { Alert, AlertTitle } from '@material-ui/lab';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  addToFav,
  deleteContactById,
  deleteData,
} from '../../store/actions/contactActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderBottom: '.1rem',
  },
}));

const GoToEditBtn = styled(Link)`
  display: flex;
  font-size: 1.5rem;
  text-transform: none;
  border-radius: 5rem;
  width: 15rem;
  height: 4rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: rgb(8, 160, 247);
  color: #fff;

  &:hover {
    background-color: rgb(34, 161, 198);
    transition: 0.3s all cubic-bezier(0.59, 0.18, 0.44, 0.81);
  }
`;

const DeleteBtn = styled.div`
  display: flex;
  margin-right: 0.5rem;
  text-transform: none;
  border-radius: 5rem;
  width: 4rem;
  height: 4rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
    transition: 0.3s all cubic-bezier(0.59, 0.18, 0.44, 0.81);
  }
`;

const AddToFavBtn = styled.div`
  display: flex;
  margin-right: 0.5rem;
  text-transform: none;
  border-radius: 5rem;
  width: 4rem;
  height: 4rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #e84f8a;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
    transition: 0.1s all cubic-bezier(0.59, 0.18, 0.44, 0.81);
  }
`;

export default function Contact(props) {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const classes = useStyles();

  const addToFavorite = () => {
    const { id, firstName, lastName, age, photo } = props.list;
    console.log(id, firstName, lastName, age, photo);
    dispatch(
      addToFav({
        id,
        firstName,
        lastName,
        age,
        photo,
      })
    );
    setFavorite(true);
    setIsFavorite(true);
  };

  const deleteSelectedContact = () => {
    const { id } = props.list;
    dispatch(deleteContactById(id))
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message, '<<<< status message');
        if (data.message !== 'contact unavailable') {
          dispatch(deleteData(id));
        } else {
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log(err, '<<<< error delete');
      });
  };

  return (
    <List className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Contact unavailable to delete — <strong>check it out!</strong>
        </Alert>
      </Snackbar>

      <Snackbar
        open={isFavorite}
        autoHideDuration={1000}
        onClose={() => setIsFavorite(false)}
      >
        <Alert severity="success">
          Success add to Favorite — check it out!
        </Alert>
      </Snackbar>

      <ListItem style={{ boxShadow: '0 3px 3px -2px rgba(0, 0, 0, 0.2)' }}>
        <ListItemAvatar>
          <Avatar src={`${props.list.photo}`}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              variant="h4"
              style={{ fontFamily: 'Poppins', fontWeight: '500' }}
            >
              {`${props.list.firstName} ${props.list.lastName}`}
            </Typography>
          }
          secondary={
            <Typography
              variant="h6"
              style={{ fontFamily: 'Poppins', fontWeight: '300' }}
            >
              {props.list.age} years old
            </Typography>
          }
        />

        {!favorite && (
          <AddToFavBtn onClick={addToFavorite}>
            <FavoriteIcon style={{ fontSize: '3rem' }} />
          </AddToFavBtn>
        )}
        <DeleteBtn onClick={deleteSelectedContact}>
          <DeleteIcon style={{ fontSize: '3rem' }} />
        </DeleteBtn>
        <GoToEditBtn to={`/edit-contact/${props.list.id}`}>
          Edit Data
        </GoToEditBtn>
      </ListItem>
    </List>
  );
}
