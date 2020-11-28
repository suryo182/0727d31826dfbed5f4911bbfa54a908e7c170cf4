import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';

const SideBarWrapper = styled.div`
  width: 25rem;
  min-height: 100%;
  background-color: #17031d;
  display: flex;
  /* justify-content: center; */
`;

const SideBarMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 2rem;
`;

const ContactWrapper = styled(Link)`
  margin: 0 auto;
  color: #fff;
  font-size: 1.8rem;
  display: flex;
  width: 100%;
  justify-content: center;
  transition: 0.2s all ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #4c0c64;
  }
`;

const MyFavoritesWrapper = styled(Link)`
  margin: 0 auto;
  color: #fff;
  font-size: 1.8rem;
  display: flex;
  width: 100%;
  justify-content: center;
  transition: 0.2s all ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #4c0c64;
  }
`;

const ContactTitle = styled.h4`
  margin: 0 auto;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 5rem;
  display: flex;
`;
const ListTitle = styled.h5`
  margin: 0 auto;
  color: #fff;
  font-size: 1.4rem;
`;

export default function SideBar() {
  const { lists, favorites } = useSelector((state) => state);
  return (
    <SideBarWrapper>
      <SideBarMenu>
        <ContactTitle>
          <ImportContactsIcon
            style={{
              fontSize: '2.4rem',
              marginRight: '0.5rem',
              alignSelf: 'center',
            }}
          />
          Contactlist
        </ContactTitle>
        <ListTitle>Contacts</ListTitle>
        <ContactWrapper to="/">
          <PersonIcon
            style={{
              fontSize: '1.8rem',
              alignSelf: 'center',
              marginRight: '0.5rem',
            }}
          />{' '}
          All Contacts ({lists.length})
        </ContactWrapper>
        <MyFavoritesWrapper to="/favorites">
          <StarIcon
            style={{
              fontSize: '1.8rem',
              alignSelf: 'center',
              marginRight: '0.5rem',
            }}
          />
          My Favorites {favorites.length > 0 && `(${favorites.length})`}
        </MyFavoritesWrapper>
      </SideBarMenu>
    </SideBarWrapper>
  );
}
