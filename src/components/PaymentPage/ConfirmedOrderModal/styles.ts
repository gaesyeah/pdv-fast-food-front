import styled from "styled-components";

export const StyledConfirmedOrderModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  div {
    width: 80%;
    height: 60%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
  }
  p {
    text-align: center;
    font-size: 19px;
    font-weight: 400;
  }
`;
