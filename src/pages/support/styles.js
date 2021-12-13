import styled from 'styled-components';
import background from '../../assets/support/background.jpg';
import {ContainerImage} from "../../components/global";

export const ContainerSupport = styled(ContainerImage)`
  min-height: 100vh;
  justify-content: top;
  align-items: center;
  background: url(${background}) fixed;
  background-size: cover;
`;

export const InitialSection = styled.div`
  width: 80%;

  h1{
    width: 60%;
    color: ${({ theme }) => theme.colors.light};
    font-size: 40px;
  }
`;

export const Section = styled.div`
  width: 80%;
  padding: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid #6B33FF;
  border-radius: 15px;
  backdrop-filter: blur(20px);

  p {
    text-align: justify;
    font-size: 18px;
    color: white;
  }
`;

export const SocialSection = styled.div`
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
`;

export const SocialLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  display: flex:
  align-self: center;
  margin-right: 10px;
`;



/* background-color: rgba(36, 0, 70, 0.8); */