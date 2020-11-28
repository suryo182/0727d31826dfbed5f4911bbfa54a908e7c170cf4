import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ImageIcon from '@material-ui/icons/Image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addToFav } from '../../store/actions/contactActions';

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
  background-color: #22a1c6;
  color: #fff;

  &:hover {
    background-color: #314b81;
  }
`;

const AddToFavBtn = styled.div`
  display: flex;
  margin-right: 3rem;
  font-size: 1.5rem;
  text-transform: none;
  border-radius: 5rem;
  width: 4rem;
  height: 4rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #e84f8a;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #314b81;
  }
`;

export default function Contact(props) {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
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
  };

  return (
    <List className={classes.root}>
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
            <FavoriteIcon />
          </AddToFavBtn>
        )}

        <GoToEditBtn to={`/edit-contact/${props.list.id}`}>
          Edit Data
        </GoToEditBtn>
      </ListItem>
    </List>
  );
}
