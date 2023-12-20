import { FC, ReactNode, createContext, useState } from "react";
import {
  Food,
  FoodCategory,
  FoodOnOrder,
  FoodsContextState,
  OrderBody,
} from "../vite-env";

const FoodsContext = createContext<undefined | FoodsContextState>(undefined);
export default FoodsContext;

export const FoodsProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [orderBody, setOrderBody] = useState<OrderBody | null>(null);
  const [selectedFoods, setSelectedFoods] = useState<FoodOnOrder[]>([]);
  const [showModalWithFoodId, setShowModalWithFoodId] = useState<null | number>(
    null,
  );

  const [allFoods, setAllFoods] = useState<Food[] | null>(null);
  const [foodCategories, setFoodCategories] = useState<FoodCategory[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <FoodsContext.Provider
      value={{
        orderBody,
        setOrderBody,
        showModalWithFoodId,
        setShowModalWithFoodId,
        selectedFoods,
        setSelectedFoods,
        foodCategories,
        setFoodCategories,
        allFoods,
        setAllFoods,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
};
