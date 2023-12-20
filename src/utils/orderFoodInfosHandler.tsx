import OrderFoodInfoComponent from "../components/OrderFoodInfos/OrderFoodInfoComponent/OrderFoodInfoComponent";
import { Extra, FoodOnOrder } from "../vite-env";
import { convertPrice } from "./helpers";

type CalcExtrasPrice = {
  selectedFoods: FoodOnOrder[];
  foodId: number;
  Extras: Extra[];
};

const calculateExtrasPrice = ({
  selectedFoods,
  foodId,
  Extras,
}: CalcExtrasPrice) => {
  let extrasFinalPrice = 0;
  const selectedFood = selectedFoods?.find(
    ({ foodId: selectedFoodId }) => selectedFoodId === foodId,
  );

  if (selectedFood?.extras && selectedFood?.extras.length > 0) {
    const { extras } = selectedFood;

    for (let i = 0; i < extras.length; i += 1) {
      const selectedExtraId = extras[i].id;

      const selectedExtraPrice = Extras?.find(
        ({ id: extraId }) => selectedExtraId === extraId,
      )?.price;

      if (selectedExtraPrice) {
        extrasFinalPrice += selectedExtraPrice;
      }
    }
  }
  return extrasFinalPrice;
};

export const renderFoodWithExtrasPrice = ({
  price,
  quantity,
  selectedFoods,
  Extras,
  foodId,
}: {
  price: number;
  quantity: number;
} & CalcExtrasPrice) => {
  return convertPrice(
    (price + calculateExtrasPrice({ selectedFoods, Extras, foodId })) *
      quantity,
  );
};

export const renderFoodExtras = ({
  foodId,
  Extras,
  selectedFoods,
}: {
  selectedFoods: FoodOnOrder[];
  foodId: number;
  Extras: Extra[];
}) => {
  const selectedFood = selectedFoods?.find(
    ({ foodId: selectedFoodId }) => selectedFoodId === foodId,
  );
  if (!selectedFood) return;

  return selectedFood.extras?.map(({ id }) => {
    const selectedExtra = Extras?.find(({ id: extraId }) => id === extraId);

    if (selectedExtra) {
      const { name, price, id } = selectedExtra;
      return (
        <OrderFoodInfoComponent
          key={id}
          name={name}
          price={price}
          isExtra={true}
        />
      );
    }
  });
};
