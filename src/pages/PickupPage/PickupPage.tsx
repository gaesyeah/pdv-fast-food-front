import { useContext } from "react";
import { Divisor, StyledPage, ViewOrderPageContainer } from "../styles";
import OrdersContext from "../../context/OrdersContext";
import Section from "../../components/Section/Section";

const PickupPage = () => {
  const { allOrders } = useContext(OrdersContext) || {};

  return (
    <StyledPage>
      <ViewOrderPageContainer>
        <Section
          title="Preparando"
          isPickup={true}
          orders={
            allOrders?.filter(({ status }) => status === "PREPARING") || []
          }
        />
        <Divisor isPickup={true}></Divisor>
        <Section
          title="Prontos"
          isPickup={true}
          orders={
            allOrders?.filter(({ status }) => status === "FINISHED") || []
          }
        />
      </ViewOrderPageContainer>
    </StyledPage>
  );
};

export default PickupPage;
