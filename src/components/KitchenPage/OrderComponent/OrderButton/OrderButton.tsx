import axios from "axios";
import { OrderButtonStatus, LoadingState } from "../../../../vite-env";
import {
  CancelIcon,
  DeliverIcon,
  FinishIcon,
  StyledOrderButton,
} from "./styles";
import Swal from "sweetalert2";
import { errorSwal } from "../../../../utils/constants";
import { getAPIandSetState } from "../../../../utils/api";
import { useContext } from "react";
import OrdersContext from "../../../../context/OrdersContext";
import { APIroute } from "../../../../utils/routes";

const OrderButton = ({
  status,
  orderId,
  loadingState: { isLoading, setIsLoading },
}: {
  orderId: number;
  status: OrderButtonStatus;
  loadingState: LoadingState;
}) => {
  const { setAllOrders } = useContext(OrdersContext) || {};

  const handleOrder = async (param: OrderButtonStatus) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    setIsLoading(true);
    try {
      await axios.patch(`${BASE_URL}/${APIroute.orders}/${param}/${orderId}`);

      await getAPIandSetState({
        route: APIroute.orders,
        setIsLoading,
        setState: setAllOrders,
      });
    } catch (err: unknown) {
      setIsLoading(false);
      Swal.fire(errorSwal);
    }
  };

  return (
    <StyledOrderButton
      onClick={() => handleOrder(status)}
      disabled={isLoading}
      isLoading={isLoading}
      status={status}
    >
      {status === "cancel" ? (
        <CancelIcon />
      ) : status === "deliver" ? (
        <DeliverIcon />
      ) : (
        <FinishIcon />
      )}
    </StyledOrderButton>
  );
};

export default OrderButton;
