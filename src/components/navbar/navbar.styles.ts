import styled from 'styled-components';

export const Wrapper = styled.nav<{ shrink: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: ${({ shrink }) => (shrink ? '80px' : '120px')};
  background-color: ${({ theme }) => theme.palette.primary.dark};
  transition: height 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows[0]};
`;

export const SearchBar = styled.div``;

export const NavMenu = styled.ul``;
