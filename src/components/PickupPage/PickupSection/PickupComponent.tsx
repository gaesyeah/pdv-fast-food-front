import { Order } from "../../../vite-env";
import { StyledPickUpComponent } from "./styles";

const PickupComponent = ({ order: { customerName } }: { order: Order }) => {
  return (
    <StyledPickUpComponent>
      <p>{customerName}</p>
    </StyledPickUpComponent>
  );
};

export default PickupComponent;
