import styled from '@emotion/styled';
import MapImage from '../../data/Map.png';

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gray;
  height: 100%;
`;

const MapSheet = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-image: url(${MapImage});
  background-size: cover;
  border-radius: 50%;
`;

export { MapSheet, MapContainer };
