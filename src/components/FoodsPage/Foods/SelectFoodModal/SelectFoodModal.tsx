import { useContext, useEffect, useState } from "react";
import {
  ModalContent,
  ModalBackground,
  StyledSelectModal,
  Close,
} from "./styles";
import FoodsContext from "../../../../context/FoodsContext";
import OrderInfos from "./OrderInfos/OrderInfos";
import { FoodOnOrder } from "../../../../vite-env";

const SelectFoodModal = () => {
  const { setShowModalWithFoodId, showModalWithFoodId, setSelectedFoods } =
    useContext(FoodsContext) || {};

  const [centerModal, setCenterModal] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setCenterModal(true);
    }, 100);
  }, []);

  const execOrder = (isNotCancel: boolean) => {
    const controlModal = () => {
      setTimeout(() => {
        setShowModalWithFoodId(null);
      }, 500);
      setCenterModal(false);
    };

    if (isNotCancel) return controlModal();

    const id = showModalWithFoodId;
    setSelectedFoods((selectedFoods: FoodOnOrder[]) => {
      return selectedFoods.filter(({ foodId }) => foodId !== id);
    });
    controlModal();
  };

  return (
    <StyledSelectModal>
      <ModalBackground onClick={() => execOrder(false)}></ModalBackground>
      <ModalContent centerModal={centerModal}>
        <OrderInfos execOrder={execOrder} />
        <Close onClick={() => execOrder(false)} />
      </ModalContent>
    </StyledSelectModal>
  );
};

export default SelectFoodModal;
