import styled from 'styled-components';
import { buttonBase } from '../../globalStyles';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  font-size: ${({ theme }) => theme.typography.fontSize.body2};

  .padding {
    padding: 1rem;
  }

  .name {
    width: 100%;
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: 700;
  }

  .product-img {
    max-width: 100%;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  .bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .price {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    font-weight: 700;
  }
`;

export const Button = styled(buttonBase)``;
