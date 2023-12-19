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
  observation?: string | null;
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
  Food?: Food;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  OrderFoodExtras?: OrderFoodExtras[];
};

type CategoriesState = {
  foodCategories: FoodCategory[] | null;
  setFoodCategories: Dispatch<SetStateAction<FoodCategory[] | null>>;
};
type SelectedFoodsState = {
  foods: Food[] | null;
  setFoods: Dispatch<SetStateAction<Food[] | null>>;
};
type FoodsState = {
  selectedFoods: Food[] | null;
  setSelectedFoods: Dispatch<SetStateAction<Food[] | null>>;
};
type openModalState = {
  showModalWithFoodId: null | number;
  setShowModalWithFoodId: Dispatch<SetStateAction<null | number>>;
};
type foodsLoadingState = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
export type FoodsContextState = foodsLoadingState &
  FoodsState &
  CategoriesState &
  SelectedFoodsState &
  openModalState;
