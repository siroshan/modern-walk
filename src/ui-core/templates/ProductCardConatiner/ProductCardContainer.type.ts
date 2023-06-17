import { IProduct } from "../../../models/Product"

export type ProductCardContainerProps = {
    products: IProduct[];
    isLoading?: boolean;
}