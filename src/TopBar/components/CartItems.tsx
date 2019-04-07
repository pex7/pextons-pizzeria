import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { CartContext } from "../../shared/components/CartProvider";
import { IPizza, ITopping } from "../../shared/interfaces";

export default function CartItems(props: { pizzas: IPizza[] }) {
  const [cartItems, updateCart] = useContext(CartContext);

  const getToppingNames = (toppings: ITopping[]) =>
    toppings
      .reduce(
        (toppingsString, topping) => toppingsString.concat(topping.name),
        [] as string[]
      )
      .join(", ");

  const removePizza = (pizza: IPizza) => () => {
    const filteredPizzas = cartItems.filter(
      ({ id }: IPizza) => id !== pizza.id
    );
    updateCart(filteredPizzas);
  };

  return (
    <List>
      {props.pizzas.map(pizza => (
        <ListItem key={pizza.id}>
          <ListItemText
            primary="Pizza"
            secondary={
              <>
                <Typography component="span" color="inherit">
                  {getToppingNames(pizza.toppings)}
                </Typography>
                ${pizza.price.toFixed(2)}
              </>
            }
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={removePizza(pizza)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
