import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    numberOfItems:0,
    totalCost: 0
}





const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
