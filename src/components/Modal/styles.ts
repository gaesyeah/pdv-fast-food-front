import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { color } from "../../utils/colors";

export const ModalBackground = styled.div`
  cursor: pointer;
  min-height: 100%;
  min-width: 100%;
  background-color: rgba(109, 109, 109, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

export const ModalContent = styled.div<{
  centerModal: boolean;
  isMini?: boolean;
}>`
  padding: 4%;
  overflow: auto;
  background-color: ${color.white};
  border-radius: 30px;
  width: 57%;
  min-height: 70%;
  opacity: 1;
  display: flex;
  justify-content: center;
  position: absolute;
  transition: 400ms;
  right: ${({ centerModal }) => (centerModal ? "22.5%" : "100%")};
`;

export const StyledSelectModal = styled.div`
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const Close = styled(IoIosClose)`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 60px;
  color: ${color.gray3};
`;
