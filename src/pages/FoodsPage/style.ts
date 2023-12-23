import styled from "styled-components";
import { media } from "../../utils/constants";

export const FoodsPageContainer = styled.div`
  @media (max-width: ${media.mobile}) {
    padding-bottom: 25px;
    gap: 45px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 70px;
  padding-bottom: 60px;
`;
