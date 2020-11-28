import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteFav } from '../../store/actions/contactActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderBottom: '.1rem',
  },
}));

const RemoveFav = styled.div`
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
  background-color: #951418;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;

export default function FavContact(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const deleteSelected = () => {
    dispatch(deleteFav(props.list.id));
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
        <RemoveFav onClick={deleteSelected}>
          <DeleteIcon style={{ fontSize: '3rem' }} />
        </RemoveFav>
      </ListItem>
    </List>
  );
}
