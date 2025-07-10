import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

import { api } from "./fetchPins";
import userSlice from "./userSlice";
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
