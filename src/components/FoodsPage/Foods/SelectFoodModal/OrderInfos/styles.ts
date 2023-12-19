import styled from "styled-components";
import { color } from "../../../../../utils/colors";

export const StyledOrderInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 35px;
    font-weight: 600;
  }
`;

export const FoodBasicInfos = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const FoodDescription = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  margin-left: -8%;
  justify-content: space-between;
`;

export const DescriptionText = styled.div`
  margin-top: -20px;
  height: 30%;
  width: 100%;
  overflow: auto;
  span {
    font-size: 15px;
    font-weight: 300;
  }
`;

export const Quantity = styled.div<{ quantity: number }>`
  border-radius: 50px;
  border: 2px solid ${color.green1};
  p {
    font-size: 18px;
    font-weight: 300;
    color: ${color.black};
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 50px;
  div:nth-child(1) {
    margin-left: -1px;
    cursor: ${({ quantity }) => (quantity === 1 ? "not-allowed" : "pointer")};
  }
  div:nth-child(3) {
    margin-right: -1px;
  }
  div {
    cursor: pointer;
    transition: 400ms;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    height: 50px;
    width: 51px;
    background-color: ${color.green1};
    span {
      text-align: center;
      color: ${color.white};
      font-size: 40px;
      font-weight: 300;
    }
  }
`;

export const FoodPrice = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  p {
    margin-right: 35%;
    align-self: flex-end;
  }
`;
