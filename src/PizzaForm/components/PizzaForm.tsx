import React, { useState, useContext, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import uuid from "uuid";
import styled from "@emotion/styled";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Pizza from "./Pizza";
import SelectToppings from "./SelectToppings";
import Total from "../../shared/components/Total";
import useCalculateTotal from "../../shared/hooks/useCalculateTotal";
import { CartContext } from "../../shared/components/CartProvider";
import { ITopping } from "../../shared/interfaces";
import { PIZZA_PRICE } from "../../shared/constants";

export function PizzaForm(props: { classes: { root: string } }) {
  const [selectedToppings, updateToppings] = useState<ITopping[]>([]);
  const {
    total,
    addToTotal,
    subtractFromTotal,
    resetTotal
  } = useCalculateTotal(PIZZA_PRICE);

  const [cartItems, updateCart] = useContext(CartContext);

  const deleteTopping = (topping: ITopping) => (): void => {
    const newToppings = [...selectedToppings];
    newToppings.splice(selectedToppings.indexOf(topping), 1);
    updateToppings(newToppings);
    subtractFromTotal(topping.price);
  };

  const renderToppingChips = () =>
    selectedToppings.map((topping: ITopping) => (
      <ChipContainer key={topping.id}>
        <Chip
          color="secondary"
          label={topping.name}
          onDelete={deleteTopping(topping)}
        />
      </ChipContainer>
    ));

  useMemo(renderToppingChips, [selectedToppings]);

  const addTopping = (topping: ITopping) => {
    let newToppings;
    if (selectedToppings) {
      newToppings = [...selectedToppings, topping];
    } else {
      newToppings = [topping];
    }
    updateToppings(newToppings);
    addToTotal(topping.price);
  };

  const addPizzaToCart = () => {
    const pizza = {
      id: uuid(),
      price: total,
      toppings: selectedToppings
    };
    updateCart([...cartItems, pizza]);
    updateToppings([]);
    resetTotal();
  };

  return (
    <PizzaFormContainer>
      <Grid container>
        <Grid item xs={12}>
          <SelectedToppingsContainer>
            {selectedToppings && renderToppingChips()}
          </SelectedToppingsContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Pizza selectedToppings={selectedToppings} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12}>
              <SelectToppings
                addTopping={addTopping}
                selectedToppings={selectedToppings}
              />
            </Grid>
            <Grid item xs={12} className={props.classes.root}>
              <Total total={total} />
              <Button
                color="secondary"
                variant="contained"
                onClick={addPizzaToCart}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PizzaFormContainer>
  );
}

const styles = ({ breakpoints }: Theme) =>
  createStyles({
    root: {
      [breakpoints.down("xs")]: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
      }
    }
  });

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

const ChipContainer = styled.div`
  margin: 5px;
`;

export default withStyles(styles)(PizzaForm);
