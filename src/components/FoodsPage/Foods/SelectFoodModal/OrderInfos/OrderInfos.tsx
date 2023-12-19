import { useContext, useEffect, useState } from "react";
import {
  DescriptionText,
  FoodBasicInfos,
  FoodDescription,
  FoodPrice,
  Quantity,
  StyledOrderInfos,
} from "./styles";
import { Food } from "../../../../../vite-env";
import { getAPIandSetState } from "../../../../../utils/api";
import FoodsContext from "../../../../../context/FoodsContext";
import {
  FoodImg,
  FoodInfos,
  StyledFoodComponent,
} from "../../FoodComponent/styles";
import { convertPrice } from "../../../../../utils/helpers";

const OrderInfos = () => {
  const { showModalWithFoodId } = useContext(FoodsContext) || {};

  const [food, setFood] = useState<Food>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    getAPIandSetState({
      route: `foods/details/${showModalWithFoodId}`,
      setIsLoading,
      setState: setFood,
    });
  }, []);

  if (!food || isLoading) return "Carregando...";
  const { id, frontBackGroundUrl, imageUrl, price, name, description } = food;

  const changeQuantity = (type: "sum" | "sub") => {
    if (type === "sub" && quantity == 1) return;
    setQuantity((previous) => (type === "sum" ? previous + 1 : previous - 1));
  };

  return (
    <StyledOrderInfos>
      <h1>Revise seu pedido!</h1>
      <FoodBasicInfos>
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
            <p>{quantity}</p>
            <div onClick={() => changeQuantity("sum")}>
              <span>+</span>
            </div>
          </Quantity>
        </FoodDescription>
        <FoodPrice>
          <p>{convertPrice(price)}</p>
        </FoodPrice>
      </FoodBasicInfos>
    </StyledOrderInfos>
  );
};

export default OrderInfos;
