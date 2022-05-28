import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems, selectIsCartOpen } from "../store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const setIsCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={redirect}>go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
