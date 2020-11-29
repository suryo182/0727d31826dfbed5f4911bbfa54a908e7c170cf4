import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Contact from '../../components/Contact';
import { fetchData } from '../../store/actions/contactActions';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ContactListWrapper = styled.div`
  height: 100%;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
  justify-content: space-between;
`;

const AddContactBtn = styled(Link)`
  display: flex;
  height: 5rem;
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

  &:hover {
    background-color: #490063;
  }
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
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const { lists, isLoading } = useSelector((state) => state);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setFiltered(
      lists.filter((contact) => {
        return (
          contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
          contact.age === Number(search)
        );
      })
    );
  }, [search, lists]);

  // console.log(filtered, '<<<< filtered');

  return (
    <React.Fragment>
      <SearchBarWrapper>
        <Input
          style={{ fontSize: '2rem', fontFamily: 'Poppins' }}
          placeholder="Search by name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <AddContactBtn to="add-contact" data-testid="add-contact-link">
          <AddIcon style={{ fontSize: '2rem' }} />
          Add Contact
        </AddContactBtn>
      </SearchBarWrapper>
      <ContactListWrapper>
        {!isLoading ? (
          filtered.map((list) => <Contact key={list.id} list={list} />)
        ) : (
          <div className={classes.root}>
            <CircularProgress size={100} />
          </div>
        )}
      </ContactListWrapper>
    </React.Fragment>
  );
}
