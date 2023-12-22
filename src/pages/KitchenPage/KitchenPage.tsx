import { useContext, useEffect } from "react";
import { StyledPage } from "../styles";
import { Divisor, KitchenPageContainer } from "./styles";
import { getAPIandSetState } from "../../utils/api";
import OrdersContext from "../../context/OrdersContext";
import { APIroute } from "../../utils/routes";
import Section from "../../components/KitchenPage/Section/Section";

const KitchenPage = () => {
  const { allOrders, setAllOrders, setIsLoading } =
    useContext(OrdersContext) || {};

  useEffect(() => {
    if (allOrders) return;
    getAPIandSetState({
      route: APIroute.orders,
      setIsLoading,
      setState: setAllOrders,
    });
  }, []);

  return (
    <StyledPage>
      <KitchenPageContainer>
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
      </KitchenPageContainer>
    </StyledPage>
  );
};

export default KitchenPage;
