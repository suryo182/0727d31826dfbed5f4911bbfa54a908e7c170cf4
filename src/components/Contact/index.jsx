import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderBottom: '.1rem',
  },
}));

export default function Contact(props) {
  const classes = useStyles();

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
              {props.list.age}
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}
