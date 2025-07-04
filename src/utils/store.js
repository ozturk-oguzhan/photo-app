import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import { api } from "./fetchPins";
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
