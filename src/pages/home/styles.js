import styled from 'styled-components';
import background from '../../assets/home/background.jpg';
import {ContainerImage} from "../../components/global";
import {Link} from 'react-router-dom';

export const Redirect = styled(Link)`
  width: 50%;
`;

export const ContainerHome = styled(ContainerImage)`
  min-height: 100vh;
  justify-content: top;
  align-items: center;
  background: url(${background}) fixed;
  background-size: cover;
`;

export const CardsSection = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
