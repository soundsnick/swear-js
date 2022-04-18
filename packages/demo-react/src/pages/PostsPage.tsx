import React, {
  FC,
} from 'react';
import { useSwear } from '@swear-js/react';

import { postsSwear } from '../swears/postsSwear';
import { Button } from '../components/Button';

export const PostsPage: FC = () => {
  const [{ data, loading }, { fetchPosts, reset }] = useSwear(postsSwear);
  return loading ? <span>Loading...</span> : (
    <>
      <div style={{ display: 'flex', gap: 5 }}>
        <Button onClick={fetchPosts}>Async Fetch posts</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
      <div style={{ padding: '30px 0' }}>
        {data.map((n: any) => (
          <div
            key={n.id}
            style={{
              display: 'flex', gap: 20, alignItems: 'flex-start', border: '1px solid #d7d7d7', padding: 30, marginBottom: 10,
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
        {data.length === 0 ? (
          <span>Empty</span>
        ) : null}
      </div>
    </>
  );
};
