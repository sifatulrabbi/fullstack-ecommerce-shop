import styled from 'styled-components';

export const buttonBase = styled.button<{ secondary?: boolean }>`
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  transition: transform 0.3s ease-out;

  color: ${({ secondary, theme }) => {
    return secondary ? theme.palette.primary.main : '#fff';
  }};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.button};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, secondary }) => {
    return !secondary ? theme.palette.primary.main : '#fff';
  }};

  &:hover {
    transform: translate(0, 2px);
  }
`;
