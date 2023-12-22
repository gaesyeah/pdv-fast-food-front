import styled from "styled-components";
import { color } from "../../utils/colors";

export const ViewOrderPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Divisor = styled.div<{ isPickup?: boolean }>`
  min-height: calc(100vh - 270px);
  width: ${({ isPickup }) => (isPickup ? 6 : 2)}px;
  background-color: ${color.black};
`;
