import React from "react";
import SVG from "react-inlinesvg";
import styled from "@emotion/styled";
import { ITopping } from "../interfaces";

export default function Topping(props: ITopping) {
  return (
    <div>
      <ToppingContainer>
        <SVG src={require(`../assets/svg/${props.name.toLowerCase()}.svg`)} />
      </ToppingContainer>
    </div>
  );
}

const ToppingContainer = styled.div`
  position: absolute;
  width: 65%;
  height: 65%;
  top: 19%;
  left: 17%;
`;
