import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "@/store/slices/cartSlice/cartSlice";

export type UserType = {
  name: string;
  id: string;
};
export type OrderType = {
  cart: CartItemType[];
  customer: string;
  estimatedDelivery: string;
  id: string;
  orderPrice: number;
  priority: boolean;
  priorityPrice: number;
  status: string;
};

interface IUserState {
  user: UserType | null;
  userAddress: string | null;
  order: OrderType | null;
}

const initialState: IUserState = {
  user: null,
  userAddress: null,
  order: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    deleteUserAction: (state) => {
      state.user = null;
    },
    createOrderAction: (state, action: PayloadAction<OrderType>) => {
      state.order = action.payload;
    },
    changeOrderPriorityAction: (state, action: PayloadAction<boolean>) => {
      state.order!.priority = action.payload;
    },
  },
});

export const {
  setUserAction,
  createOrderAction,
  changeOrderPriorityAction,
  deleteUserAction,
} = userSlice.actions;

export default userSlice.reducer;
