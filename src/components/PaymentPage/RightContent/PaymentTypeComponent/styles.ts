import styled from "styled-components";
import { color } from "../../../../utils/colors";

export const StyledPaymentTypeComponent = styled.li<{
  isSelected: boolean;
  isLoading: boolean | undefined;
}>`
  cursor: pointer;
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
  display: flex;
  align-items: center;
  padding: 37px 37px 37px 18px;
  justify-content: space-between;
  transition: 400ms;
  width: 100%;
  height: 88px;
  border-radius: 6px;
  border: 1px solid
    ${({ isSelected }) => (isSelected ? color.green1 : color.gray3)};
  box-shadow: ${({ isSelected }) =>
    isSelected
      ? ` ${color.greenBright} 0px 0px 1px 0px, ${color.greenBright} 0px 0px 1px 0px`
      : "unset"};
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    p {
      font-size: 21px;
      font-weight: 700;
    }
  }
`;
