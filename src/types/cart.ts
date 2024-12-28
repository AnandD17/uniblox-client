import { TDiscount } from "./discount";
import { TProduct } from "./product";

export type TCart = {
  userId: string;
  items: {
    item: TProduct;
    quantity: number;
  }[];
  discount: TDiscount;
};
