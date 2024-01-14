import React from 'react';
import { SidebarContainer } from './Sidebar.styled';
import AvailableServes from '../AvailableServes';
import Serve from 'components/Serve';

function Sidebar({ dots, selected }) {
  if (!selected) {
    return (
      <SidebarContainer>
        {dots && <AvailableServes serves={dots} />}
      </SidebarContainer>
    );
  }

  const { x, y, info } = selected;

  return (
    <SidebarContainer>
      {dots && <AvailableServes serves={dots} />}
      {y && x && info && <Serve x={x} y={y} info={info} />}
    </SidebarContainer>
  );
}

export default Sidebar;
