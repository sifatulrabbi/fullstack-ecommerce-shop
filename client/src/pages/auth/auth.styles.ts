import styled from 'styled-components';

export const AuthContainer = styled.section`
  margin-top: 80px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 1rem;

  .title {
    text-transform: uppercase;
    font-weight: 700;

    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
