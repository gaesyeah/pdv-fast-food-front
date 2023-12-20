import { StyledOrderFoodInfo } from "./styles";
import { convertPrice } from "../../../utils/helpers";

const OrderFoodInfoComponent = ({
  name,
  price,
  quantity,
  isExtra,
}: {
  name: string;
  quantity: number;
  price: number;
  isExtra: boolean;
}) => {
  const checkQuantity = quantity || 1;
  return (
    <StyledOrderFoodInfo isExtra={isExtra}>
      <p>{`${isExtra ? "" : `x${checkQuantity} `}${
        isExtra ? "+" : ""
      }${name}`}</p>
      <p>{convertPrice(price * checkQuantity)}</p>
    </StyledOrderFoodInfo>
  );
};

export default OrderFoodInfoComponent;
