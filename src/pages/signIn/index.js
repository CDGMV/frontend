/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom'
import {ContainerSignIn, Section, SignUp} from "./styles";
import Input from "../../components/input";
import Button from "../../components/button";

export default function SignIn() {

  return (
    <ContainerSignIn>
      <Section>
        <Input labelName="E-mail" size="80%" />
        <Input labelName="Senha" password={true} size="80%" />
        <SignUp>
          <p>Não possui uma conta? <Link to="/signUp"><b>Cadastre-se</b></Link></p>
        </SignUp>
        <Button buttonName="Entrar" size="40%"/>
      </Section>
    </ContainerSignIn>
  );
}