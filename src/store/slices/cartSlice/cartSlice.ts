import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItemType = {
  id: number;
  itemName: string;
  totalItems: number;
  amount: number;
};

export interface ICart {
  cartItems: CartItemType[];
}

const initialState: ICart = {
  cartItems:[]
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartAction: (state, action: PayloadAction<CartItemType>) => {
      state.cartItems.push(action.payload);
    },
    decrementAction: (state) => {},
    incrementAction: (state, action) => {},
  },
  /* extraReducers: (builder) => {
       builder
         .addCase(getMenu.pending, (state) => {
           state.status = "loading";
         })
         .addCase(
           getMenu.fulfilled,
           (state, action: PayloadAction<IMenuItem[]>) => {
             state.status = "succeeded";
             state.menu = action.payload;
           },
         )
         .addCase(getMenu.rejected, (state, action) => {
           state.status = "failed";
           state.error = action.error.message
         });
     },*/
});

export const { addToCartAction, decrementAction, incrementAction } = cartSlice.actions;

export default cartSlice.reducer;
