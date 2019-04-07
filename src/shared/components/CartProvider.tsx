import React, { createContext, useState, useMemo } from "react";
import { IPizza } from "../interfaces";

export const CartContext = createContext<any>([]);

export default function CartProvider(props: { children: any }) {
  const [cartItems, updateCart] = useState<IPizza[] | []>([]);
  const value = useMemo(() => [cartItems, updateCart], [cartItems]);

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}
