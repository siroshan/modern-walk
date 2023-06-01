import { ReactNode } from 'react';
import { ICartItem } from '../../models/CartItem';

export type CartContextType = {
  cartItems: ICartItem[];
  addToCart: (cartItem: ICartItem) => void;
  removeFromCart: (cartItemProdID: number) => void;
  clearCart: () => void;
};

export type CartProviderProps = {
  children: ReactNode;
};
