import styled from "styled-components";
import { color } from "../../utils/colors";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 6;
  height: 10px;
  width: 100%;
  background-color: ${color.green1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 32px 30px 20px;
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
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

export const HRoute = styled.div<{ selected: boolean }>`
  cursor: ${({ selected }) => (selected ? "not-allowed" : "pointer")};
  transition: 600ms;
  padding: 12px 18px 12px 18px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? color.green2 : "unset")};
  a {
    pointer-events: ${({ selected }) => (selected ? "none" : "unset")};
    color: ${color.white};
    font-weight: 600;
  }
`;
