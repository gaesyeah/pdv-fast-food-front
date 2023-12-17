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

type OrderStatus = 'PREPARING' | 'FINISHED' | 'DELIVERED' | 'CANCELED';

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
  Foods?: Food[];
  frontBackGroundUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type Food = {
  id: number;
  code: string;
  name: string;
  price: number;
  description: string;
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
