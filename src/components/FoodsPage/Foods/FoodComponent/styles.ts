import styled from "styled-components";
import { color } from "../../../../utils/colors";

export const StyledFoodComponent = styled.li<{ isOnSelectModal?: boolean }>`
  cursor: ${({ isOnSelectModal }) => (isOnSelectModal ? "default" : "pointer")};
  height: ${({ isOnSelectModal }) => (isOnSelectModal ? "185" : "300")}px;
  width: ${({ isOnSelectModal }) => (isOnSelectModal ? "245" : "244")}px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FoodInfos = styled.div<{ isOnSelectModal?: boolean }>`
  min-height: 50%;
  min-width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  border-radius: 15px 15px 0px 0px;
  flex-direction: column;
  background: ${color.white};
  height: ${({ isOnSelectModal }) => (isOnSelectModal ? "50" : "70")}%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  p {
    font-size: 17px;
    font-weight: 600;
  }
  div {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span {
      text-align: center;
      font-size: 11px;
      font-weight: 400;
    }
  }
`;

export const FoodImg = styled.div<{ isOnSelectModal?: boolean }>`
  z-index: 1;
  position: absolute;
  overflow: hidden;
  width: 110px;
  height: 110px;
  top: 50%;
  left: 50%;
  transform: ${({ isOnSelectModal }) =>
    isOnSelectModal ? "translate(-50%, -50%)" : "translate(-50%, -105%)"};
  img {
    object-fit: cover;
    width: 100%;
    height: 100;
  }
`;