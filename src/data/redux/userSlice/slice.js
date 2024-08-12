import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  subscription: null,
  createdAt: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSubscription: (state, action) => {
      state.subscription = action.payload;
    },
    setCreatedAt: (state, action) => {
      state.createdAt = action.payload;
    },
    clearUser: (state) => {
      state.name = null;
      state.email = null;
      state.subscription = null;
    },
  },
});

export const { setName, setEmail, setSubscription, setCreatedAt, clearUser } =
  userSlice.actions;

export default userSlice.reducer;
