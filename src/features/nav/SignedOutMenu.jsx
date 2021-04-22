import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modal/modalReducer';

function SignedOutMenu() {
  const dispatch = useDispatch();
  return (
    <Menu.Item position='right'>
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'LoginForm' }))
        }
        basic
        inverted
        content='login'
      />
      <Button
        basic
        inverted
        content='register'
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
}

export default SignedOutMenu;
