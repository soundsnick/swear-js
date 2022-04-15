import React, { FC, useCallback } from 'react';
import { useSwear } from '@swear-js/react';

import { countSwear } from './countSwear';

export const MainPage: FC = () => {
  console.log(useSwear(countSwear));
  const [count, { set: setCount }] = useSwear<number>(countSwear);

  const decreaseCount = useCallback(() => {
    setCount(count - 1);
  }, [count, setCount]);

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);
  return (
    <div>
      <div style={{
        textAlign: 'center', marginTop: 150, marginBottom: 10, fontSize: 50,
      }}
      >
        <span>{count}</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={decreaseCount}>-1</button>
        <button onClick={increaseCount}>+1</button>
      </div>
    </div>
  );
};
