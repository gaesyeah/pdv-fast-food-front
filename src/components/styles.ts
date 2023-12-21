import styled from "styled-components";
import { color } from "../utils/colors";

export const Select = styled.div<{ isSelected: boolean | undefined }>`
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 100%;
  height: 24px;
  width: 24px;
  border: 2px solid ${color.green1};
  background-color: ${({ isSelected }) =>
    isSelected ? `${color.green1}` : `${color.white}`};
  transition: 400ms;
`;

export const StyledOrderButtons = styled.div<{ isMini?: boolean }>`
  display: flex;
  margin-right: ${({ isMini }) => (isMini ? "-34px" : "unset")};
  margin-top: ${({ isMini }) => (isMini ? "90px" : "unset")};
  gap: ${({ isMini }) => (isMini ? 30 : 65)}px;
  justify-content: flex-end;
  button {
    &:disabled {
      cursor: not-allowed;
    }
    cursor: pointer;
    transition: 600ms;
    font-size: ${({ isMini }) => (isMini ? 17 : 19)}px;
    font-weight: ${({ isMini }) => (isMini ? 600 : 700)};
    width: ${({ isMini }) => (isMini ? 300 : 350)}px;
    height: ${({ isMini }) => (isMini ? 54 : 62)}px;
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
