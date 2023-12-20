import styled from "styled-components";

export const StyledOrderFoodInfo = styled.li<{ isExtra: boolean }>`
  p {
    font-size: ${({ isExtra }) => (isExtra ? "16" : "22")}px;
    font-weight: ${({ isExtra }) => (isExtra ? "200" : "300")};
  }
  display: flex;
  justify-content: space-between;
  margin-top: ${({ isExtra }) => (isExtra ? "unset" : "12px")};
`;
