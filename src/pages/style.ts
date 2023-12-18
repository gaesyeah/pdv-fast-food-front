import styled from "styled-components";
import { color } from "../utils/colors";

export const StyledPage = styled.div`
  padding-top: 60px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  min-width: 100dvw;
  h1 {
    flex: 1;
  }
`;
