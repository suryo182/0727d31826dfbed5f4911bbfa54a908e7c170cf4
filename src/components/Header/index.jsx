import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import styled from 'styled-components';

const ContactHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem;
  height: 7rem;
  width: 100%;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);
`;

const AllContactWrapper = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  align-self: center;
`;

const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <ContactHeaderWrapper>
      <AllContactWrapper>All Contacts</AllContactWrapper>
      <NotificationWrapper>
        <Badge badgeContent={4} color="primary" style={{ marginRight: '2rem' }}>
          <NotificationsIcon style={{ fontSize: '2.4rem' }} />
        </Badge>
        <Avatar alt="avatar" />
      </NotificationWrapper>
    </ContactHeaderWrapper>
  );
}
