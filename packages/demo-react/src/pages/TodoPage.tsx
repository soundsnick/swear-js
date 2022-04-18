import React, {
  FC, useCallback, useState,
} from 'react';
import { useSwearState } from '@swear-js/react';

import { Button } from '../components/Button';

type TodoList = ReadonlyArray<{
  id: number;
  title: string;
}>;

export const TodoPage: FC = () => {
  const [title, setTitle] = useState('');
  const [list, { set, reset }] = useSwearState<TodoList>('todo', []);

  const handleTodoAdd = useCallback(() => {
    if (title) {
      set((prev) => [...prev, { id: prev.length, title }]);
      setTitle('');
    }
  }, [title]);

  return (
    <>
      <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
        <input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)} placeholder="Todo title" style={{ padding: '5px 15px' }} />
        <Button onClick={handleTodoAdd}>Add todo item</Button>
        <Button onClick={reset}>Reset todo list</Button>
      </div>
      <div>
        {list.map((n, i) => (
          <div
            key={n.id}
            style={{
              display: 'flex', gap: 20, alignItems: 'flex-start', border: '1px solid #d7d7d7', padding: 30,
            }}
          >
            <div>
              <h2>{n.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
