import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Contact from '../../components/Contact';
import { fetchData } from '../../store/actions/contactActions';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ContactListWrapper = styled.div`
  height: 100vh;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

const AddContactBtn = styled(Link)`
  display: flex;
  font-size: 1.5rem;
  text-transform: none;
  border-radius: 5rem;
  width: 15rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #731e91;
  color: #fff;
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

export default function HomePage() {
  const dispatch = useDispatch();
  const { lists, isLoading } = useSelector((state) => state);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <SearchBarWrapper>
        <Input
          style={{ fontSize: '2rem', fontFamily: 'Poppins' }}
          placeholder="Search by name"
        />
        <AddContactBtn to="add-contact">
          <AddIcon style={{ fontSize: '2.5rem' }} />
          Add Contact
        </AddContactBtn>
      </SearchBarWrapper>
      <ContactListWrapper>
        {!isLoading ? (
          lists.map((list) => <Contact key={list.id} list={list} />)
        ) : (
          <div className={classes.root}>
            <CircularProgress size={100} />
          </div>
        )}
      </ContactListWrapper>
    </React.Fragment>
  );
}

// {isLoading ? (
// <div className={classes.root}>
//   <CircularProgress size={100} />
// </div>
// ) : (
//   lists && lists.map((list) => <Contact key={list.id} list={list} />
//   )
// )}
