import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../../utils/reducer/reducer.utils";

const addCartItems = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );
  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== existingItem.id);
  }
  return cartItems.map((item) =>
    item.id === existingItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const deleteCartItem = (cartItems, cartItemToDelete) =>
  cartItems.filter((item) => item.id !== cartItemToDelete.id);

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};
export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
  const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
  createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};
