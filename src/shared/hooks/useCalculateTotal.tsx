import { useState } from "react";

export default function useCalculateTotal(initialValue: number) {
  const [total, calculateTotal] = useState(initialValue);

  const addToTotal = (price: number) => calculateTotal(total + price);
  const subtractFromTotal = (price: number) => calculateTotal(total - price);

  const resetTotal = () => calculateTotal(initialValue);

  return {
    addToTotal,
    resetTotal,
    subtractFromTotal,
    total
  };
}
