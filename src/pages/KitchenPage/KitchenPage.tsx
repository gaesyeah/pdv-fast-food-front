import { useContext } from "react";
import { Divisor, StyledPage, ViewOrderPageContainer } from "../styles";
import OrdersContext from "../../context/OrdersContext";
import Section from "../../components/Section/Section";

const KitchenPage = () => {
  const { allOrders } = useContext(OrdersContext) || {};

  return (
    <StyledPage>
      <ViewOrderPageContainer>
        <Section
          title="Preparando"
          orders={
            allOrders?.filter(({ status }) => status === "PREPARING") || []
          }
        />
        <Divisor></Divisor>
        <Section
          title="Prontos"
          orders={
            allOrders?.filter(({ status }) => status === "FINISHED") || []
          }
        />
      </ViewOrderPageContainer>
    </StyledPage>
  );
};

export default KitchenPage;
