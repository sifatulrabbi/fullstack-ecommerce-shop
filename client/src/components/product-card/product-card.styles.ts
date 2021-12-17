import styled from 'styled-components';
import { buttonBase } from '../../globalStyles';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  background-color: ${({ theme }) => theme.palette.background.light};
  overflow: hidden;
  cursor: default;

  font-size: ${({ theme }) => theme.typography.fontSize.body2};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows[0]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    box-shadow: ${({ theme }) => theme.shadows[1]};

    &:hover {
      transform: translate(0, 2px);
      box-shadow: ${({ theme }) => theme.shadows[0]};
    }
  }

  .name {
    width: 100%;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;

    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  }

  .product-img {
    width: 100%;
    object-fit: cover;
    height: 220px;
  }

  .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    font-size: ${({ theme }) => theme.typography.fontSize.caption};
    color: ${({ theme }) => theme.palette.fontColor.secondary};
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
  }

  .wrapper.bottom {
    flex-direction: row;
  }

  .price {
    font-weight: 700;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const Button = styled(buttonBase)``;
