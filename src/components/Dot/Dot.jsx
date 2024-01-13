import React from 'react';
import { Circle, CircleContainer } from './Dot.styled';

function Dot({ dot: { x, y } }) {
  return (
    <CircleContainer x={x} y={y}>
      <Circle />
    </CircleContainer>
  );
}

export default Dot;
