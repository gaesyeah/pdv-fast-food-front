import { useContext } from "react";
import OrdersContext from "../../../context/OrdersContext";
import OrderComponent from "../OrderComponent/OrderComponent";
import { Orders, StyledSection, SectionContainer } from "./styles";
import { Order } from "../../../vite-env";

const Section = ({ title, orders }: { title: string; orders: Order[] }) => {
  const { isLoading } = useContext(OrdersContext) || {};

  return (
    <StyledSection>
      <h2>{title}:</h2>
      <SectionContainer>
        <Orders>
          {isLoading
            ? "Carregando..."
            : orders?.map((order) => (
                <OrderComponent key={order.id} order={order} />
              ))}
        </Orders>
      </SectionContainer>
      <ul></ul>
    </StyledSection>
  );
};

export default Section;
