import { TDiscount } from "./discount";
import { TProduct } from "./product";

export type TOrder = {
    _id: string;
    userId: string;
    items: {
      item: TProduct;
      quantity: number;
    }[];
    discount: TDiscount;
    totalBeforeDiscount: number;
    total: number;
    createdAt: Date;
  };