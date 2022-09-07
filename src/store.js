import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";
import uesrReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    users: uesrReducer
  },
});
