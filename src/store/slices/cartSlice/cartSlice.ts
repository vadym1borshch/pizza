import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItemType = {
  id: number;
  name: string;
  quantity: number;
  amount: number;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

export interface ICart {
  cartItems: CartItemType[];
}

const initialState: ICart = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartAction: (state, action: PayloadAction<CartItemType>) => {
      state.cartItems.push(action.payload);
    },
    decrementAction: (
      state,
      action: PayloadAction<{ id: number; amount: number }>,
    ) => {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (findItem && findItem.quantity <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== findItem.id,
        );
        return;
      }

      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: --item.quantity,
            amount: item.amount - action.payload.amount,
          };
        }
        return item;
      });
    },
    incrementAction: (
      state,
      action: PayloadAction<{ id: number; amount: number }>,
    ) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: ++item.quantity,
            amount: item.amount + action.payload.amount,
          };
        }
        return item;
      });
    },
    deleteItemAction: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCartAction: (state) => {
      state.cartItems = [];
    },
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

export const {
  addToCartAction,
  decrementAction,
  deleteItemAction,
  incrementAction,
  clearCartAction,
} = cartSlice.actions;

export default cartSlice.reducer;
