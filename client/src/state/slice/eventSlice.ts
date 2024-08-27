import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user";

export interface AuthDetails {
  user?: null | User;
  token?: string;
}

const initialState: AuthDetails = {
  user: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthDetails>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
