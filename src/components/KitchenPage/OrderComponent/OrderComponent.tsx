import { useState } from "react";
import { Order } from "../../../vite-env";
import OrderButton from "./OrderButton/OrderButton";
import {
  FoodOrderContainer,
  Infos,
  OrderHandleButtons,
  OrderPrimaryInfos,
  StyledOrderComponent,
} from "./styles";
import FoodOrderComponent from "./FoodOrderComponent/FoodOrderComponent";

const OrderComponent = ({
  order: { id, customerName, status, Foods },
}: {
  order: Order;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <StyledOrderComponent status={status}>
      <OrderPrimaryInfos>
        <Infos>
          <h4>
            {id} - {customerName}
          </h4>
        </Infos>
        <OrderHandleButtons>
          {status === "FINISHED" ? (
            <>
              <OrderButton
                loadingState={{ isLoading, setIsLoading }}
                orderId={id}
                status="cancel"
              />
              <OrderButton
                loadingState={{ isLoading, setIsLoading }}
                orderId={id}
                status="deliver"
              />
            </>
          ) : (
            status === "PREPARING" && (
              <>
                <OrderButton
                  loadingState={{ isLoading, setIsLoading }}
                  orderId={id}
                  status="cancel"
                />
                <OrderButton
                  loadingState={{ isLoading, setIsLoading }}
                  orderId={id}
                  status="finish"
                />
              </>
            )
          )}
        </OrderHandleButtons>
      </OrderPrimaryInfos>
      <FoodOrderContainer>
        {Foods?.map((foodOrder) => (
          <FoodOrderComponent key={foodOrder.id} foodOrder={foodOrder} />
        ))}
      </FoodOrderContainer>
    </StyledOrderComponent>
  );
};

export default OrderComponent;
