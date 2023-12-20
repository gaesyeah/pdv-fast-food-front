import { useContext, useState } from "react";
import { Margin, StyledOrderInfos } from "./styles";
import FoodsContext from "../../../../../context/FoodsContext";
import { setInput } from "../../../../../utils/helpers";
import Extras from "./Extras/Extras";
import { StyledOrderButtons } from "../../../styles";
import OrderFinalDetails from "./OrderFinalDetails/OrderFinalDetails";
import { Infos } from "../../styles";
import OrderFoods from "./OrderFoodInfos/OrderFoodInfos";

type ExecOrder = {
  execOrder: (isNotCancel: boolean) => void;
};

const OrderInfos = ({ execOrder }: ExecOrder) => {
  const { selectedFoods, showModalWithFoodId, allFoods } =
    useContext(FoodsContext) || {};

  const [observationInput, setObservationInput] = useState<string>("");

  const food = allFoods?.find(({ id }) => id === showModalWithFoodId);
  if (!food) return;

  const { id, price, Extras: extras } = food;

  const renderQuantity = () => {
    const savedFoodQuantity = selectedFoods?.find(({ foodId }) => foodId === id)
      ?.quantity;

    if (savedFoodQuantity) return savedFoodQuantity;

    return 1;
  };

  return (
    <StyledOrderInfos>
      <h1>Revise seu pedido!</h1>

      <OrderFoods food={food} quantity={renderQuantity()} />

      {extras && extras.length > 0 && <Extras extras={extras} />}

      <Infos>
        <h3>Observações</h3>
        <textarea
          placeholder="Adicione observações ao pedido"
          value={observationInput}
          onChange={(e) => setInput({ e, setState: setObservationInput })}
        />
      </Infos>

      <OrderFinalDetails
        quantity={renderQuantity()}
        price={price}
        food={food}
      />

      <StyledOrderButtons>
        <button onClick={() => execOrder(true)}>Continuar adicionando</button>
        <button onClick={() => execOrder(true)}>Adicionar ao pedido</button>
      </StyledOrderButtons>

      <Margin></Margin>
    </StyledOrderInfos>
  );
};

export default OrderInfos;
