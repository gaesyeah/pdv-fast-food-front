import { StyledLoadingComponent } from "./styles";
import loadingGif from "./../../assets/loadingGif.gif";

const LoadingComponent = () => {
  return (
    <StyledLoadingComponent>
      <img src={loadingGif} alt="loading" />
    </StyledLoadingComponent>
  );
};

export default LoadingComponent;
