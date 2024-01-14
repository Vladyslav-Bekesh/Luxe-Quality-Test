import React from 'react';
import { Item, Info } from './Serve.styled';

function Serve({ x, y, info }) {
  return (
    <Item>
      <Info>info: {info}</Info>
      <Info>
        Position: x{x}, y{y}
      </Info>
    </Item>
  );
}

export default Serve;
