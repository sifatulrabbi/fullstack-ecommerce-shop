import styled from 'styled-components';

export const buttonBase = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.button};
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #fff;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translate(0, 2px);
  }
`;
