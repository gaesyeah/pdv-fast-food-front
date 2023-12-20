import { useContext } from "react";
import { convertPrice } from "../../../../../../../utils/helpers";
import { Extra, FoodOnOrder } from "../../../../../../../vite-env";
import {
  ExtraDescription,
  ExtraImage,
  ExtraSelect,
  LeftContent,
  RightContent,
  StyledExtraComponent,
} from "./styles";
import FoodsContext from "../../../../../../../context/FoodsContext";

const ExtraComponent = ({
  extra: { name, description, imageUrl, price, id, foodId },
}: {
  extra: Extra;
}) => {
  const { setSelectedFoods, selectedFoods } = useContext(FoodsContext) || {};

  const addExtra = () => {
    setSelectedFoods((previousSelectedFoods: FoodOnOrder[]) => {
      return previousSelectedFoods.map((food) => {
        if (food.extras) {
          const { extras } = food;
          return { ...food, extras: [...extras, { id }] };
        }
        if (food.foodId === foodId) {
          return { ...food, extras: [{ id }] };
        }
        return food;
      });
    });
  };
  const removeExtra = () => {
    setSelectedFoods((previousSelectedFoods: FoodOnOrder[]) => {
      return previousSelectedFoods.map((food) => {
        if (food.extras && food.foodId === foodId) {
          const { extras } = food;
          return {
            ...food,
            extras: extras.filter(({ id: selectedId }) => selectedId !== id),
          };
        }
        return food;
      });
    });
  };
  const isExtraSelected = () => {
    const food = selectedFoods?.find(({ foodId: id }) => id === foodId);
    return food?.extras?.some(({ id: selectedId }) => selectedId === id);
  };

  return (
    <StyledExtraComponent>
      <LeftContent>
        <ExtraImage>
          <img src={imageUrl} />
        </ExtraImage>
        <ExtraDescription>
          <p>{name}</p>
          <div>
            <span>{description}</span>
          </div>
        </ExtraDescription>
      </LeftContent>
      <RightContent>
        <p>{convertPrice(price)}</p>
        <ExtraSelect
          isExtraSelected={isExtraSelected()}
          onClick={() => (isExtraSelected() ? removeExtra() : addExtra())}
        ></ExtraSelect>
      </RightContent>
    </StyledExtraComponent>
  );
};

export default ExtraComponent;
