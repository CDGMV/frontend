import styled from 'styled-components';
import background from '../../assets/home/background.jpg';
import {ContainerImage} from "../../components/global";
import {Link} from 'react-router-dom';

export const ContainerHome = styled(ContainerImage)`
  min-height: 100vh;
  justify-content: top;
  align-items: center;
  background: url(${background}) fixed;
  background-size: cover;
  min-width: 400px;
`;

export const CardsSection = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  @media screen and (max-width:940px){
    grid-template-columns: 1fr 1fr 1fr;
    width: 70%;
  }
  
  @media screen and (max-width:750px){
    width: 70%;
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width:685px){
    grid-template-columns: 1fr;
    width: 50%;
  }
  
  @media screen and (max-width:550px){
    grid-template-columns: 1fr;
    width: 50%;
  }
`;
