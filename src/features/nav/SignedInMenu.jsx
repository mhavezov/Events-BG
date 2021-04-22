import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { signOutUser } from '../auth/authActions';

function SignedInMenu() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.auth);
  const history = useHistory();
  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src={currentUser.photoURL || '/assets/user.png'}
      />
      <Dropdown pointing='top left' text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create event'
            icon='plus'
          />
          <Dropdown.Item text='My profile' icon='user' />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push('/');
            }}
            text='Sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

export default SignedInMenu;
