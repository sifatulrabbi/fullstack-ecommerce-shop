import styled from 'styled-components';
import { buttonBase } from '../../globalStyles';
import { modalBase } from '../../globalStyles';

export const ModalContainer = styled(modalBase)`
  text-align: center;

  .title {
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
    color: #000;
  }

  .text {
    font-size: ${({ theme }) => theme.typography.fontSize.body2};
  }

  .amount {
    display: flex;
    align-items: center;
    justify: flex-start;
    grid-gap: 1rem;
    font-weight: 700;

    span {
      display: block;
    }

    button {
      background-color: transparent;
      outline: none;
      border: none;
      font-size: 1.4rem;
    }
  }

  .close-btn {
    align-self: flex-end;
    font-size: 1.4rem;
  }
`;

export const Button = styled(buttonBase)``;
