import { useContext } from "react";
import { Margin, StyledOrderInfos } from "./styles";
import FoodsContext from "../../../../../context/FoodsContext";
import { selectSavedFood } from "../../../../../utils/helpers";
import Extras from "./Extras/Extras";
import { Infos } from "../../styles";
import OrderFoods from "./OrderFoodInfos/OrderFoodInfos";
import OrderFoodInfos from "../../../../OrderFoodInfos/OrderFoodInfos";
import { FoodOnOrder } from "../../../../../vite-env";
import { StyledOrderButtons } from "../../../../styles";
import { ExecOrderModal } from "../../../../Modal/Modal";

const OrderInfos = ({ execOrderModal }: ExecOrderModal) => {
  const { selectedFoods, setSelectedFoods, showModalWithFoodId, allFoods } =
    useContext(FoodsContext) || {};

  const food = allFoods?.find(({ id }) => id === showModalWithFoodId);
  if (!food) return;

  const { id, Extras: extras } = food;

  const savedFood = selectSavedFood({
    selectedFoods: selectedFoods || [],
    id,
  });

  const handleObservation = (newValue: string) => {
    setSelectedFoods((previous: FoodOnOrder[]) => {
      return [
        ...previous.filter(({ foodId }) => foodId !== savedFood?.foodId),
        { ...savedFood, observation: newValue },
      ];
    });
  };

  const isRenderAllowed = extras && extras.length > 0;

  return (
    <StyledOrderInfos>
      <h1>Revise seu pedido!</h1>

      <OrderFoods food={food} quantity={savedFood?.quantity || 1} />

      {isRenderAllowed ? <Extras extras={extras} /> : <></>}

      <Infos>
        <h3>Observações</h3>
        <textarea
          placeholder="Adicione observações ao pedido"
          value={savedFood?.observation || ""}
          onChange={(e) => handleObservation(e.target.value)}
        />
      </Infos>

      <OrderFoodInfos
        selectedFoods={[
          {
            foodId: id,
            quantity: savedFood?.quantity || 1,
            extras: savedFood?.extras || [],
          },
        ]}
      />

      <StyledOrderButtons>
        <button onClick={() => execOrderModal && execOrderModal(true)}>
          Continuar adicionando
        </button>
        <button onClick={() => execOrderModal && execOrderModal(true)}>
          Adicionar ao pedido
        </button>
      </StyledOrderButtons>

      <Margin></Margin>
    </StyledOrderInfos>
  );
};

export default OrderInfos;
