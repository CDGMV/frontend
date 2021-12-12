/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Redirect, ContainerSignUp, Section, Form, ButtonSection} from "./styles";
import Input from "../../components/input";
import Button from "../../components/button";

export default function SignIn() {

  return (
    <ContainerSignUp>
      <Section>
        <Input labelName="Nome Completo" size="100%" />
        <Form>
          <Input labelName="E-mail" size="100%" />
          <Input labelName="Senha" password={true} size="100%" />
          <Input labelName="Confirmar senha" password={true} size="100%" />
          <Input labelName="CPF" size="100%" />
          <Input labelName="Data de nascimento" size="100%" />
          <Input labelName="Telefone" size="100%" />
        </Form>
        <ButtonSection>
          <Redirect to="/signIn"><Button buttonName="Voltar" size="90%"/></Redirect>
          <Redirect to="/home"><Button buttonName="Cadastrar" size="90%"/></Redirect>
        </ButtonSection>
      </Section>
    </ContainerSignUp>
  );
}