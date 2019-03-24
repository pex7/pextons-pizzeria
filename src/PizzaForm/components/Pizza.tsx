import React from "react";
import SVG from "react-inlinesvg";
import styled from "@emotion/styled";
import Topping from "./Topping";
import { ITopping } from "../interfaces";

export default function Pizza(props: { selectedToppings: ITopping[] }) {
  return (
    <PizzaContainer>
      {props.selectedToppings &&
        props.selectedToppings.map(({ name }) => (
          <Topping name={name} key={name} />
        ))}
      <SVG src={require("../assets/svg/pizza-with-cheese.svg")} />
    </PizzaContainer>
  );
}

const PizzaContainer = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  margin: 0 auto 15px;
`;
