'use client';

import { ICartItem } from '../../models/CartItem';
import { createContext, FC, useContext, useMemo, useReducer } from 'react';
import { CartContextType, CartProviderProps } from './cartContext.types';

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (cartItem: ICartItem) => {
    dispatch({
      type: 'ADD',
      payload: {
        cartItems: [...state.cartItems, cartItem],
      },
    });
  };

  const removeFromCart = (cartItemProdID: number) => {
    const updatedCartItems = state.cartItems.filter(
      (currentCartItem: ICartItem) =>
        currentCartItem.product.id !== cartItemProdID
    );
    dispatch({
      type: 'REMOVE',
      payload: {
        cartItems: updatedCartItems,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: 'CLEAR',
      payload: {
        cartItems: [],
      },
    });
  };

  const contextValue = useMemo(() => {
    return { cartItems: state.cartItems, addToCart, removeFromCart, clearCart };
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const cartReducer = (state: any, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case 'INIT':
      return {
        cartItems: payload.cartItems,
      };
    case 'ADD':
      return {
        cartItems: payload.cartItems,
      };
    case 'CLEAR':
      return {
        cartItems: [],
      };
    case 'REMOVE':
      return {
        cartItems: payload.cartItems,
      };

    default:
      return {
        ...state,
      };
  }
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('cartContext must be used within CartProvider');

  return { ...context };
};

export default CartProvider;
