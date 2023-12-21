import { OrderBody, PaymentType } from "../../../../vite-env";
import { StyledPaymentTypeComponent } from "./styles";
import { Select } from "../../../styles";
import { useContext } from "react";
import FoodsContext from "../../../../context/FoodsContext";
import paymentTypeIcon from "./../../../../assets/paymentTypeIcon.svg";

const PaymentTypeComponent = ({
  paymentType,
}: {
  paymentType: PaymentType;
}) => {
  const { name, id } = paymentType;

  const { isLoading } = useContext(FoodsContext) || {};

  const { setOrderBody, orderBody } = useContext(FoodsContext) || {};

  const selectedPaymentType = () => {
    setOrderBody((previous: OrderBody) => {
      return { ...previous, paymentTypeId: id };
    });
  };

  return (
    <StyledPaymentTypeComponent
      isLoading={isLoading}
      isSelected={orderBody?.paymentTypeId === id}
      onClick={() => selectedPaymentType()}
    >
      <div>
        <img alt={`${id}`} src={paymentTypeIcon} />
        <p>{name}</p>
      </div>
      <Select isSelected={orderBody?.paymentTypeId === id}></Select>
    </StyledPaymentTypeComponent>
  );
};

export default PaymentTypeComponent;
