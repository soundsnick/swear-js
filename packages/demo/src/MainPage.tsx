import React, {
  FC, useCallback, useEffect, useMemo,
} from 'react';
import { useSwear } from '@swear-js/react';

import { countSwear } from './countSwear';
import { countProSwear } from './countProSwear';

export const MainPage: FC = () => {
  const [count, { set: setCount, clear: clearCount }] = useSwear<number>(countSwear);
  const [countPro, { set: setCountPro, clear: clearCountPro }] = useSwear<number>(countProSwear);

  const square = useMemo(() => count * count, [count]);

  useEffect(() => {
    console.log('CHECK reactivity', count);
  }, []);

  return (
    <div>
      <div style={{
        textAlign: 'center', marginTop: 150, marginBottom: 10, fontSize: 50,
      }}
      >
        <span>
          {count}
        </span>
        <p style={{ fontSize: 13 }}>
          Square:
          {square}
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={clearCount}>Reset</button>
      </div>

      <div style={{
        textAlign: 'center', marginTop: 150, marginBottom: 10, fontSize: 50,
      }}
      >
        <span>
          {countPro}
        </span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setCountPro(countPro - 1)}>-1</button>
        <button onClick={() => setCountPro(countPro + 1)}>+1</button>
        <button onClick={clearCountPro}>Reset</button>
      </div>
    </div>
  );
};
