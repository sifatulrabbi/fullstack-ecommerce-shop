import styled from 'styled-components';
import { buttonBase } from '../../globalStyles';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 1rem;

  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.palette.background.light};

  .form-group {
    input {
      margin-top: 0.3rem;
      width: 100%;
      outline: none;
      border: none;
      padding: 0.4rem;
      background-color: rgba(255, 255, 255, 0.1);
      border: 2px solid transparent;

      border-radius: ${({ theme }) => theme.borderRadius};
      font-size: ${({ theme }) => theme.typography.fontSize.body2};

      &:focus {
        border-color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const Button = styled(buttonBase)`
  width: 100%;
`;
