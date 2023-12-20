import { StyledOrderFoodInfos, TotalInfo } from "./styles";

const OrderFoodInfos = () => {
  return (
    <StyledOrderFoodInfos>
      <ul></ul>

      <TotalInfo>
        <hr />
        <p>Total do pedido:</p>
        <span>R$</span>
      </TotalInfo>
    </StyledOrderFoodInfos>
  );
};

export default OrderFoodInfos;
