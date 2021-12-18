import styled from 'styled-components';

export const CartContainer = styled.section`
  margin-top: 80px;
  padding-top: 2rem;
  padding-bottom: 1rem;

  .title {
    text-transform: uppercase;
    font-weight: bold;

    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  }
`;
