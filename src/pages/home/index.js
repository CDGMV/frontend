/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContainerHome, CardsSection} from "./styles";
import Search from '../../components/search';
import GameCard from "../../components/gameCard";
import RuneTerra from '../../assets/games/runeterra.png';

export default function Home() {

  let game = {
    name: "Legends of RuneTerra",
    short: "RuneTerra",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: RuneTerra,
    genre: "Ação",
    classification: "LIVRE",
    platform: "PC",
    price: "250,00"
  };

  //to={{pathname: '/gamerent', state: game}}

  return (
    <ContainerHome>
      <Search placeholder="Busca"/>
      <CardsSection>
        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />

        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />

        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />
        <GameCard to='/gamerent' game={game} />
      </CardsSection>
    </ContainerHome>
  );

}