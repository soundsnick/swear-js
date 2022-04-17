import { createSwear } from '@swear-js/react';
import axios from 'axios';

const defaultState: any[] = [];

export const postsSwear = createSwear('posts', defaultState, {
  fetchPosts: (mutate) => () => {
    axios.get('https://jsonplaceholder.ir/users')
      .then((res) => res.data)
      .then((data) => {
        mutate(data);
      });
  },
});
