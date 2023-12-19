import { FC, ReactNode, createContext, useState } from "react";
import { Food, FoodCategory, FoodsContextState } from "../vite-env";

const FoodsContext = createContext<undefined | FoodsContextState>(undefined);
export default FoodsContext;

export const FoodsProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [foods, setFoods] = useState<Food[] | null>(null);
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);
  const [showModalWithFoodId, setShowModalWithFoodId] = useState<null | number>(
    null,
  );

  const [foodCategories, setFoodCategories] = useState<FoodCategory[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <FoodsContext.Provider
      value={{
        showModalWithFoodId,
        setShowModalWithFoodId,
        selectedFoods,
        setSelectedFoods,
        foodCategories,
        setFoodCategories,
        foods,
        setFoods,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
};
