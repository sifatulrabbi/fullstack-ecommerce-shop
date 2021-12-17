import styled from 'styled-components';
import { buttonBase } from '../../globalStyles';

export const ProductsPageContainer = styled.section`
  padding: 1rem;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    grid-template-columns: repeat(2, 1fr);
  }

  .row {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    grid-gap: 2rem;
    padding: 1rem;
    padding-bottom: 0;

    .wrapper {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      border-top: 2px solid ${({ theme }) => theme.palette.primary.dark};
      border-bottom: 2px solid ${({ theme }) => theme.palette.primary.dark};
    }

    .actions-wrapper {
      width: 100%;
      align-self: flex-end;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
    }
  }

  .image {
    object-fit: cover;
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  .title {
    font-weight: 400;
    margin-bottom: 1rem;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
  }

  .desc {
    color: ${({ theme }) => theme.palette.fontColor.secondary};
  }

  .rating {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .price {
    font-size: ${({ theme }) => theme.typography.fontSize.h4};

    .line-through {
      text-decoration-line: line-through;
      font-size: ${({ theme }) => theme.typography.fontSize.subtitle};
    }
  }

  .price.discount {
    font-size: ${({ theme }) => theme.typography.fontSize.subtitle};
    color: ${({ theme }) => theme.palette.fontColor.secondary};
  }
`;

export const Button = styled(buttonBase)``;
