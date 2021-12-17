import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.fontColor.light};
  font-weight: 600;

  span {
    display: block;
  }

  .main-text {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
    letter-spacing: 2px;
  }

  .secondary-text {
    font-weight: 400;
    font-size: 0.6rem;
  }
`;
