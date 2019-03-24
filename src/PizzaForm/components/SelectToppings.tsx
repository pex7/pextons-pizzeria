import React from "react";
import Button from "@material-ui/core/Button";
import { toppings } from "../constants";
import { ITopping } from "../interfaces";

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
    <div>
      {toppings.map((topping: ITopping, i: number) => (
        <Button
          style={{ margin: 5 }}
          key={i}
          variant="outlined"
          color="secondary"
          onClick={selectTopping(topping)}
          disabled={buttonDisabled(topping)}
        >
          {topping.name}
        </Button>
      ))}
    </div>
  );
}
