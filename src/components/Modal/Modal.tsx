import React, { useContext, useEffect, useState } from "react";
import FoodsContext from "../../context/FoodsContext";
import { FoodOnOrder } from "../../vite-env";
import {
  Close,
  ModalBackground,
  ModalContent,
  StyledSelectModal,
} from "./styles";

export type ExecOrderModal = {
  execOrderModal?: (isNotCancel: boolean) => void;
};
type ModalProps<T> = {
  children: React.ReactElement<T>;
  isMini?: boolean;
};

const Modal = <T extends NonNullable<unknown>>({
  children,
  isMini,
  ...otherProps
}: ModalProps<T>) => {
  const { setShowModalWithFoodId, showModalWithFoodId, setSelectedFoods } =
    useContext(FoodsContext) || {};

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
  const execOrderModal = (isNotCancel: boolean) => {
    if (isNotCancel) return controlModal();

    const id = showModalWithFoodId;
    setSelectedFoods((selectedFoods: FoodOnOrder[]) => {
      return selectedFoods.filter(({ foodId }) => foodId !== id);
    });
    controlModal();
  };

  return (
    <StyledSelectModal>
      <ModalBackground onClick={() => execOrderModal(false)}></ModalBackground>
      <ModalContent isMini={isMini} centerModal={centerModal}>
        <>
          {React.cloneElement(children, {
            ...otherProps,
            execOrderModal,
          } as Partial<T & ExecOrderModal>)}
        </>
        <Close onClick={() => execOrderModal(false)} />
      </ModalContent>
    </StyledSelectModal>
  );
};

export default Modal;
