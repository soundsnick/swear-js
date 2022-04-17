import React from 'react';
import { createStore } from '@swear-js/core';
import { swearContext } from '@swear-js/react';
import { swearLogger } from '@swear-js/logger';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { PostsPage } from './pages/PostsPage';

function App() {
  const store = createStore({ onPatch: swearLogger() });
  return (
    <swearContext.Provider value={store}>
      <Switch>
        <Route path="/posts">
          <PostsPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </swearContext.Provider>
  );
}

export default App;
