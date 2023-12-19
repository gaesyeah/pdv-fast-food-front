import { useContext, useEffect, useState } from "react";
import FoodsContext from "../../../context/FoodsContext";
import { getAPIandSetState } from "../../../utils/api";
import FoodCategoryComponent from "./FoodCategoryComponent/FoodCategoryComponent";
import { FoodCategory } from "../../../vite-env";
import { APIroute } from "../../../utils/routes";
import { Infos, StyledContainer, StyledParent } from "../styles";

const FoodCategories = () => {
  const { foodCategories, setFoodCategories } = useContext(FoodsContext) ?? {};

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getAPIandSetState<FoodCategory>({
      route: APIroute.categories,
      setState: setFoodCategories,
      setIsLoading,
    });
  }, []);

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
