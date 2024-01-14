import { useEffect, useRef, useState } from 'react';
import Map from '../Map';
import dots from '../../data/dots.json';
import Sidebar from '../Sidebar';
import { AppContainer } from './App.styled';

const App = () => {
  const mapBlockRef = useRef(null);
  const [size, setSize] = useState({ width: 0, heigth: 0 });
  const [selected, setSelected] = useState(null);

  const showMapWidth = () => {
    if (mapBlockRef.current) {
      return mapBlockRef.current.getBoundingClientRect();
    }

    console.log('smth wrong');
  };

  useEffect(() => {
    setSize(showMapWidth());
  }, []);

  return (
    <AppContainer>
      <Map
        dots={dots}
        ref={mapBlockRef}
        size={size}
        setSelected={setSelected}
      />

      {selected ? <Sidebar selected={selected} /> : <Sidebar dots={dots} />}
    </AppContainer>
  );
};

export default App;
