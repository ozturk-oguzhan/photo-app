import { createSlice } from "@reduxjs/toolkit";
const persistedUser = JSON.parse(localStorage.getItem("user")) || {};
const initialState = {
  user: persistedUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRtk: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutRtk: (state) => {
      state.user = {};
      localStorage.removeItem("user");
    },
  },
});

export default userSlice.reducer;
export const { loginRtk, logoutRtk } = userSlice.actions;
