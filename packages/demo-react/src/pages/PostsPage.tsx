import React, {
  FC,
} from 'react';
import { useSwear } from '@swear-js/react';

import { Link } from 'react-router-dom';
import { postsSwear } from '../swears/postsSwear';

export const PostsPage: FC = () => {
  const [posts, { fetchPosts, reset }] = useSwear(postsSwear);
  return (
    <div style={{
      maxWidth: 500, margin: 'auto', fontFamily: 'sans-serif', lineHeight: 1.2,
    }}
    >
      <div style={{ padding: '30px 0', borderBottom: '1px solid #d7d7d7' }}>
        <h2 style={{ marginBottom: 5, color: '#009688' }}>SwearJS demo application</h2>
        <span>You can check console for patch info</span>
        <br />
        <Link to="/">Back to main</Link>
      </div>

      <button onClick={fetchPosts}>Async Fetch posts</button>
      <button onClick={reset}>Reset</button>
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
