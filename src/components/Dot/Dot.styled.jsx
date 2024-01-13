import styled from '@emotion/styled';

export const CircleContainer = styled.div`
  position: absolute;
  left: ${({ x }) => x}px;
  bottom: ${({ y }) => y}px;
`;

export const Circle = styled.div`
  position: relative;
  left: -50%;
  top: 50%;
  transform: translate(0%, 50%);
  border-radius: 50%;
  background-color: black;
  width: 15px;
  height: 15px;
  &:hover {
    background-color: green ;
  }
`;
