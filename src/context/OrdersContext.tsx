import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { Order, OrdersContextState } from "../vite-env";
import { APIroute } from "../utils/routes";
import { getAPIandSetState } from "../utils/api";

const OrdersContext = createContext<undefined | OrdersContextState>(undefined);
export default OrdersContext;

export const OrdersProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [allOrders, setAllOrders] = useState<Order[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getAPIandSetState({
      route: APIroute.orders,
      setIsLoading,
      setState: setAllOrders,
    });
  }, []);

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
