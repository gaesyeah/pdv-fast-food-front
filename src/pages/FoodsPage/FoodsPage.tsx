import { useContext } from "react";
import FoodCategories from "../../components/FoodsPage/FoodCategories/FoodCategories";
import Foods from "../../components/FoodsPage/Foods/Foods";
import Welcome from "../../components/FoodsPage/Welcome/Welcome";
import { StyledPage } from "../styles";
import { FoodsPageContainer } from "./style";
import FoodsContext from "../../context/FoodsContext";
import { OrderButtons } from "../../components/FoodsPage/OrderButtons/OrderButtons";
import OrderFoodInfos from "../../components/OrderFoodInfos/OrderFoodInfos";
import Modal from "../../components/Modal/Modal";
import OrderInfos from "../../components/FoodsPage/Foods/SelectFoodModal/OrderInfos/OrderInfos";

export const FoodsPage = () => {
  const { showModalWithFoodId, selectedFoods } = useContext(FoodsContext) || {};

  const isRenderAllowed = selectedFoods && selectedFoods?.length;

  return (
    <>
      {showModalWithFoodId ? (
        <Modal>
          <OrderInfos />
        </Modal>
      ) : (
        <></>
      )}
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
