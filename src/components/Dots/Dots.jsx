import React from 'react';
import Dot from '../Dot';

function Dots({ dots, setSelected }) {
  return (
    <>
      {dots.map((dot, index) => (
        <Dot key={index} dot={dot} setSelected={setSelected} />
      ))}
    </>
  );
}

export default Dots;
