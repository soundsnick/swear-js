import React, {
  FC,
} from 'react';
import { useSwear } from '@swear-js/react';

import { Link } from 'react-router-dom';
import { countSwear } from '../swears/countSwear';
import { countProSwear } from '../swears/countProSwear';
import { postsSwear } from '../swears/postsSwear';

export const MainPage: FC = () => {
  const [count, { set: setCount, reset: clearCount }] = useSwear(countSwear);
  const [countPro, { set: setCountPro, reset: clearCountPro }] = useSwear(countProSwear);
  const [posts, { fetchPosts }] = useSwear(postsSwear);
  return (
    <div style={{
      maxWidth: 500, margin: 'auto', fontFamily: 'sans-serif', lineHeight: 1.2,
    }}
    >
      <div style={{ padding: '30px 0', borderBottom: '1px solid #d7d7d7' }}>
        <h2 style={{ marginBottom: 5, color: '#009688' }}>SwearJS demo application</h2>
        <span>You can check console for patch info</span>
        <p style={{ margin: 0, marginTop: 30, marginBottom: 5 }}>
          NpmJS:
          {' '}
          <a href="https://npmjs.org/@swear-js/react" style={{ color: '#009688', textDecoration: 'none' }}>@swear-js/react</a>
        </p>
        <p style={{ margin: 0 }}>
          Github:
          {' '}
          <a href="https://github.com/soundsnick/swear-js" style={{ color: '#009688', textDecoration: 'none' }}>Repository</a>
        </p>

        <Link to="/posts">Posts</Link>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: 150, marginBottom: 10,
      }}
      >
        <div style={{
          textAlign: 'center', fontSize: 50,
        }}
        >
          <span>
            {count}
          </span>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={clearCount}>Reset</button>
          </div>
        </div>
        <div style={{
          textAlign: 'center', fontSize: 50,
        }}
        >
          <span>
            {countPro}
          </span>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setCountPro(countPro - 1)}>-1</button>
            <button onClick={() => setCountPro(countPro + 1)}>+1</button>
            <button onClick={clearCountPro}>Reset</button>
          </div>
        </div>
      </div>

      <button onClick={fetchPosts}>Async Fetch posts</button>
      <div>
        {posts.map((n) => (
          <div
            key={n.id}
            style={{
              display: 'flex', gap: 20, alignItems: 'flex-start', border: '1px solid #d7d7d7', padding: 30,
            }}
          >
            <div>
              <img src={n.avatar} style={{ height: 100, width: 100 }} alt={n.name} />
            </div>
            <div>
              <h2>{n.username}</h2>
              <span>{n.name}</span>
              <span>{n.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
