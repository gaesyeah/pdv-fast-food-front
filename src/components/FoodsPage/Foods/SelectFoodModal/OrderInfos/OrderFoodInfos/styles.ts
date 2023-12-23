import styled from "styled-components";
import { color } from "../../../../../../utils/colors";
import { media } from "../../../../../../utils/constants";

export const StyledOrderFoods = styled.div`
  @media (max-width: ${media.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  display: flex;
  justify-content: space-between;
  color: ${color.black};
  p {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const Quantity = styled.div<{ quantity: number | string | undefined }>`
  border-radius: 50px;
  border: 2px solid ${color.green1};
  h5 {
    font-size: 18px;
    font-weight: 300;
    color: ${color.black};
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  height: 45px;
  div:nth-child(1) {
    margin-left: -1px;
    cursor: ${({ quantity }) =>
      (quantity as number) === 1 ? "not-allowed" : "pointer"};
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
    height: 45px;
    width: 46px;
    background-color: ${color.green1};
    span {
      text-align: center;
      color: ${color.white};
      font-size: 40px;
      font-weight: 300;
    }
  }
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

export const FoodDescription = styled.div`
  @media (max-width: ${media.mobile}) {
    gap: 24px;
    align-items: center;
    padding-top: unset;
  }
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    @media (max-width: ${media.mobile}) {
      align-self: flex-start;
    }
  }
`;

export const FoodInfosContainer = styled.div`
  @media (max-width: ${media.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  display: flex;
  gap: 40px;
`;

export const FoodPrice = styled.div`
  margin-right: 7%;
  display: flex;
  flex-direction: column;
  p {
    align-self: flex-end;
  }
`;
