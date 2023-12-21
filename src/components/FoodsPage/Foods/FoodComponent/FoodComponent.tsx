import { convertPrice } from "../../../../utils/helpers";
import { Food, FoodOnOrder } from "../../../../vite-env";
import { FoodImg, FoodInfos, StyledFoodComponent } from "./styles";
import Selected from "../Selected/Selected";
import { useContext } from "react";
import FoodsContext from "../../../../context/FoodsContext";

const FoodComponent = ({ food }: { food: Food }) => {
  const { id, name, imageUrl, frontBackGroundUrl, description, price } = food;

  const { setSelectedFoods, selectedFoods, setShowModalWithFoodId } =
    useContext(FoodsContext) || {};
  const isSelected = selectedFoods?.some(({ foodId }) => foodId === id);

  const selectFood = () => {
    setShowModalWithFoodId(id);
    setSelectedFoods((previous: FoodOnOrder[]) => {
      if (isSelected) return previous;

      return [...previous, { foodId: id, quantity: 1 }];
    });
  };

  return (
    <StyledFoodComponent onClick={selectFood}>
      {isSelected && <Selected />}
      <img src={frontBackGroundUrl} alt={`food back ${id}`} />
      <FoodImg>
        <img src={imageUrl} alt={`food img ${id}`} />
      </FoodImg>
      <FoodInfos>
        <div>
          <p>{name}</p>
          <span>{description}</span>
        </div>
        <p>{convertPrice(price)}</p>
      </FoodInfos>
    </StyledFoodComponent>
  );
};

export default FoodComponent;
