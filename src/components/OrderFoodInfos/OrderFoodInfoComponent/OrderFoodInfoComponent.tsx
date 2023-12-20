import { StyledOrderFoodInfo } from "./styles";
import { convertPrice } from "../../../utils/helpers";

const OrderFoodInfoComponent = ({
  name,
  price,
  isExtra,
}: {
  name: string;
  price: number;
  isExtra: boolean;
}) => {
  return (
    <StyledOrderFoodInfo isExtra={isExtra}>
      <p>{`${isExtra ? "+" : ""}${name}`}</p>
      <p>{convertPrice(price)}</p>
    </StyledOrderFoodInfo>
  );
};

export default OrderFoodInfoComponent;
