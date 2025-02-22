import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [], // Initial cart state (empty array)
  },
  reducers: {
    // Adds an item to the cart
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    
    // Removes an item from the cart based on its ID
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
