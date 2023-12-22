import { FC, ReactNode, createContext, useState } from "react";
import { Order, OrdersContextState } from "../vite-env";

const OrdersContext = createContext<undefined | OrdersContextState>(undefined);
export default OrdersContext;

export const OrdersProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [allOrders, setAllOrders] = useState<Order[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <OrdersContext.Provider
      value={{
        allOrders,
        setAllOrders,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
