import React from 'react';
import {MainPage} from "./MainPage";
import {createStore} from "@swear-js/core";
import {swearContext} from "@swear-js/react";

function App() {
  const store = createStore({ onPatch: console.log });
  return (
    <swearContext.Provider value={store}>
      <MainPage />
    </swearContext.Provider>
  );
}

export default App;
