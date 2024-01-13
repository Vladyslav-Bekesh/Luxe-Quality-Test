import styled from '@emotion/styled';
import MapImage from '../../data/Map.png';

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  width: 100%;
  height: 100%;
`;

const MapSheet = styled.div`
position: relative;
  width: 500px;
  height: 500px;
  background-image: url(${MapImage});
  background-size: cover;
`;

export { MapSheet, MapContainer };
