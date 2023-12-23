import styled from "styled-components";
import { color } from "../utils/colors";
import { media } from "../utils/constants";

export const Select = styled.div<{ isSelected: boolean | undefined }>`
  @media (max-width: ${media.mobile}) {
    min-height: 20px;
    min-width: 20px;
  }
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 100%;
  min-height: 24px;
  min-width: 24px;
  border: 2px solid ${color.green1};
  background-color: ${({ isSelected }) =>
    isSelected ? `${color.green1}` : `${color.white}`};
  transition: 400ms;
`;

export const StyledOrderButtons = styled.div<{ isMini?: boolean }>`
  @media (max-width: ${media.mobile}) {
    gap: ${({ isMini }) => (isMini ? '14px' : '5%')};
    flex-direction: ${({ isMini }) => (isMini ? "column" : "unset")};
    align-items: ${({ isMini }) => (isMini ? "center" : "unset")};
    width: ${({ isMini }) => (isMini ? "100%" : "unset")};
    margin-top: unset;
  }
  display: flex;
  padding-bottom: ${({ isMini }) => (isMini ? "50px" : "unset")};
  margin-right: ${({ isMini }) => (isMini ? "-34px" : "unset")};
  margin-top: ${({ isMini }) => (isMini ? "90px" : "unset")};
  gap: ${({ isMini }) => (isMini ? 30 : 65)}px;
  justify-content: flex-end;
  button {
    @media (max-width: ${media.mobile}) {
      width: ${({ isMini }) => (isMini ? 230 : 310)}px;
      height: ${({ isMini }) => (isMini ? 50 : 55)}px;
      font-size: ${({ isMini }) => (isMini ? 14 : 16)}px;
      line-height: 17px;
    }
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
