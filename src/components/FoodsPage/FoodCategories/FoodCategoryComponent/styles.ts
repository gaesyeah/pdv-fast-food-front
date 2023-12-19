import styled from "styled-components";
import { color } from "../../../../utils/colors";

export const StyledFoodCategoryComponent = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  div {
    width: 130px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    font-size: 20px;
    font-weight: 600;
  }
  min-width: 270px;
  height: 180px;
  border-radius: 15px;
  background-color: ${color.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
