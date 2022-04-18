import React, { FC } from 'react';
import { LinkProps, Link as LinkCore } from 'react-router-dom';

export const Link: FC<LinkProps> = ({ style, ...rest }: LinkProps) => (
  <LinkCore
    style={{
      display: 'inline-block',
      color: '#009688',
      textDecoration: 'none',
      ...style,
    }}
    {...rest}
  />
);
