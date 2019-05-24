import React from "react";
import SVG from "react-inlinesvg";
import styled from "@emotion/styled";
import Topping from "./Topping";
import { ITopping } from "../../shared/interfaces";

export default function Pizza(props: { selectedToppings: ITopping[] }) {
  return (
    <PizzaContainer>
      {props.selectedToppings &&
        props.selectedToppings.map(({ id, name, price }) => (
          <Topping id={id} key={id} name={name} price={price} />
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
