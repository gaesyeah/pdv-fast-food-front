import styled from "styled-components";
import { media } from "../../../utils/constants";

export const StyledOrderFoodInfo = styled.li<{ isExtra: boolean }>`
  p {
    @media (max-width: ${media.mobile}) {
      font-size: ${({ isExtra }) => (isExtra ? "13" : "16")}px;
    }
    font-size: ${({ isExtra }) => (isExtra ? "16" : "22")}px;
    font-weight: ${({ isExtra }) => (isExtra ? "200" : "300")};
  }
  display: flex;
  justify-content: space-between;
  margin-top: ${({ isExtra }) => (isExtra ? "unset" : "12px")};
`;
