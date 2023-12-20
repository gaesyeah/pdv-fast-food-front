import { useContext } from "react";
import FoodsContext from "../../../../../../context/FoodsContext";
import { Food } from "../../../../../../vite-env";
import OrderFoodInfoComponent from "../../../../../OrderFoodInfos/OrderFoodInfoComponent/OrderFoodInfoComponent";
import {
  StyledOrderFoodInfos,
  TotalInfo,
} from "../../../../../OrderFoodInfos/styles";
import {
  renderFoodExtras,
  renderFoodWithExtrasPrice,
} from "../../../../../../utils/orderFoodInfosHandler";

type RequiredOrderDetailsData = {
  price: number;
  quantity: number;
  food: Food;
};

const OrderFinalDetails = ({
  quantity,
  price,
  food: { id, name, Extras },
}: RequiredOrderDetailsData) => {
  const { selectedFoods } = useContext(FoodsContext) || {};

  return (
    <StyledOrderFoodInfos>
      <ul>
        <OrderFoodInfoComponent isExtra={false} name={name} price={price} />

        {Extras &&
          selectedFoods &&
          renderFoodExtras({ Extras, foodId: id, selectedFoods })}
      </ul>

      <TotalInfo>
        <hr />
        <p>Total do pedido:</p>
        <span>
          {Extras &&
            selectedFoods &&
            renderFoodWithExtrasPrice({
              Extras,
              foodId: id,
              price,
              quantity,
              selectedFoods,
            })}
        </span>
      </TotalInfo>
    </StyledOrderFoodInfos>
  );
};

export default OrderFinalDetails;
