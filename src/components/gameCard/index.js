import React from 'react';
import {Card, Image, Info, Data, DataText, Tag, TagText} from "./styles";

export default function GameCard({ image, name, price, status, type }) {
  return (
    <Card>
      <Image src={image} />
      <Info>
        <Data>
          <DataText>{name}</DataText>
          <DataText>R${" " + price}</DataText>
        </Data>
        <Tag>
          <TagText>Disponível</TagText>
        </Tag>
      </Info>
    </Card>
  );
}