import styled from "styled-components";
import { color } from "../../utils/colors";
import { media } from "../../utils/constants";

export const ViewOrderPageContainer = styled.div`
  @media (max-width: ${media.mobile}) {
    flex-direction: column;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Divisor = styled.div<{ isPickup?: boolean }>`
  @media (max-width: ${media.mobile}) {
    min-height: ${({ isPickup }) => (isPickup ? 6 : 2)}px;
    min-width: 100%;
  }
  min-height: calc(100vh - 270px);
  width: ${({ isPickup }) => (isPickup ? 6 : 2)}px;
  background-color: ${color.black};
`;
