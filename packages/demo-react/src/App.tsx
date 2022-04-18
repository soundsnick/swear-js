import React from 'react';
import { createStore } from '@swear-js/core';
import { swearContext } from '@swear-js/react';
import { swearLogger } from '@swear-js/logger';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { PostsPage } from './pages/PostsPage';
import { PostPage } from './pages/PostPage';
import { Navigation } from './components/Navigation';
import { TodoPage } from './pages/TodoPage';

function App() {
  const store = createStore({ onPatch: swearLogger() });
  return (
    <swearContext.Provider value={store}>
      <div style={{
        maxWidth: 500, margin: 'auto', fontFamily: 'sans-serif', lineHeight: 1.2,
      }}
      >
        <Navigation />
        <Switch>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/todo">
            <TodoPage />
          </Route>
          <Route path="/post">
            <PostPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </swearContext.Provider>
  );
}

export default App;
