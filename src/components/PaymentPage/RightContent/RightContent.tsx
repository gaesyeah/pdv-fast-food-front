import { useContext, useEffect, useState } from "react";
import { OrderInputs, StyledContent } from "../styles";
import PaymentTypeComponent from "./PaymentTypeComponent/PaymentTypeComponent";
import { PaymentContainer, ValueInput } from "./styles";
import { getAPIandSetState } from "../../../utils/api";
import { OrderBody, PaymentType } from "../../../vite-env";
import { APIroute } from "../../../utils/routes";
import { convertPrice, finalPrice, setInput } from "../../../utils/helpers";
import FoodsContext from "../../../context/FoodsContext";

const RightContent = () => {
  const {
    originalAllFoods,
    selectedFoods,
    setOrderBody,
    orderBody,
    isLoading,
  } = useContext(FoodsContext) || {};

  const [paymentTypes, setPaymentTypes] = useState<PaymentType[] | null>(null);
  const [isPaymentsLoading, setIsPaymentsLoading] = useState<boolean>(false);

  const defaultPaidValue = "R$ ";
  const [paidValue, setPaidValue] = useState<string>(defaultPaidValue);
  const numberPaidValue = Number(paidValue.replace(defaultPaidValue, ""));
  const notNumber = (position: number) => {
    return isNaN(Number(paidValue[position]));
  };

  useEffect(() => {
    getAPIandSetState({
      route: APIroute.payments,
      setState: setPaymentTypes,
      setIsLoading: setIsPaymentsLoading,
    });
  }, []);
  useEffect(() => {
    if (paidValue.length < 3 || notNumber(3)) {
      return setPaidValue(defaultPaidValue);
    }
    if (paidValue[0] !== "R" || paidValue[1] !== "$" || paidValue[2] !== " ") {
      return setPaidValue(defaultPaidValue);
    }
    let dotCases = 0;
    for (let i = 3; i < paidValue.length; i++) {
      if (paidValue[i] === ".") dotCases++;
      if ((notNumber(i) && paidValue[i] !== ".") || dotCases > 1) {
        return setPaidValue(defaultPaidValue);
      }
    }
    if (paidValue === defaultPaidValue && orderBody) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return setOrderBody(({ paidValue, ...rest }: OrderBody) => ({ ...rest }));
    }
    setOrderBody((previous: OrderBody) => ({
      ...previous,
      paidValue: numberPaidValue,
    }));
  }, [paidValue]);

  if (!selectedFoods || !originalAllFoods) return;
  const change = () => {
    const change = Number(
      (
        numberPaidValue - (finalPrice({ selectedFoods, originalAllFoods }) || 0)
      ).toFixed(2),
    );
    if (change < 0) return convertPrice(0);
    return convertPrice(change);
  };

  return (
    <StyledContent>
      <PaymentContainer>
        <h3>Selecione a forma de pagamento:</h3>
        <ul>
          {isPaymentsLoading
            ? "Carregando..."
            : paymentTypes?.map((paymentType) => (
                <PaymentTypeComponent
                  key={paymentType.id}
                  paymentType={paymentType}
                />
              ))}
        </ul>
      </PaymentContainer>
      <OrderInputs>
        <ValueInput>
          <h3>Valor entregue</h3>
          <input
            value={paidValue}
            onChange={(e) => setInput({ e, setState: setPaidValue })}
            disabled={isLoading || isPaymentsLoading}
          />
        </ValueInput>
        <ValueInput>
          <h3>troco</h3>
          <input value={change()} disabled={true} />
        </ValueInput>
      </OrderInputs>
    </StyledContent>
  );
};

export default RightContent;
