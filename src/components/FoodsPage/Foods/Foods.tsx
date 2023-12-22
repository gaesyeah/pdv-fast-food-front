import { useContext } from "react";
import FoodsContext from "../../../context/FoodsContext";
import { StyledContainer, StyledParent } from "../styles";
import FoodComponent from "./FoodComponent/FoodComponent";
import { Infos } from "./styles";

const Foods = () => {
  const { allFoods, isLoading } = useContext(FoodsContext) ?? {};

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
