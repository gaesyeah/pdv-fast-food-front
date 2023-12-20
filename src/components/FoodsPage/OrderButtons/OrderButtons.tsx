import { useContext } from "react";
import FoodsContext from "../../../context/FoodsContext";
import { useNavigate } from "react-router-dom";
import { route } from "../../../utils/routes";
import { StyledOrderButtons } from "../styles";

export const OrderButtons = () => {
  const { selectedFoods, setSelectedFoods } = useContext(FoodsContext) || {};
  const navigate = useNavigate();

  const isDisabled = selectedFoods?.length === 0 ? true : false;

  return (
    <StyledOrderButtons>
      <button disabled={isDisabled} onClick={() => setSelectedFoods([])}>
        Cancelar
      </button>
      <button
        disabled={isDisabled}
        onClick={() => navigate(`/${route.payment}`)}
      >
        Finalizar Pedido
      </button>
    </StyledOrderButtons>
  );
};
