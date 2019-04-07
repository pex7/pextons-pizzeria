import React, { useState, useContext, MouseEvent } from "react";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";
import CartItems from "./CartItems";
import Total from "../../shared/components/Total";
import { CartContext } from "../../shared/components/CartProvider";
import { IPizza } from "../../shared/interfaces";

export default function Cart() {
  const [isOpen, toggleCart] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [cartItems] = useContext(CartContext);

  const handleClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(currentTarget);
    toggleCart(!isOpen);
  };

  const total = cartItems.reduce(
    (itemTotal: number, item: IPizza) => itemTotal + item.price,
    0
  );

  return (
    <div>
      <IconButton aria-label="Cart" onClick={handleClick}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popper open={isOpen} anchorEl={anchorEl}>
        <PopperContainer>
          <Paper>
            {cartItems.length ? (
              <CartItems pizzas={cartItems} />
            ) : (
              <MessageWrapper>
                <Typography component="h6" color="inherit">
                  There are no items in your cart.
                </Typography>
              </MessageWrapper>
            )}
            <TotalWrapper>
              <Total total={total} />
            </TotalWrapper>
          </Paper>
        </PopperContainer>
      </Popper>
    </div>
  );
}

const PopperContainer = styled.div`
  width: 300px;
`;

const MessageWrapper = styled.div`
  padding: 16px 0;
  text-align: center;
`;

const TotalWrapper = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
`;
