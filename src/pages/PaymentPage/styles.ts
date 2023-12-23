import styled from "styled-components";
import { media } from "../../utils/constants";

export const PaymentPageContainer = styled.div`
  @media (max-width: ${media.mobile}) {
    gap: 10px;
  }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const PaymentPageDivisor = styled.div`
  @media (max-width: ${media.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
  width: 100%;
  height: 100%;
  display: flex;
  gap: 15%;
`;
