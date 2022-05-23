import { createSwear } from '@swear-js/core';
import axios from 'axios';

type stateTypes = {
  data: ReadonlyArray<any>;
  loading: boolean;
};

const defaultState: stateTypes = {
  data: [],
  loading: false,
};

export const postsSwear = createSwear('posts', defaultState, (mutate) => ({
  fetchPosts: () => {
    mutate((prev) => ({ ...prev, loading: true }));
    axios.get('https://jsonplaceholder.ir/users')
      .then((res) => res.data)
      .then((data) => {
        mutate({ ...defaultState, data });
      });
  },
}));
