import { useContext, useEffect } from "react";
import FoodsContext from "../../../context/FoodsContext";
import { getAPIandSetState } from "../../../utils/api";
import { Food } from "../../../vite-env";
import { APIroute } from "../../../utils/routes";
import { Infos, StyledContainer, StyledParent } from "../styles";
import FoodComponent from "./FoodComponent/FoodComponent";

const Foods = () => {
  const { foods, setFoods, setIsLoading, isLoading } =
    useContext(FoodsContext) ?? {};

  useEffect(() => {
    getAPIandSetState<Food>({
      route: APIroute.foods,
      setState: setFoods,
      setIsLoading,
    });
  }, []);

  return (
    <StyledParent>
      <Infos>
        <h3>Produtos</h3>
        <p>Selecione um produto para adicionar ao seu pedido</p>
      </Infos>
      <StyledContainer section="foods">
        {isLoading
          ? "Carregando..."
          : foods?.map((food) => <FoodComponent key={food.id} food={food} />)}
      </StyledContainer>
    </StyledParent>
  );
};

export default Foods;
