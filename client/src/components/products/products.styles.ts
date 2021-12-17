import styled from 'styled-components';

export const ProductsContainer = styled.section`
  width: 100%;
  max-width: 100vw;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 1rem 8vw;
  }
`;
