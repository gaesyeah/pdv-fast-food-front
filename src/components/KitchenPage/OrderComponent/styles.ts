import styled from "styled-components";
import { OrderStatus } from "../../../vite-env";
import { color } from "../../../utils/colors";

export const StyledKitchenOrderComponent = styled.li<{ status: OrderStatus }>`
  border: ${({ status }) =>
    status === "FINISHED" ? `${color.green1} 1px solid` : "unset"};
  box-shadow: ${({ status }) =>
    status === "FINISHED"
      ? ` ${color.greenBright} 0px 0px 2px 0px, ${color.greenBright} 0px 0px 2px 0px`
      : "rgba(149, 157, 165, 0.2) 0px 8px 24px"};
  border-radius: 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const OrderPrimaryInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const OrderHandleButtons = styled.div`
  display: flex;
  gap: 14px;
  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    width: 39px;
    height: 39px;
  }
`;

export const FoodOrderContainer = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
