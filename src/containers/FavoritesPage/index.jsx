import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FavContact from '../../components/FavContact';
const FavoritesListWrapper = styled.div`
  height: 100vh;
`;
export default function FavoritesPage() {
  const { favorites } = useSelector((state) => state);
  console.log(favorites);
  return (
    <FavoritesListWrapper data-testid="favorites-page">
      {favorites &&
        favorites.map((contact) => (
          <FavContact key={contact.id} list={contact} />
        ))}
    </FavoritesListWrapper>
  );
}
