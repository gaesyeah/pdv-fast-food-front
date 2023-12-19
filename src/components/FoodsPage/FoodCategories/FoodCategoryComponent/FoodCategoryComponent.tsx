import { useContext } from "react";
import { Food, FoodCategory } from "../../../../vite-env";
import FoodsContext from "../../../../context/FoodsContext";
import { getAPIandSetState } from "../../../../utils/api";
import { APIroute } from "../../../../utils/routes";
import { StyledFoodCategoryComponent } from "./styles";

const FoodCategoryComponent = ({
  category: { name, imageUrl, id },
}: {
  category: FoodCategory;
}) => {
  const { setFoods, setIsLoading } = useContext(FoodsContext) ?? {};

  const searchFoodsByCategoryId = () => {
    getAPIandSetState<Food>({
      route: `${APIroute.foods}/category/${id}`,
      setState: setFoods,
      setIsLoading,
    });
  };

  return (
    <StyledFoodCategoryComponent onClick={searchFoodsByCategoryId}>
      <div>
        <img src={imageUrl} alt={`category ${id}`} />
      </div>
      <p>{name}</p>
    </StyledFoodCategoryComponent>
  );
};

export default FoodCategoryComponent;
