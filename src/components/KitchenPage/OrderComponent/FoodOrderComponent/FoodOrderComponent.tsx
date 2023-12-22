import { FoodOrder } from "../../../../vite-env";
import {
  FoodOrderInfo,
  Observation,
  OrderFoodExtras,
  StyledFoodOrderComponent,
} from "./styles";

const FoodOrderComponent = ({
  foodOrder: { quantity, Food, Extras, observation },
}: {
  foodOrder: FoodOrder;
}) => {
  const { imageUrl, name } = Food || {};

  const allowExtrasRender = Extras && Extras.length > 0;

  return (
    <StyledFoodOrderComponent>
      <FoodOrderInfo>
        <div>
          <img src={imageUrl} />
        </div>
        <p>
          x{quantity} {name}
        </p>
      </FoodOrderInfo>
      {allowExtrasRender && (
        <OrderFoodExtras>
          {Extras?.map(({ Extra, id }) => {
            if (Extra) return <span key={id}>{`- ${Extra.name}`}</span>;
          })}
        </OrderFoodExtras>
      )}
      {observation && (
        <Observation>
          <h4>Observações: </h4>
          <div>
            <p>{observation}</p>
          </div>
        </Observation>
      )}
    </StyledFoodOrderComponent>
  );
};

export default FoodOrderComponent;
