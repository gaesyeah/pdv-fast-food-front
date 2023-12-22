import { useContext } from "react";
import OrdersContext from "../../../context/OrdersContext";
import { Orders, SectionContainer, StyledSection } from "./styles";
import OrderComponent from "../../KitchenPage/OrderComponent/OrderComponent";
import { Order } from "../../../vite-env";
import PickupComponent from "../../PickupPage/PickupSection/PickupComponent";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";

const Section = ({
  title,
  orders,
  isPickup,
}: {
  title: string;
  orders: Order[];
  isPickup?: boolean;
}) => {
  const { isLoading } = useContext(OrdersContext) || {};

  return (
    <StyledSection isPickup={isPickup}>
      <h2>{title}:</h2>
      <SectionContainer>
        <Orders isPickup={isPickup}>
          {isLoading ? (
            <LoadingComponent />
          ) : (
            orders?.map((order) => {
              const { id } = order;
              if (isPickup) return <PickupComponent key={id} order={order} />;
              return <OrderComponent key={id} order={order} />;
            })
          )}
        </Orders>
      </SectionContainer>
    </StyledSection>
  );
};

export default Section;
