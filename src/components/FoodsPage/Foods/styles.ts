import styled from "styled-components";
import { color } from "../../../utils/colors";

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
    width: 100%;
    min-height: 200px;
    background-color: ${color.gray1};
    border-radius: 12px;
    border: none;
    &::placeholder {
      color: ${color.gray3};
    }
  }
`;
