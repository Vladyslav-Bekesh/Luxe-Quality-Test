import { useEffect, useRef, useState } from 'react';
import Map from './Map';
import dots from '../data/dots.json';

export const App = () => {
  const mapBlockRef = useRef(null);
  const [size, setSize] = useState({ width: 0, heigth: 0 });
  
  const showMapWidth = () => {
    if (mapBlockRef.current) {
      return mapBlockRef.current.getBoundingClientRect();
    }
  };

  useEffect(() => {
    setSize(showMapWidth());
  }, []);

  return <Map cords={dots} ref={mapBlockRef} size={size}/>;
};
