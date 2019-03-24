import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import styled from "@emotion/styled";
import Pizza from "./Pizza";
import SelectToppings from "./SelectToppings";
import { ITopping } from "../interfaces";

export default function PizzaForm() {
  const [selectedToppings, updateToppings] = useState();

  const deleteTopping = (topping: ITopping) => (): void => {
    const newToppings = [...selectedToppings];
    newToppings.splice(selectedToppings.indexOf(topping), 1);
    updateToppings(newToppings);
  };

  const addTopping = (topping: ITopping) => {
    let newToppings;
    if (selectedToppings) {
      newToppings = [...selectedToppings, topping];
    } else {
      newToppings = [topping];
    }
    updateToppings(newToppings);
  };

  return (
    <PizzaFormContainer>
      <Grid container>
        <Grid item xs={12}>
          <SelectedToppingsContainer>
            {selectedToppings &&
              selectedToppings.map((topping: ITopping, i: number) => (
                <Chip
                  key={i}
                  style={{ margin: 5 }}
                  color="secondary"
                  label={topping.name}
                  onDelete={deleteTopping(topping)}
                />
              ))}
          </SelectedToppingsContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Pizza selectedToppings={selectedToppings} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectToppings
            addTopping={addTopping}
            selectedToppings={selectedToppings}
          />
        </Grid>
      </Grid>
    </PizzaFormContainer>
  );
}

const PizzaFormContainer = styled.div`
  padding: 0 20px;
`;

const SelectedToppingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 45px;
  padding: 10px 0;
`;
