import React from 'react';
import { List } from './AvailableServes.styled';
import  Serve  from '../Serve';
function AvailableServes({ serves }) {
  return (
    <List>
      {serves.map(({ x, y, info }, index) => (
        <Serve key={index} x={x} y={y} info={info}></Serve>
      ))}
    </List>
  );
}

export default AvailableServes;
