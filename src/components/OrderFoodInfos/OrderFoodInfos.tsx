import { useContext } from "react";
import { FoodOnOrder } from "../../vite-env";
import { StyledOrderFoodInfos, TotalInfo } from "./styles";
import FoodsContext from "../../context/FoodsContext";
import OrderFoodInfoComponent from "./OrderFoodInfoComponent/OrderFoodInfoComponent";
import {
  convertPrice,
  filterExtrasData,
  finalPrice,
  findFoodData,
} from "../../utils/helpers";

const OrderFoodInfos = ({
  selectedFoods,
}: {
  selectedFoods: Omit<FoodOnOrder, "observation">[];
}) => {
  const { originalAllFoods } = useContext(FoodsContext) || {};

  if (!originalAllFoods) return;

  const RenderFoodsWithExtras = () => {
    return selectedFoods.map(({ foodId, quantity, extras }) => {
      const foodData = findFoodData(foodId, originalAllFoods);
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
          {extras?.map(({ extraId }) => {
            if (!Extras) return;

            const extrasData = filterExtrasData(extraId, Extras);
            if (!extrasData) return;

            return extrasData.map(({ name, price }) => {
              return (
                <OrderFoodInfoComponent
                  isExtra={true}
                  name={name}
                  quantity={quantity}
                  price={price}
                  key={extraId}
                />
              );
            });
          })}
        </>
      );
    });
  };

  return (
    <StyledOrderFoodInfos>
      <ul>
        <RenderFoodsWithExtras />
      </ul>

      <TotalInfo>
        <hr />
        <p>Total do pedido:</p>
        <span>
          {convertPrice(finalPrice({ originalAllFoods, selectedFoods }) || 0)}
        </span>
      </TotalInfo>
    </StyledOrderFoodInfos>
  );
};

export default OrderFoodInfos;
