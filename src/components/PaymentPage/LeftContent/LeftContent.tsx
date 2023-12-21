import { useContext } from "react";
import { OrderInputs, StyledContent } from "../styles";
import { ClientInput, CodeInput, ListOrder } from "./styles";
import FoodsContext from "../../../context/FoodsContext";
import OrderFoodInfos from "../../OrderFoodInfos/OrderFoodInfos";
import { OrderBody } from "../../../vite-env";

const LeftContent = ({ code }: { code: string }) => {
  const { selectedFoods, orderBody, setOrderBody, isLoading } =
    useContext(FoodsContext) || {};

  const handleCustomerName = (newValue: string) => {
    setOrderBody((previous: OrderBody) => {
      return { ...previous, customerName: newValue };
    });
  };

  return (
    <StyledContent>
      <ListOrder>
        <h3>Resumo da compra</h3>
        <OrderFoodInfos selectedFoods={selectedFoods || []} />

        <OrderInputs>
          <ClientInput>
            <h3>Nome do cliente</h3>
            <input
              onChange={(e) => handleCustomerName(e.target.value)}
              value={orderBody?.customerName || ""}
              placeholder="Primeiro nome"
              disabled={isLoading}
            />
          </ClientInput>
          <CodeInput code={code}>
            <h3>Código</h3>
            <input disabled={true} value={code} />
          </CodeInput>
        </OrderInputs>
      </ListOrder>
    </StyledContent>
  );
};

export default LeftContent;
