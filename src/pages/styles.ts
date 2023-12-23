import styled from "styled-components";
import { color } from "../utils/colors";
import { media } from "../utils/constants";

export const StyledPage = styled.div`
  @media (max-width: ${media.mobile}) {
    padding: 140px 7% 0px 7%;
  }
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
