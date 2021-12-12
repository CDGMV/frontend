import React from 'react';
import {Card, Image, Info, Data, DataText, Tag, TagText} from "./styles";

export default function GameCard({ to, game }) {
  return (
    <Card to={{pathname: to, state: game}}>
      <Image src={game.image} />
      <Info>
        <Data>
          <DataText>{game.short}</DataText>
          <DataText>R${" " + game.price}</DataText>
        </Data>
        <Tag>
          <TagText>Disponível</TagText>
        </Tag>
      </Info>
    </Card>
  );
}