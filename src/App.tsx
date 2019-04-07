import React from "react";
import TopBar from "./TopBar/components/TopBar";
import PizzaForm from "./PizzaForm/components/PizzaForm";
import CartProvider from "./shared/components/CartProvider";

export default function App() {
  return (
    <CartProvider>
      <TopBar />
      <PizzaForm />
    </CartProvider>
  );
}
