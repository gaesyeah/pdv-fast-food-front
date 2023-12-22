import styled from "styled-components";

export const StyledSection = styled.div<{ isPickup?: boolean }>`
  width: 38%;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: ${({ isPickup }) => (isPickup ? 52 : 31)}px;
    font-weight: 700;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
`;

export const Orders = styled.ul<{ isPickup?: boolean }>`
  padding: ${({ isPickup }) => (isPickup ? "unset" : "5%")};
  display: flex;
  flex-direction: column;
  gap: ${({ isPickup }) => (isPickup ? 70 : 30)}px;
  margin-top: ${({ isPickup }) => (isPickup ? 74 : 25)}px;
  max-height: 80%;
`;
