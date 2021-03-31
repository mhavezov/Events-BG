import React from 'react';

import { Menu, Container, Button, Image } from 'semantic-ui-react';

function NavBar({setFormOpen}) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <Image src='/assets/logo.png' alt='logo' size='mini' />
        </Menu.Item>
        <Menu.Item name='Events BG' />
        <Menu.Item>
          <Button  onClick={()=>setFormOpen(true)} positive inverted content='Create Event' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='login' />
          <Button
            basic
            inverted
            content='register'
            style={{ marginLeft: '0.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
