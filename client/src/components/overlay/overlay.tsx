import React from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean;
  closeFnc: () => void;
}

const OverlayContainer = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: all;
  z-index: 1500;
  background-color: rgba(0, 0, 0, 0.7);
`;

export function Overlay({ active, closeFnc }: Props): React.ReactElement {
  return <OverlayContainer active={active} onClick={closeFnc}></OverlayContainer>;
}
