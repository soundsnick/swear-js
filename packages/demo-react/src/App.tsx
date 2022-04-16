import React from 'react';
import { createStore } from '@swear-js/core';
import { swearContext } from '@swear-js/react';
import { swearLogger } from '@swear-js/logger';
import { MainPage } from './MainPage';

function App() {
  const store = createStore({ onPatch: swearLogger });
  return (
    <swearContext.Provider value={store}>
      <MainPage />
    </swearContext.Provider>
  );
}

export default App;
