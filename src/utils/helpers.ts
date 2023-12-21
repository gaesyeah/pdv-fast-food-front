import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Extra, Food, FoodOnOrder } from "../vite-env";

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

export const findFoodData = (foodId: number, originalAllFoods: Food[]) => {
  return originalAllFoods?.find(({ id }) => id === foodId);
};
export const filterExtrasData = (extraId: number, extras: Extra[]) => {
  return extras?.filter(({ id }) => id === extraId);
};

export const finalPrice = ({
  selectedFoods,
  originalAllFoods,
}: {
  selectedFoods: FoodOnOrder[];
  originalAllFoods: Food[];
}) => {
  let finalPrice = 0;
  const addToFinalPrice = (price: number, quantity: number) => {
    finalPrice += price * (quantity || 1);
  };

  for (let i = 0; i < selectedFoods.length; i++) {
    const { foodId, extras, quantity } = selectedFoods[i];
    const foodData = findFoodData(foodId, originalAllFoods);
    if (!foodData) return;

    const { Extras, price } = foodData;

    addToFinalPrice(price, quantity);

    if (!extras) return finalPrice;

    for (let j = 0; j < extras.length; j++) {
      if (!Extras) return;

      const extrasData = filterExtrasData(extras[j].extraId, Extras);
      if (!extrasData) return;

      for (let k = 0; k < extrasData.length; k++) {
        const { price } = extrasData[k];

        addToFinalPrice(price, quantity);
      }
    }
  }
  return finalPrice;
};
