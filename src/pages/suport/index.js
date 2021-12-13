/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {InitialSection, ContainerSuport, Section, SocialSection, SocialLine, Icon} from "./styles";

import profile from '../../assets/profile/profile.png'; // Colocar icones corretos e imagem de fundo correta

export default function Suport() {

  return (
    <ContainerSuport>
      <InitialSection>
        <h1>SUPORTE LOKA GAMES</h1>
      </InitialSection>
      <Section>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <SocialSection>
          <SocialLine><Icon src={profile} /><p>aaaa</p></SocialLine>
          <SocialLine><Icon src={profile} /><p>aaaa</p></SocialLine>
          <SocialLine><Icon src={profile} /><p>aaaa</p></SocialLine>
          <SocialLine><Icon src={profile} /><p>aaaa</p></SocialLine>
        </SocialSection>
      </Section>
    </ContainerSuport>
  );
}