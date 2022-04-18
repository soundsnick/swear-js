import React, {
  FC,
} from 'react';
import { useSwear } from '@swear-js/react';

import { countSwear } from '../swears/countSwear';
import { countProSwear } from '../swears/countProSwear';
import { Button } from '../components/Button';

export const MainPage: FC = () => {
  const [count, {
    decrease, increase, reset: clearCount,
  }] = useSwear(countSwear);
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
        <div style={{
          textAlign: 'center', display: 'flex', gap: 5, marginTop: 35,
        }}
        >
          <Button onClick={decrease}>-1</Button>
          <Button onClick={increase}>+1</Button>
        </div>
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
