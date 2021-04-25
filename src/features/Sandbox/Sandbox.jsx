import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modal/modalReducer';
import { decrement, increment } from './testReducer';

function Sandbox() {
  const [target, setTarget] = useState();
  const data = useSelector(state => state.test.data);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.async);

  return (
    <>
      <h1>testing redux</h1>
      <h2>data is: {data}</h2>
      <Button
        name='increment'
        loading={loading && target === 'increment'}
        onClick={e => {
          dispatch(increment(1));
          setTarget(e.target.name);
        }}
        content='Increment'
        color='green'
      />
      <Button
        name='decrement'
        loading={loading && target === 'decrement'}
        onClick={e => {
          dispatch(decrement(1));
          setTarget(e.target.name);
        }}
        content='Decrement'
        color='red'
      />
      <Button
        onClick={() =>
          dispatch(
            openModal({
              modalType: 'TestModal',
              modalProps: { data },
            })
          )
        }
        content='open modal'
        color='teal'
      />
    </>
  );
}

export default Sandbox;
