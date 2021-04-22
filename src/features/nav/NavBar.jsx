import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, Container, Button, Image } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useSelector } from 'react-redux';

function NavBar() {
  const { authenticated } = useSelector(state => state.auth);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <Image src='/assets/logo.png' alt='logo' size='mini' />
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events BG' />
        <Menu.Item as={NavLink} to='/sandbox' name='sandbox' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}

        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}

export default NavBar;
