import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`;
export const StyledLoadingComponent = styled.div`
  cursor: progress;
  width: 85px;
  height: 85px;
  overflow: hidden;
  align-self: center;
  justify-self: center;
  border-radius: 100%;
  animation: ${pulseAnimation} 2s infinite;
  img {
    transform: scale(2.2);
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
