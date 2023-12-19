import styled from "styled-components";

export const StyledParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  h3 {
    font-size: 21px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const StyledContainer = styled.ul<{ section: "categories" | "foods" }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ section }) => (section === "categories" ? "70" : "110")}px;
`;
