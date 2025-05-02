import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';

function App() {
  return (
    <GlobalProvider>
      <h1>Global Counter App</h1>
      <CounterDisplay />
      <CounterControls />
    </GlobalProvider>
  );
}

export default App;
