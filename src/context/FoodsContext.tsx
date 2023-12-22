import {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Food,
  FoodCategory,
  FoodOnOrder,
  FoodsContextState,
  OrderBody,
} from "../vite-env";
import { getAPIandSetState } from "../utils/api";
import { APIroute } from "../utils/routes";

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

  const [originalAllFoods, setOriginalAllFoods] = useState<Food[]>([]);
  const isEffected = useRef<boolean>(false);
  useEffect(() => {
    if (isEffected.current === true || !allFoods) return;
    isEffected.current = true;
    setOriginalAllFoods(allFoods);
  }, [allFoods]);
  useEffect(() => {
    getAPIandSetState({
      route: APIroute.categories,
      setState: setFoodCategories,
      setIsLoading,
    });
    getAPIandSetState({
      route: APIroute.foods,
      setState: setAllFoods,
      setIsLoading,
    });
  }, []);

  return (
    <FoodsContext.Provider
      value={{
        orderBody,
        originalAllFoods,
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
