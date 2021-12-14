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
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};

  .menu-btn {
    color: #fff;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 1.6rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
      display: none;
    }
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  min-width: 10rem;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};

  .search-input {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.8rem;
    font-size: ${({ theme }) => theme.typography.fontSize.body2};
    background: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.palette.fontColor.dark};
  }

  .search-button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: ${({ theme }) => theme.palette.fontColor.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid lightgray;

    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const NavMenu = styled.ul<{ active: boolean }>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 1.5rem;

  .cart-btn {
    padding: 0.2rem;
    font-size: 1.8rem;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    color: #fff;
    font-size: ${({ theme }) => theme.typography.fontSize.body2};

    &:hover {
      transition: color 0.3s ease-out;
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    display: flex;
    flex-direction: row;
    position: unset;
    padding: 0;
  }
`;
