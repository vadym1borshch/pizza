import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "@/store/slices/menuSlice/menuSlice";
export const store = configureStore({
  reducer: {
    menu: menuSlice
  },
});

// Типи для використання з TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
