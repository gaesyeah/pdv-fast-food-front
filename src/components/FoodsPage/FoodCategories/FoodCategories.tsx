import { useContext } from "react";
import FoodsContext from "../../../context/FoodsContext";
import FoodCategoryComponent from "./FoodCategoryComponent/FoodCategoryComponent";
import { StyledContainer, StyledParent } from "../styles";
import { Infos } from "../Foods/styles";

const FoodCategories = () => {
  const { foodCategories, isLoading } = useContext(FoodsContext) ?? {};

  return (
    <StyledParent>
      <Infos>
        <h3>Categorias</h3>
        <p>Navegue por categoria</p>
      </Infos>
      <StyledContainer section="categories">
        {isLoading
          ? "Carregando..."
          : foodCategories?.map((category) => (
              <FoodCategoryComponent key={category.id} category={category} />
            ))}
      </StyledContainer>
    </StyledParent>
  );
};

export default FoodCategories;
