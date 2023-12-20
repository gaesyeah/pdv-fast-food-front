import styled from "styled-components";
import { color } from "../../utils/colors";

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

export const StyledOrderButtons = styled.div`
  display: flex;
  gap: 65px;
  justify-content: flex-end;
  button {
    &:disabled {
      cursor: not-allowed;
    }
    cursor: pointer;
    transition: 600ms;
    font-size: 19px;
    font-weight: 700;
    width: 350px;
    height: 62px;
    border: 1px solid;
    border-radius: 20px;
  }
  button:nth-child(1) {
    &:disabled {
      border-color: ${color.gray3};
      color: ${color.white};
      background-color: ${color.gray3};
      &:hover {
        border-color: ${color.gray3};
        color: ${color.white};
        background-color: ${color.gray3};
      }
    }
    border-color: ${color.green1};
    color: ${color.green1};
    background-color: ${color.white};
    &:hover {
      border-color: ${color.white};
      color: ${color.white};
      background-color: ${color.green1};
    }
  }
  button:nth-child(2) {
    &:disabled {
      border-color: ${color.gray3};
      color: ${color.gray3};
      background-color: ${color.white};
      &:hover {
        border-color: ${color.gray3};
        color: ${color.gray3};
        background-color: ${color.white};
      }
    }
    border-color: ${color.white};
    color: ${color.white};
    background-color: ${color.green1};
    &:hover {
      border-color: ${color.green1};
      color: ${color.green1};
      background-color: ${color.white};
    }
  }
`;
