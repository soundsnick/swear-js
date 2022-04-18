import React, { FC } from 'react';
import { Link } from './Link';

export const Navigation: FC = () => (
  <div style={{ padding: '30px 0', paddingBottom: 0 }}>
    <h2 style={{ marginBottom: 5, color: '#009688' }}>SwearJS demo application</h2>
    <span>You can check console for patch info</span>
    <p style={{ margin: 0, marginTop: 30, marginBottom: 5 }}>
      NpmJS:
      {' '}
      <Link to="https://npmjs.org/@swear-js/react">@swear-js/react</Link>
    </p>
    <p style={{ margin: 0 }}>
      Github:
      {' '}
      <Link to="https://github.com/soundsnick/swear-js">Repository</Link>
    </p>
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #d7d7d7', padding: '20px 0', marginTop: 20,
    }}
    >
      <h2>Menu:</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        <Link to="/">Home</Link>
        <Link to="/post">Get post</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  </div>
);
