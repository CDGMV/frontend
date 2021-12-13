import styled from 'styled-components';
import background from '../../assets/signUp/background.png';
import {ContainerImage} from "../../components/global";

export const ContainerSuport = styled(ContainerImage)`
  min-height: 100vh;
  justify-content: top;
  align-items: center;
  background: url(${background}) fixed;
  background-size: cover;
`;

export const InitialSection = styled.div`
  width: 80%;
  margin-bottom: 50px;

  h1{
    width: 60%;
    color: ${({ theme }) => theme.colors.light};
    font-size: 40px;
  }
`;

export const Section = styled.div`
  width: 60%;
  padding: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(36, 0, 70, 0.5);
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
  width: 80%;
  margin-top: 20px;
  padding-left: 20%;
  padding-right: 20%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SocialLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  display: flex:
  align-self: center;
  margin-right: 20px;
`;