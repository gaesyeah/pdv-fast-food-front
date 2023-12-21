import styled from "styled-components";
import { color } from "../../utils/colors";

export const StyledContent = styled.div`
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  gap: 34px;
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: ${color.black};
  }
`;

export const OrderInputs = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    input {
      &:disabled {
        cursor: not-allowed;
      }
      font-size: 18px;
      font-weight: 400;
      height: 51px;
      border-radius: 6px;
      border: none;
      background-color: ${color.gray1};
      padding: 18px;
      color: ${color.black};
      &::placeholder {
        color: ${color.gray3};
      }
    }
  }
`;
