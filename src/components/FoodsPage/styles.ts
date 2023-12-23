import styled from "styled-components";
import { media } from "../../utils/constants";

export const StyledParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledContainer = styled.ul<{ section: "categories" | "foods" }>`
  @media (max-width: ${media.mobile}) {
    justify-content: center;
    gap: ${({ section }) => (section === "categories" ? "25" : "45")}px;
  }
  display: flex;
  flex-wrap: wrap;
  gap: ${({ section }) => (section === "categories" ? "70" : "110")}px;
`;
