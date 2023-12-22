import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { color } from "../../../../utils/colors";
import { TiArrowRight } from "react-icons/ti";
import styled from "styled-components";
import { OrderButtonStatus } from "../../../../vite-env";

export const StyledOrderButton = styled.button<{
  status: OrderButtonStatus;
  isLoading: boolean;
}>`
  cursor: ${({ isLoading }) => (isLoading ? "progress" : "pointer")};
  opacity: ${({ isLoading }) => (isLoading ? 0.7 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ status }) =>
    status === "cancel"
      ? "#fad2cf"
      : status === "finish"
      ? "#c7edc9"
      : "#c8e8fa"};
`;
export const CancelIcon = styled(IoClose)`
  color: red;
  font-size: 21px;
`;
export const FinishIcon = styled(IoMdCheckmark)`
  color: ${color.greenBright};
  font-size: 19px;
`;
export const DeliverIcon = styled(TiArrowRight)`
  color: #0882c4;
  font-size: 28px;
`;
