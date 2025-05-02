import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const CounterDisplay = () => {
  // Access global state using useContext
  const { state } = useContext(GlobalContext);

  return (
    <div>
      <h2>Current Count: {state.count}</h2>
    </div>
  );
};

export default CounterDisplay;
