import styled from "styled-components";
import { color } from "../../../utils/colors";
import { media } from "../../../utils/constants";

export const ListOrder = styled.div`
  width: 100%;
  gap: 36px;
  display: flex;
  flex-direction: column;
`;

export const ClientInput = styled.div`
  @media (max-width: ${media.mobile}) {
    width: 60%;
  }
  width: 75%;
`;

export const CodeInput = styled.div<{ code: string }>`
  @media (max-width: ${media.mobile}) {
    width: 35%;
  }
  input {
    transition: 400ms;
    &:disabled {
      background-color: ${({ code }) =>
        code === "auto" ? color.gray1 : color.greenBright};
      opacity: ${({ code }) => (code === "auto" ? 0.7 : 1.0)};
    }
  }
`;
