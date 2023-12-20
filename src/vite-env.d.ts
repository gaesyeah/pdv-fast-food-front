/// <reference types="vite/client" />

export type PaymentType = {
  id: number;
  name: string;
  Orders?: Order[];
  createdAt: string;
  updatedAt: string;
};

export type Order = {
  id: number;
  status: OrderStatus;
  code: number;
  customerName: string;
  paidValue: number;
  paymentTypeId: number;
  PaymentType?: PaymentType;
  Foods?: FoodOrder[];
  createdAt: string;
  updatedAt: string;
};

type OrderStatus = "PREPARING" | "FINISHED" | "DELIVERED" | "CANCELED";

type FoodOrder = {
  id: number;
  quantity: number;
  observation?: string | null;
  foodId: number;
  Food?: Food;
  orderId: number;
  Order?: Order;
  createdAt: string;
  updatedAt: string;
  Extras?: OrderFoodExtras[];
};

type OrderFoodExtras = {
  id: number;
  foodOrderId: number;
  FoodOrder?: FoodOrder;
  extraId: number;
  Extra?: Extra;
  createdAt: string;
  updatedAt: string;
};

export type FoodCategory = {
  id: number;
  name: string;
  imageUrl: string;
  Foods?: Food[];
  createdAt: string;
  updatedAt: string;
};

export type Food = {
  id: number;
  code: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  frontBackGroundUrl: string;
  foodCategoryId: number;
  FoodCategory?: FoodCategory;
  Extras?: Extra[];
  Orders?: FoodOrder[];
  createdAt: string;
  updatedAt: string;
};

export type Extra = {
  id: number;
  foodId: number;
  imageUrl: string;
  Food?: Food;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  OrderFoodExtras?: OrderFoodExtras[];
};

export type OrderBody = {
  customerName: string;
  paymentTypeId: string;
  observation?: string;
  paidValue: number;
  foods: FoodOnOrder[];
};
export type FoodOnOrder = {
  foodId: number;
  quantity: number;
  extras?: Pick<Extra, "id">[];
};

type OrderBodyState = {
  orderBody: OrderBody | null;
  setOrderBody: Dispatch<SetStateAction<OrderBody | null>>;
};
type CategoriesState = {
  foodCategories: FoodCategory[] | null;
  setFoodCategories: Dispatch<SetStateAction<FoodCategory[] | null>>;
};
type SelectedFoodsState = {
  selectedFoods: FoodOnOrder[];
  setSelectedFoods: Dispatch<SetStateAction<FoodOnOrder[]>>;
};
type FoodsState = {
  allFoods: Food[] | null;
  setAllFoods: Dispatch<SetStateAction<Food[] | null>>;
};
type OpenModalState = {
  showModalWithFoodId: null | number;
  setShowModalWithFoodId: Dispatch<SetStateAction<null | number>>;
};
type FoodsLoadingState = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
export type FoodsContextState = FoodsState &
  FoodsLoadingState &
  CategoriesState &
  SelectedFoodsState &
  OpenModalState &
  OrderBodyState;
