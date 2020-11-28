import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { fetchData } from '../../store/actions/contactActions';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

const ContactListWrapper = styled.div`
  height: 100vh;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

const InnerContent = styled.div`
  padding: 2rem;
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

export default function HomePage() {
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(lists);
  return (
    <HomeWrapper>
      <SideBar />
      <ContentWrapper>
        <Header />
        <InnerContent>
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
            {lists &&
              lists.map((list) => <Contact key={list.id} list={list} />)}
          </ContactListWrapper>
        </InnerContent>
      </ContentWrapper>
    </HomeWrapper>
  );
}
