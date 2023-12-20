import styled from "styled-components";
import { color } from "../../../../../../../utils/colors";

export const StyledExtraComponent = styled.li`
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

export const ExtraSelect = styled.div<{ isExtraSelected: boolean | undefined }>`
  cursor: pointer;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  border: 2px solid ${color.green1};
  background-color: ${({ isExtraSelected }) =>
    isExtraSelected ? `${color.green1}` : `${color.white}`};
  transition: 400ms;
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
