import styled from "styled-components";
import { color } from "../../utils/colors";
import { media } from "../../utils/constants";

export const StyledOrderFoodInfos = styled.div`
  @media (max-width: ${media.mobile}) {
    padding: 24px 26px 20px 26px;
    gap: 28px;
  }
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
    @media (max-width: ${media.mobile}) {
      font-size: 19px;
    }
    font-size: 22px;
    font-weight: 300;
  }
  span {
    @media (max-width: ${media.mobile}) {
      font-size: 30px;
    }
    font-size: 36px;
    font-weight: 700;
  }
`;
