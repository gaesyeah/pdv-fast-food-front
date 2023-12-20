import { useContext, useEffect, useState } from "react";
import { Extra, Food, FoodOnOrder } from "../../vite-env";
import { StyledOrderFoodInfos, TotalInfo } from "./styles";
import FoodsContext from "../../context/FoodsContext";
import OrderFoodInfoComponent from "./OrderFoodInfoComponent/OrderFoodInfoComponent";
import { convertPrice } from "../../utils/helpers";

const OrderFoodInfos = ({
  selectedFoods,
}: {
  selectedFoods: Omit<FoodOnOrder, "observation">[];
}) => {
  const { allFoods } = useContext(FoodsContext) || {};

  const [originalAllFoods, setOriginalAllFoods] = useState<Food[]>([]);
  useEffect(() => {
    setOriginalAllFoods(allFoods || []);
  }, []);

  const findFoodData = (foodId: number) => {
    return originalAllFoods?.find(({ id }) => id === foodId);
  };
  const filterExtrasData = (extraId: number, extras: Extra[]) => {
    return extras?.filter(({ id }) => id === extraId);
  };

  const RenderFoodsWithExtras = () => {
    return selectedFoods.map(({ foodId, quantity, extras }) => {
      const foodData = findFoodData(foodId);
      if (!foodData) return;

      const { name, price, Extras } = foodData;
      return (
        <>
          <OrderFoodInfoComponent
            isExtra={false}
            name={name}
            quantity={quantity}
            price={price}
            key={foodId}
          />
          {extras?.map(({ id }) => {
            if (!Extras) return;

            const extrasData = filterExtrasData(id, Extras);
            if (!extrasData) return;

            return extrasData.map(({ name, price }) => {
              return (
                <OrderFoodInfoComponent
                  isExtra={true}
                  name={name}
                  quantity={quantity}
                  price={price}
                  key={id}
                />
              );
            });
          })}
        </>
      );
    });
  };

  const FinalPrice = () => {
    let finalPrice = 0;

    for (let i = 0; i < selectedFoods.length; i++) {
      const { foodId, extras, quantity } = selectedFoods[i];
      const foodData = findFoodData(foodId);
      if (!foodData) return;

      const { Extras, price } = foodData;

      finalPrice += price * (quantity || 1);

      if (!extras) return <span>{convertPrice(finalPrice)}</span>;

      for (let j = 0; j < extras.length; j++) {
        if (!Extras) return;

        const extrasData = filterExtrasData(extras[j].id, Extras);
        if (!extrasData) return;

        for (let k = 0; k < extrasData.length; k++) {
          const { price } = extrasData[k];

          finalPrice += price * (quantity || 1);
        }
      }
    }
    return <span>{convertPrice(finalPrice)}</span>;
  };

  return (
    <StyledOrderFoodInfos>
      <ul>
        <RenderFoodsWithExtras />
      </ul>

      <TotalInfo>
        <hr />
        <p>Total do pedido:</p>
        <FinalPrice />
      </TotalInfo>
    </StyledOrderFoodInfos>
  );
};

export default OrderFoodInfos;
