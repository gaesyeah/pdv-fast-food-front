import styled from "styled-components";
import { color } from "../utils/colors";

export const StyledPage = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  min-width: 100dvw;
  padding: 140px 15% 0px 15%;
  h1 {
    flex: 1;
  }
`;

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
