import styled from "styled-components";
import { color } from "../../../utils/colors";
import { media } from "../../../utils/constants";

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  h3 {
    font-size: 21px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 300;
  }
  textarea {
    @media (max-width: ${media.mobile}) {
      min-height: 90px;
    }
    padding: 16px;
    width: 100%;
    min-height: 135px;
    background-color: ${color.gray1};
    border-radius: 12px;
    border: none;
    &::placeholder {
      color: ${color.gray3};
    }
  }
`;
