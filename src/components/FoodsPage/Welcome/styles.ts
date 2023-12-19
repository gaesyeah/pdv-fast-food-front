import styled from "styled-components";
import { color } from "../../../utils/colors";

export const StyledWelcome = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  h2 {
    font-size: 31px;
    font-weight: 700;
  }
  input {
    padding-left: 20px;
    border: none;
    font-size: 17px;
    font-weight: 400;
    border-radius: 4px;
    height: 48px;
    width: 370px;
    background-color: ${color.gray1};
    color: ${color.black};
    &::placeholder {
      color: ${color.gray3};
    }
  }
`;
