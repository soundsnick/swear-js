import React, {
  FC,
} from 'react';
import { useSwear, useSwearGetter } from '@swear-js/react';

import { countSwear } from '../swears/countSwear';
import { countProSwear } from '../swears/countProSwear';
import { Button } from '../components/Button';

export const MainPage: FC = () => {
  const [count, {
    set: setCount, decrease, increase, reset: clearCount,
  }] = useSwear(countSwear);
  const doubledCount = useSwearGetter(countSwear, (state) => state * 2);

  const [countPro, { set: setCountPro, reset: clearCountPro }] = useSwear(countProSwear);

  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', marginTop: 150, marginBottom: 10, gap: 30,
    }}
    >
      <div style={{
        textAlign: 'center', fontSize: 50, flex: 1,
      }}
      >
        <span>
          {count}
        </span>
        <p>
          <span>Derived (computed) state:</span>
          <span>{doubledCount}</span>
        </p>
        <div style={{
          textAlign: 'center', display: 'flex', gap: 5, marginTop: 35,
        }}
        >
          <Button onClick={decrease}>-1</Button>
          <Button onClick={increase}>+1</Button>
        </div>
        <Button
          onClick={() => setCount((prev) => prev + 10)}
          style={{
            display: 'block', width: '100%', marginTop: 5, marginBottom: 5,
          }}
        >
          Set +10 via prev
        </Button>
        <Button
          onClick={clearCount}
          style={{
            background: '#f44336', display: 'block', width: '100%', marginTop: 5,
          }}
        >
          Reset
        </Button>
      </div>
      <div style={{
        textAlign: 'center', fontSize: 50, flex: 1,
      }}
      >
        <span>
          {countPro}
        </span>
        <div style={{
          textAlign: 'center', display: 'flex', gap: 5, marginTop: 35,
        }}
        >
          <Button onClick={() => setCountPro(countPro - 1)}>-1</Button>
          <Button onClick={() => setCountPro(countPro + 1)}>+1</Button>
        </div>
        <Button
          onClick={clearCountPro}
          style={{
            background: '#f44336', display: 'block', width: '100%', marginTop: 5,
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
