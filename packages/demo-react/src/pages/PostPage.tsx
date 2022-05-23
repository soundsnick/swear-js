import React, {
  FC, useCallback, useState,
} from 'react';
import { useSwear } from '@swear-js/react';

import { postSwear } from '../swears/postSwear';
import { Button } from '../components/Button';

export const PostPage: FC = () => {
  const [id, setId] = useState('');
  const [{ data: post, loading }, { fetchPost, reset }] = useSwear(postSwear);

  const handleFetch = useCallback(() => {
    if (id && !Number.isNaN(Number(id))) {
      fetchPost(Number(id));
    } else {
      // eslint-disable-next-line no-alert
      alert('Type in a valid number');
    }
  }, [id]);

  return loading ? <span>Loading...</span> : (
    <>
      <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
        <input type="text" value={id} onChange={(e) => setId(e.currentTarget.value)} placeholder="User id" style={{ padding: '5px 15px' }} />
        <Button onClick={handleFetch}>Async Fetch posts</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
      <div>
        <div
          key={post.id}
          style={{
            display: 'flex', gap: 20, alignItems: 'flex-start', border: '1px solid #d7d7d7', padding: 30,
          }}
        >
          <div>
            <img src={post.avatar} style={{ height: 100, width: 100 }} alt={post.name} />
          </div>
          <div>
            <h2>{post.username}</h2>
            <span>{post.name}</span>
            <span>{post.email}</span>
          </div>
        </div>
      </div>
    </>
  );
};
