import styled from "styled-components";
import { color } from "../../utils/colors";
import { media } from "../../utils/constants";

export const StyledHeader = styled.header`
  @media (max-width: ${media.mobile}) {
    height: unset;
    padding: 5px 16px 5px 10px;
    z-index: 3;
  }
  position: fixed;
  z-index: 6;
  padding: 30px 32px 30px 20px;
  height: 10px;
  width: 100%;
  background-color: ${color.green1};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 6px;
  div {
    padding: 4px 5px 4px 5px;
    border-radius: 100%;
    background-color: ${color.white};
    img {
      height: 22px;
    }
  }
  h1 {
    font-weight: 700;
    color: ${color.white};
    font-size: 21px;
  }
`;

export const HRoutes = styled.div`
  @media (max-width: ${media.mobile}) {
    flex-direction: column;
    width: auto;
  }
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

export const HRoute = styled.div<{ selected: boolean }>`
  @media (max-width: ${media.mobile}) {
    padding: 8px 4px 8px 4px;
    max-width: 92px;
  }
  cursor: ${({ selected }) => (selected ? "not-allowed" : "pointer")};
  transition: 600ms;
  padding: 12px 18px 12px 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => (selected ? color.green2 : "unset")};
  a {
    pointer-events: ${({ selected }) => (selected ? "none" : "unset")};
    color: ${color.white};
    font-weight: 600;
  }
`;
