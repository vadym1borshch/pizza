import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "@/store/slices/menuSlice/menuSlice";
import cartSlice from "@/store/slices/cartSlice/cartSlice";
export const store = configureStore({
  reducer: {
    menu: menuSlice,
    cart: cartSlice
  },
});

// Типи для використання з TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
