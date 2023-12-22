import { useContext } from "react";
import FoodsContext from "../../../context/FoodsContext";
import FoodCategoryComponent from "./FoodCategoryComponent/FoodCategoryComponent";
import { StyledContainer, StyledParent } from "../styles";
import { Infos } from "../Foods/styles";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";

const FoodCategories = () => {
  const { foodCategories, isLoading } = useContext(FoodsContext) ?? {};

  return (
    <StyledParent>
      <Infos>
        <h3>Categorias</h3>
        <p>Navegue por categoria</p>
      </Infos>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <StyledContainer section="categories">
          {foodCategories?.map((category) => (
            <FoodCategoryComponent key={category.id} category={category} />
          ))}
        </StyledContainer>
      )}
    </StyledParent>
  );
};

export default FoodCategories;
