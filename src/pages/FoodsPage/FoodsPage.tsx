import { useContext } from "react";
import FoodCategories from "../../components/FoodsPage/FoodCategories/FoodCategories";
import Foods from "../../components/FoodsPage/Foods/Foods";
import SelectFoodModal from "../../components/FoodsPage/Foods/SelectFoodModal/SelectFoodModal";
import Welcome from "../../components/FoodsPage/Welcome/Welcome";
import { StyledPage } from "../style";
import { FoodsPageContainer } from "./style";
import FoodsContext from "../../context/FoodsContext";

export const FoodsPage = () => {
  const { showModalWithFoodId } = useContext(FoodsContext) || {};
  return (
    <>
      {showModalWithFoodId && <SelectFoodModal />}
      <StyledPage>
        <FoodsPageContainer>
          <Welcome />
          <FoodCategories />
          <Foods />
        </FoodsPageContainer>
      </StyledPage>
    </>
  );
};
