import React, { forwardRef } from 'react';
import { MapSheet, MapContainer } from './Map.styled';

const Map = forwardRef(({ cords, size }, ref) => {
  const { width, heigth } = size;
  

  return (
    <MapContainer ref={ref}>
      <MapSheet />
    </MapContainer>
  );
});

export default Map;
