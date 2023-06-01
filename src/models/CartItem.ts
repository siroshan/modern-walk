import { IProduct } from "./Product";

export interface ICartItem {
    product: IProduct;
    qty: number;
}