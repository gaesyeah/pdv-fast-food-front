import { useContext } from "react";
import FoodsContext from "../../../../../../context/FoodsContext";
import {
  DescriptionText,
  StyledOrderFoods,
  FoodDescription,
  FoodInfosContainer,
  FoodPrice,
  Quantity,
} from "./styles";
import { Food, FoodOnOrder } from "../../../../../../vite-env";
import { convertPrice } from "../../../../../../utils/helpers";
import {
  FoodImg,
  FoodInfos,
  StyledFoodComponent,
} from "../../../FoodComponent/styles";

const OrderFoods = ({
  quantity,
  food: { id, frontBackGroundUrl, imageUrl, name, description, price },
}: {
  quantity: number | string | undefined;
  food: Food;
}) => {
  const { setSelectedFoods } = useContext(FoodsContext) || {};

  const changeQuantity = (type: "sum" | "sub") => {
    if (type === "sub" && (quantity as number) === 1) return;

    setSelectedFoods((foods: FoodOnOrder[]) => {
      return foods.map((food) => {
        const { quantity, foodId } = food;

        if (foodId !== id) return food;

        if (!quantity && type === "sum") return { ...food, quantity: 2 };

        return {
          ...food,
          quantity: type === "sum" ? quantity + 1 : quantity - 1,
        };
      });
    });
  };

  return (
    <StyledOrderFoods>
      <FoodInfosContainer>
        <StyledFoodComponent isOnSelectModal={true}>
          <img src={frontBackGroundUrl} alt={`food back ${id}`} />
          <FoodImg isOnSelectModal={true}>
            <img src={imageUrl} alt={`food img ${id}`} />
          </FoodImg>
          <FoodInfos isOnSelectModal={true}></FoodInfos>
        </StyledFoodComponent>
        <FoodDescription>
          <p>{name}</p>
          <DescriptionText>
            <span>{description}</span>
          </DescriptionText>

          <Quantity quantity={quantity}>
            <div onClick={() => changeQuantity("sub")}>
              <span>-</span>
            </div>
            <h5>{quantity}</h5>
            <div onClick={() => changeQuantity("sum")}>
              <span>+</span>
            </div>
          </Quantity>
        </FoodDescription>
      </FoodInfosContainer>
      <FoodPrice>
        <p>{convertPrice(price)}</p>
      </FoodPrice>
    </StyledOrderFoods>
  );
};

export default OrderFoods;
