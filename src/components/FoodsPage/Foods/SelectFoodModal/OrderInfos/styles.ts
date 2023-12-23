import styled from "styled-components";
import { media } from "../../../../../utils/constants";

export const StyledOrderInfos = styled.div`
  @media (max-width: ${media.mobile}) {
    gap: 36px;
  }
  max-height: 70dvh;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 66px;
  h1 {
    @media (max-width: ${media.mobile}) {
      font-size: 28px;
    }
    font-size: 36px;
    font-weight: 700;
  }
`;

export const Margin = styled.div`
  min-height: 1px;
`;
