import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  position: relative;

  .name {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .total {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    color: ${({ theme }) => theme.palette.fontColor.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  }

  .amount-wrapper {
    width: max-content;
    grid-gap: 1rem;
    color: ${({ theme }) => theme.palette.fontColor.secondary};

    .btn {
      padding: 0.3rem;
    }
  }

  .rmv-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    color: pink;
  }
`;
