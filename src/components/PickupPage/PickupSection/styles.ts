import styled from "styled-components";
import { color } from "../../../utils/colors";
import { media } from "../../../utils/constants";

export const StyledPickUpComponent = styled.li`
  p {
    @media (max-width: ${media.mobile}) {
      font-size: 60px;
    }
    font-size: 85px;
    font-weight: 800;
    color: ${color.green1};
  }
`;
