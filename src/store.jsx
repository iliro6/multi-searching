import { configureStore } from "@reduxjs/toolkit";
import ddSlice from "./feature/Drop-down/ddSlice";
export const store = configureStore({
  reducer: {
   dropDown:ddSlice,
  },
});
