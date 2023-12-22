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
  paymentTypeId: number;
  paidValue: number;
  foods: FoodOnOrder[];
};
export type FoodOnOrder = {
  foodId: number;
  quantity: number;
  observation?: string;
  extras?: { extraId: number }[];
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
export type LoadingState = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
export type FoodsContextState = FoodsState &
  LoadingState &
  CategoriesState &
  SelectedFoodsState &
  OpenModalState &
  OrderBodyState & { originalAllFoods: Food[] };

type OrdersState = {
  allOrders: Order[] | null;
  setAllOrders: Dispatch<SetStateAction<Order[] | null>>;
};

export type OrdersContextState = OrdersState & LoadingState;

export type OrderButtonStatus = "cancel" | "finish" | "deliver";
