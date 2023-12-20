import { useContext, useEffect } from "react";
import FoodsContext from "../../../context/FoodsContext";
import { getAPIandSetState } from "../../../utils/api";
import { Food } from "../../../vite-env";
import { APIroute } from "../../../utils/routes";
import { StyledContainer, StyledParent } from "../styles";
import FoodComponent from "./FoodComponent/FoodComponent";
import { Infos } from "./styles";

const Foods = () => {
  const { allFoods, setAllFoods, setIsLoading, isLoading } =
    useContext(FoodsContext) ?? {};

  useEffect(() => {
    if (allFoods) return;
    
    getAPIandSetState<Food>({
      route: APIroute.foods,
      setState: setAllFoods,
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
          : allFoods?.map((food) => (
              <FoodComponent key={food.id} food={food} />
            ))}
      </StyledContainer>
    </StyledParent>
  );
};

export default Foods;
