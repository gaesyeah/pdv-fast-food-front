import ViewOrderPageComponent from "../../components/ViewOrderPageComponent/ViewOrderPageComponent";
import { StyledPage } from "../styles";

const PickupPage = () => {
  return (
    <StyledPage>
      <ViewOrderPageComponent isPickup={true} />
    </StyledPage>
  );
};

export default PickupPage;
