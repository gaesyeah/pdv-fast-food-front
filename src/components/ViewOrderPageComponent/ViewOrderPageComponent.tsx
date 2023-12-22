import { useContext } from "react";
import OrdersContext from "../../context/OrdersContext";
import Section from "./Section/Section";
import { Divisor, ViewOrderPageContainer } from "./styles";

const ViewOrderPageComponent = ({ isPickup }: { isPickup?: boolean }) => {
  const { allOrders } = useContext(OrdersContext) || {};

  return (
    <ViewOrderPageContainer>
      <Section
        title="Preparando"
        isPickup={isPickup}
        orders={allOrders?.filter(({ status }) => status === "PREPARING") || []}
      />
      <Divisor isPickup={isPickup}></Divisor>
      <Section
        title="Prontos"
        isPickup={isPickup}
        orders={allOrders?.filter(({ status }) => status === "FINISHED") || []}
      />
    </ViewOrderPageContainer>
  );
};

export default ViewOrderPageComponent;
