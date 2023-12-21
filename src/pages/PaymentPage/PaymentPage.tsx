import { useContext, useEffect, useState } from "react";
import LeftContent from "../../components/PaymentPage/LeftContent/LeftContent";
import Title from "../../components/PaymentPage/TItle/Title";
import { StyledPage } from "../styles";
import { KitchenPageContainer, KitchenPageDivisor } from "./styles";
import FoodsContext from "../../context/FoodsContext";
import { OrderBody } from "../../vite-env";
import RightContent from "../../components/PaymentPage/RightContent/RightContent";
import { useNavigate } from "react-router-dom";
import { route } from "../../utils/routes";
import ConfirmOrder from "../../components/PaymentPage/ConfirmOrder/ConfirmOrder";
import Modal from "../../components/Modal/Modal";
import ConfirmedOrderModal from "../../components/PaymentPage/ConfirmedOrderModal/ConfirmedOrderModal";

const PaymentPage = () => {
  const { setOrderBody, selectedFoods, showModalWithFoodId } =
    useContext(FoodsContext) || {};

  const navigate = useNavigate();

  const [code, setCode] = useState<string>("auto");

  useEffect(() => {
    if (!selectedFoods || selectedFoods.length === 0) {
      return navigate(`/${route.foods}`);
    }
    setOrderBody((previous: OrderBody) => {
      return { ...previous, foods: selectedFoods };
    });
  }, [selectedFoods]);

  return (
    <>
      {showModalWithFoodId ? (
        <Modal isMini={true}>
          <ConfirmedOrderModal />
        </Modal>
      ) : (
        <></>
      )}
      <StyledPage>
        <KitchenPageContainer>
          <Title />
          <KitchenPageDivisor>
            <LeftContent code={code} />
            <RightContent />
          </KitchenPageDivisor>
          <ConfirmOrder setCode={setCode} />
        </KitchenPageContainer>
      </StyledPage>
    </>
  );
};

export default PaymentPage;
