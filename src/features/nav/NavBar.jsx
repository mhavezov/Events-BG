import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Menu, Container, Button, Image } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

function NavBar({ setFormOpen }) {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push('/');
  };

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

        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}

export default NavBar;
