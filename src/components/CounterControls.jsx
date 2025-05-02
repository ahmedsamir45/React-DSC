import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const CounterControls = () => {
  // Access dispatch function to trigger state updates
  const { dispatch } = useContext(GlobalContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>−</button>
    </div>
  );
};

export default CounterControls;
