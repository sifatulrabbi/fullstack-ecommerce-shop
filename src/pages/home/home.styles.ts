import styled from 'styled-components';
import { background_1 } from '../../assets';
import { buttonBase } from '../../globalStyles';

export const HomeContainer = styled.section`
  .products-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${background_1});
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  min-height: 90vh;
  position: relative;

  .page-title {
    z-index: 2;
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }

  .page-desc {
    color: #fff;
    text-align: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #111;
    opacity: 0.8;
    pointer-events: none;
  }
`;

export const Button = styled(buttonBase)`
  padding: 0.8rem 2rem;
  z-index: 2;
  font-size: 1.1rem;
`;
