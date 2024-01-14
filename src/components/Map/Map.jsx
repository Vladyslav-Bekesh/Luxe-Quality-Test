import React, { forwardRef, useEffect, useState } from 'react';
import { MapSheet, MapContainer } from './Map.styled';
import Dots from 'components/Dots/Dots';

const Map = forwardRef(({ dots, setSelected }, ref) => {
  const defSize = {
    bottom: 0,
    top: 0,
    heigth: 0,
    width: 0,
    left: 0,
    rigth: 0,
    x: 0,
    y: 0,
  };

  const [sizes, setSizes] = useState(defSize);

  useEffect(() => {
    if (ref.current) {
      setSizes(ref.current.getBoundingClientRect());
    }
  }, [ref]);
  console.log(sizes);

  return (
    <MapContainer ref={ref}>
      <MapSheet>
        <Dots dots={dots} setSelected={setSelected} />
      </MapSheet>
    </MapContainer>
  );
});

export default Map;
