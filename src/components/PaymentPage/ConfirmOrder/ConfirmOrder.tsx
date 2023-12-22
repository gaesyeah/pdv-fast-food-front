import { Dispatch, SetStateAction, useContext } from "react";
import { finalPrice } from "../../../utils/helpers";
import { APIroute, route } from "../../../utils/routes";
import { StyledOrderButtons } from "../../styles";
import FoodsContext from "../../../context/FoodsContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Order } from "../../../vite-env";
import Swal from "sweetalert2";
import { errorSwal } from "../../../utils/constants";
import { ExecOrderModal } from "../../Modal/Modal";
import { getAPIandSetState } from "../../../utils/api";
import OrdersContext from "../../../context/OrdersContext";

const ConfirmOrder = ({
  setCode,
}: {
  setCode: Dispatch<SetStateAction<string>>;
} & ExecOrderModal) => {
  const {
    selectedFoods,
    orderBody,
    originalAllFoods,
    setShowModalWithFoodId,
    setSelectedFoods,
    setOrderBody,
    setIsLoading,
    isLoading,
  } = useContext(FoodsContext) || {};
  const { setAllOrders, setIsLoading: setIsLoadingOrders } =
    useContext(OrdersContext) || {};

  const navigate = useNavigate();

  if (!orderBody || !originalAllFoods || !selectedFoods) return;
  const { paymentTypeId, customerName, paidValue } = orderBody;

  const isOrderNotValid =
    !paymentTypeId ||
    !customerName ||
    customerName === "" ||
    !paidValue ||
    paidValue < (finalPrice({ originalAllFoods, selectedFoods }) || 0);

  const confirmOrder = async () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    setIsLoading(true);
    try {
      const {
        data: { id },
      } = await axios.post<Order>(`${BASE_URL}/${APIroute.orders}`, orderBody);
      setCode(`${id}`);

      setTimeout(() => {
        setShowModalWithFoodId(1);
        setTimeout(() => {
          navigate(`/${route.pickup}`);
          setShowModalWithFoodId(null);
          setOrderBody(null);
          setSelectedFoods([]);
          setIsLoading(false);
        }, 1500);
      }, 2000);

      await getAPIandSetState({
        route: APIroute.orders,
        setIsLoading: setIsLoadingOrders,
        setState: setAllOrders,
      });
    } catch (err: unknown) {
      setIsLoading(false);
      Swal.fire(errorSwal);
    }
  };

  return (
    <StyledOrderButtons isMini={true}>
      <button disabled={isLoading} onClick={() => navigate(`/${route.foods}`)}>
        {isLoading ? "Redirecionando..." : "Cancelar"}
      </button>
      <button disabled={isOrderNotValid || isLoading} onClick={confirmOrder}>
        {isLoading ? "Redirecionando..." : "Finalizar pedido"}
      </button>
    </StyledOrderButtons>
  );
};

export default ConfirmOrder;
