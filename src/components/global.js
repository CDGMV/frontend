import styled from 'styled-components';

// Containers
export const Main = styled.main`
  width: 100%;
  display: flex;  
  flex-direction: column;
`;

export const ContainerImage = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding-top: 100px;
  flex-direction: column;
  background-repeat: no-repeat, repeat;
  background-size: cover;

  @media screen and (max-width: 1260px) {
    height: auto;
  }
`;

// Animations
export const Box = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #141414;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  animation: is-rotating 1s infinite;
  border: 8px solid ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.primary};
  height: 70px;
  width: 70px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
