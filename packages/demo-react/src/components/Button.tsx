import React, { ButtonHTMLAttributes, FC } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ style, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    style={{
      display: 'block',
      width: '100%',
      background: '#009688',
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
      ...style,
    }}
    {...rest}
  />
);
