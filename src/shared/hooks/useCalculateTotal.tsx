import { useState } from "react";

export default function useCalculateTotal(initialValue: number) {
  const [total, calculateTotal] = useState(initialValue);

  const addToTotal = (price: number) =>
    calculateTotal(Number((total + price).toFixed(2)));
  const subtractFromTotal = (price: number) =>
    calculateTotal(Number((total - price).toFixed(2)));

  const resetTotal = () => calculateTotal(initialValue);

  return {
    addToTotal,
    resetTotal,
    subtractFromTotal,
    total
  };
}
