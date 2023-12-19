import { useContext, useEffect, useState } from "react";
import { ModalContent, ModalBackground, StyledSelectModal } from "./styles";
import FoodsContext from "../../../../context/FoodsContext";
import OrderInfos from "./OrderInfos/OrderInfos";

const SelectFoodModal = () => {
  const { setShowModalWithFoodId } = useContext(FoodsContext) || {};

  const [centerModal, setCenterModal] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setCenterModal(true);
    }, 100);
  }, []);

  const controlModal = () => {
    setTimeout(() => {
      setShowModalWithFoodId(null);
    }, 500);
    setCenterModal(false);
  };

  return (
    <StyledSelectModal>
      <ModalBackground onClick={controlModal}></ModalBackground>
      <ModalContent centerModal={centerModal}>
        <OrderInfos />
      </ModalContent>
    </StyledSelectModal>
  );
};

export default SelectFoodModal;
