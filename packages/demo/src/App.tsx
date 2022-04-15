import React from 'react';
import { createStore } from '@swear-js/core';
import { swearContext } from '@swear-js/react';
import { MainPage } from './MainPage';

function App() {
  const store = createStore({ onPatch: console.log });
  return (
    <swearContext.Provider value={store}>
      <MainPage />
    </swearContext.Provider>
  );
}

export default App;
