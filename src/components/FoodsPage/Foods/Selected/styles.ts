import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { color } from "../../../../utils/colors";

export const StyledSelected = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #4cbb17;
  z-index: 2;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectedIcon = styled(FaCheck)`
  color: ${color.white};
  font-size: 30px;
`;
