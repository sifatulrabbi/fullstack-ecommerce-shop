import styled from 'styled-components';
import { buttonBase } from '../../globalStyles';

export const CartContainer = styled.section`
  margin-top: 80px;
  padding-top: 2rem;
  padding-bottom: 1rem;

  .title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 2rem;

    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    .wrapper {
      display: grid;
      grid-template-columns: 1fr;
      align-content: center;
      grid-gap: 1rem;

      &.total {
        align-content: flex-start;
        justify-items: center;
        grid-gap: 15vh;
      }
    }

    .cart-total {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};
      text-transform: uppercase;

      .amount {
        font-weight: 700;
        font-size: ${({ theme }) => theme.typography.fontSize.h2};
      }
    }

    .cart-actions {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
      grid-template-columns: 60% 40%;
    }
  }
`;

export const Button = styled(buttonBase)``;
