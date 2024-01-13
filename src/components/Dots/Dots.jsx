import React from 'react';
import Dot from '../Dot';
import { DotsList } from './Dots.styled';

function Dots({ dots }) {
  return (
    <DotsList>
      {dots.map((dot,index) => {
        return <Dot dot={dot} key={index} />;
      })}
    </DotsList>
  );
}

export default Dots;
