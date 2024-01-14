import React from 'react';
import { Circle, CircleContainer } from './Dot.styled';

function Dot({ dot, setSelected }) {
  const { x, y,info } = dot;

  return (
    <CircleContainer
      x={x}
      y={y}
      onClick={() => {
        setSelected({ x, y, info });
      }}
    >
      <Circle />
    </CircleContainer>
  );
}

export default Dot;
