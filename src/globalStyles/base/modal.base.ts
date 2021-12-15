import styled from 'styled-components';

export const modalBase = styled.div<{ active: boolean }>`
  position: fixed;
  z-index: 2000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(280px, 90vw, 380px);
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  grid-gap: 1rem;

  .bottom {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 1rem;
  }
`;
