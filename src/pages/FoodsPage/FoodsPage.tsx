import { useContext } from "react";
import FoodCategories from "../../components/FoodsPage/FoodCategories/FoodCategories";
import Foods from "../../components/FoodsPage/Foods/Foods";
import SelectFoodModal from "../../components/FoodsPage/Foods/SelectFoodModal/SelectFoodModal";
import Welcome from "../../components/FoodsPage/Welcome/Welcome";
import { StyledPage } from "../styles";
import { FoodsPageContainer } from "./style";
import FoodsContext from "../../context/FoodsContext";
import { OrderButtons } from "../../components/FoodsPage/OrderButtons/OrderButtons";
import OrderFoodInfos from "../../components/OrderFoodInfos/OrderFoodInfos";

export const FoodsPage = () => {
  const { showModalWithFoodId, selectedFoods } = useContext(FoodsContext) || {};

  const isRenderAllowed = selectedFoods && selectedFoods?.length;

  return (
    <>
      {showModalWithFoodId ? <SelectFoodModal /> : <></>}
      <StyledPage>
        <FoodsPageContainer>
          <Welcome />
          <FoodCategories />
          <Foods />
          {isRenderAllowed ? (
            <OrderFoodInfos selectedFoods={[...selectedFoods]} />
          ) : (
            <></>
          )}
          <OrderButtons />
        </FoodsPageContainer>
      </StyledPage>
    </>
  );
};
