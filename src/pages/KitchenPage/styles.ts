import styled from "styled-components";
import { color } from "../../utils/colors";

export const KitchenPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Divisor = styled.div`
  min-height: calc(100vh - 270px);
  width: 2px;
  background-color: ${color.black};
`;
