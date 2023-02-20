import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type CorBotaoTypes = "azul" | "laranja" | "roxo" | "vermelho" | "verde";

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  corBotaoType: CorBotaoTypes;
}

export function Botao(props: BotaoProps) {
  
  return (
    <ButtonStyled {...props} corBotaoType={props.corBotaoType}/>
  );
}

export interface BotaoStyleProps {
  corBotaoType: CorBotaoTypes;
}

const ButtonStyled = styled.button<BotaoStyleProps>`
  padding: 10px;
  border: 1px solid ${(props) => CorBotaoLista[props.corBotaoType].color};
  border-radius: 5px;
  background-color: ${(props) => CorBotaoLista[props.corBotaoType].color};
  color: ${(props) => CorBotaoLista[props.corBotaoType].font_color};
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${(props) => CorBotaoLista[props.corBotaoType].color_hover};
    border-color: ${(props) => CorBotaoLista[props.corBotaoType].color_hover};
    color: ${(props) => CorBotaoLista[props.corBotaoType].font_color_hover};
  }

  &:active {
    background-color: ${(props) => CorBotaoLista[props.corBotaoType].color_active};
    border-color: ${(props) => CorBotaoLista[props.corBotaoType].color_active};
    color: ${(props) => CorBotaoLista[props.corBotaoType].font_color_active};
  }
`;

interface ColorTypes {
  color: string;
  font_color: string;
  color_hover: string;
  font_color_hover: string;
  color_active: string;
  font_color_active: string;
}

const azul: ColorTypes = {
  color: '#0000cc',
  font_color: '#ffffff',
  color_hover: '#add8e6',
  font_color_hover: '#000000',
  color_active: '#00008b',
  font_color_active: '#ffffff'
};

const vermelho: ColorTypes = {
  color: '#ff0000',
  font_color: '#ffffff',
  color_hover: '#ff8080',
  font_color_hover: '#000000',
  color_active: '#800000',
  font_color_active: '#ffffff'
};

const roxo: ColorTypes = {
  color: '#800080',
  font_color: '#ffffff',
  color_hover: '#ff33ff',
  font_color_hover: '#000000',
  color_active: '#4d004d',
  font_color_active: '#ffffff'
};

const verde: ColorTypes = {
  color: '#008000',
  font_color: '#ffffff',
  color_hover: '#00cc00',
  font_color_hover: '#000000',
  color_active: '#003300',
  font_color_active: '#ffffff'
};

const laranja: ColorTypes = {
  color: '#ffa500',
  font_color: '#ffffff',
  color_hover: '#ffd280',
  font_color_hover: '#000000',
  color_active: '#805300',
  font_color_active: '#ffffff'
};

const CorBotaoLista = { azul, laranja, roxo, vermelho, verde };
