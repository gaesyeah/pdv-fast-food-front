import styled from "styled-components";
import { color } from "../../../../utils/colors";

export const StyledFoodOrderComponent = styled.li`
  gap: 8px;
  padding: 8px;
  border-radius: 10px;
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FoodOrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  p {
    font-size: 16px;
    font-weight: 400;
    color: ${color.black};
  }
  div {
    width: 60px;
    height: 60px;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 7px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const OrderFoodExtras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  span {
    font-size: 13px;
    font-weight: 400;
    color: ${color.gray3};
  }
`;

export const Observation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  width: 100%;
  gap: 8px;
  color: ${color.black};
  h4 {
    align-self: flex-start;
    font-size: 14px;
    font-weight: 600;
  }
  div {
    width: 100%;
    display: flex;
    padding: 13px;
    border-radius: 6px;
    border: 1px solid ${color.gray3};
    p {
      align-self: flex-end;
      justify-self: flex-start;
      font-size: 15px;
      font-weight: 400;
    }
  }
`;
