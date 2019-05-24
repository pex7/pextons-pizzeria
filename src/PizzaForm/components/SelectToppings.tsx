import React from "react";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";
import { TOPPINGS } from "../../shared/constants";
import { ITopping } from "../../shared/interfaces";

export default function SelectToppings(props: {
  selectedToppings: ITopping[];
  addTopping: (topping: ITopping) => void;
}) {
  const selectTopping = (topping: ITopping) => () => {
    props.addTopping(topping);
  };

  const buttonDisabled = (topping: ITopping) =>
    props.selectedToppings && props.selectedToppings.includes(topping);

  return (
    <SelectToppingsContainer>
      {TOPPINGS.map((topping: ITopping) => (
        <Button
          style={{ margin: 5 }}
          key={topping.id}
          variant="outlined"
          color="secondary"
          onClick={selectTopping(topping)}
          disabled={buttonDisabled(topping)}
        >
          {topping.name}
        </Button>
      ))}
    </SelectToppingsContainer>
  );
}

const SelectToppingsContainer = styled.div`
  margin-bottom: 1rem;
`;
