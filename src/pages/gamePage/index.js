// /* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {ContainerGamePage, GameData, ImageSection, InformationSection, GoBack, Image, GameName, Details, ButtonSection, Block, PopUp} from "./styles";
import Button from "../../components/button";
import {Loader} from "../../components/global";
import RuneTerra from '../../assets/games/runeterra.png';

export default function GamePage() {
    let payment = false;
    let {game} = useParams();
    console.log(game);
    return (
        <>
            <ContainerGamePage>
                <GoBack><Link to="/"><p>{'< Voltar'}</p></Link></GoBack>
                <GameData>
                    <ImageSection>
                        <Image src={RuneTerra} />
                    </ImageSection>
                    <InformationSection>
                        <GameName>Teste</GameName>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.</p>
                        <Details>
                            <p>Genêro: Ação</p>
                            <p>Classificação: LIVRE</p>
                            <p>Plataforma: PC</p>
                            <p>Preço:<b>R$250.00</b></p>
                        </Details>
                        <ButtonSection>
                            <Button buttonName="Alugar agora" size="50%"/>
                        </ButtonSection>                    
                    </InformationSection>
                </GameData>
            </ContainerGamePage>
            {payment && 
                <Block>
                    <PopUp>
                        <h3>Você está adquirindo {"LEGENDS OF RUNETERRA"}</h3>
                        <p>Aguarde que estamos te redirecionando para o pagamento</p>
                        <Loader />
                    </PopUp>
                </Block>
            }
        </>
    );
}