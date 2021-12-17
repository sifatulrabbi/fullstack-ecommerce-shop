import styled from 'styled-components';

export const buttonBase = styled.button<{ secondary?: boolean }>`
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  z-index: 1;
  position: relative;
  width: max-content;

  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.button};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ secondary, theme }) => {
    return secondary ? theme.palette.primary.main : '#fff';
  }};
  background-color: ${({ theme, secondary }) => {
    return !secondary ? theme.palette.primary.main : 'transparent';
  }};

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 0.3s ease-out;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;
