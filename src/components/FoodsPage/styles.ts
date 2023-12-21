import styled from "styled-components";

export const StyledParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledContainer = styled.ul<{ section: "categories" | "foods" }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ section }) => (section === "categories" ? "70" : "110")}px;
`;
