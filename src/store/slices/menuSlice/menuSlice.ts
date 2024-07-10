import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMenu, IMenuItem } from "@/services/apiRestaurant";

export type StatusType = "succeeded" | "loading" | "failed" | "idle";

export interface IMenu {
  menu: IMenuItem[];
  status: StatusType;
  error?: string;
}

const initialState: IMenu = {
  menu: [],
  status: "idle",
  error: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    increment: (state) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action) => {},
  },
  extraReducers: (builder) => {
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
  },
});

export const { increment, decrement, incrementByAmount } = menuSlice.actions;

export default menuSlice.reducer;
