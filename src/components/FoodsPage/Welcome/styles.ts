import styled from "styled-components";
import { color } from "../../../utils/colors";
import { media } from "../../../utils/constants";

export const StyledWelcome = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  input {
    @media (max-width: ${media.mobile}) {
      width: 90%;
      align-self: center;
    }
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
