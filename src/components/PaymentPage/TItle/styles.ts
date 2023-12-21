import styled from "styled-components";
import { IoWallet } from "react-icons/io5";
import { color } from "../../../utils/colors";

export const StyledTitle = styled.div`
  width: 100;
  display: flex;
  gap: 22px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 46px;
`;

export const WalletIcon = styled(IoWallet)`
  font-size: 30px;
  color: ${color.green1};
`;
