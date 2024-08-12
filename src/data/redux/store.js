import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice/slice";
import tokenReducer from "./tokenSlice/slice";
import userReducer from "./userSlice/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    token: tokenReducer,
  },
});

export default store;
