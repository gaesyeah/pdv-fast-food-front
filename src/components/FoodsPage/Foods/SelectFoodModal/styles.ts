import styled from "styled-components";
import { color } from "../../../../utils/colors";

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

export const ModalContent = styled.div<{ centerModal: boolean }>`
  padding: 4%;
  background-color: ${color.white};
  border-radius: 30px;
  width: 57%;
  min-height: 70%;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
