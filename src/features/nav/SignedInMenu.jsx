import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

function SignedInMenu({ signOut }) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='Miro'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create event'
            icon='plus'
          />
          <Dropdown.Item text='My profile' icon='user' />
          <Dropdown.Item
            onClick={signOut}
            text='Sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

export default SignedInMenu;
