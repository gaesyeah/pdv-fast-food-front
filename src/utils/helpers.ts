import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FoodOnOrder } from "../vite-env";

export const convertPrice = (price: number) => {
  return `R$${price.toFixed(2).toString().replace(".", ",")}`;
};

export const setInput = ({
  e,
  setState,
}: {
  e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;
  setState: Dispatch<SetStateAction<string>>;
}) => {
  setState(e.target.value);
};

export const selectSavedFood = ({
  selectedFoods,
  id,
}: {
  selectedFoods: FoodOnOrder[];
  id: number;
}) => {
  return selectedFoods?.find(({ foodId }) => foodId === id);
};
