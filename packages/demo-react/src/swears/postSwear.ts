import { createSwear } from '@swear-js/core';
import axios from 'axios';

type stateTypes = {
  data: any;
  loading: boolean;
};

const defaultState: stateTypes = {
  data: {},
  loading: false,
};

export const postSwear = createSwear('post', defaultState, (mutate) => ({
  fetchPost: (id: number) => {
    mutate((prev) => ({ ...prev, loading: true }));
    axios.get(`https://jsonplaceholder.ir/users/${id}`)
      .then((res) => res.data)
      .then((data) => {
        mutate({ ...defaultState, data });
      })
      .catch((e) => {
        if (e.response.status === 404) {
          // eslint-disable-next-line no-alert
          alert('Not found');
        }
        mutate({ ...defaultState });
      });
  },
}));
