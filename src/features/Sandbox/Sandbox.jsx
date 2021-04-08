import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { decrement, increment } from './testReducer';

function Sandbox() {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();

  return (
    <>
      <h1>testing redux</h1>
      <h2>data is: {data}</h2>
      <Button
        onClick={() => dispatch(increment(1))}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(1))}
        content='Decrement'
        color='red'
      />
    </>
  );
}

export default Sandbox;
