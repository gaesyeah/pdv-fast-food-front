import styled from "styled-components";
import { color } from "../../../../../../../utils/colors";
import { media } from "../../../../../../../utils/constants";

export const StyledExtraComponent = styled.li`
  @media (max-width: ${media.mobile}) {
    flex-direction: column;
  }
  height: 110px;
  background-color: ${color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.div`
  gap: 18px;
  display: flex;
  align-items: center;
`;

export const RightContent = styled.div`
  gap: 54px;
  display: flex;
  align-items: center;
  p {
    color: ${color.gray3};
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ExtraDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${color.black};
  p {
    font-size: 20px;
    font-weight: 600;
  }
  div {
    min-height: 22px;
    max-height: 40px;
    overflow: auto;
    span {
      font-size: 13px;
      font-weight: 300;
    }
  }
`;

export const ExtraImage = styled.div`
  @media (max-width: ${media.mobile}) {
    min-width: 75px;
    width: 75px;
    height: 75px;
  }
  height: 95px;
  width: 100px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 15px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
