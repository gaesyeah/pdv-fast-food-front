import styled from "styled-components";
import { color } from "../../utils/colors";

export const StyledPage = styled.div`
  padding-top: 140px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  min-width: 100dvw;
  h1 {
    flex: 1;
  }
`;

export const StyledOrderFoodInfos = styled.div`
  margin-top: -20px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${color.gray3};
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 54px 24px 54px;
  gap: 60px;
  ul {
    gap: 10px;
  }
`;

export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  hr {
    width: 100%;
    color: transparent;
    border-top: 2px dashed ${color.gray3};
  }
  p {
    font-size: 22px;
    font-weight: 300;
  }
  span {
    font-size: 36px;
    font-weight: 700;
  }
`;
