/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Redirect, ContainerHome, CardsSection, SearchSection} from "./styles";
import Input from "../../components/input";
import GameCard from "../../components/gameCard";
import RuneTerra from '../../assets/games/runeterra.png';

export default function Home() {

  return (
    <ContainerHome>
      <SearchSection>
        <Input placeholder="Busca" size="60%" /> 
      </SearchSection>
      <CardsSection>
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />

        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />

        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
        <GameCard image={RuneTerra} name={"RuneTerra"} price={"250,00"} />
      </CardsSection>
    </ContainerHome>
  );

}