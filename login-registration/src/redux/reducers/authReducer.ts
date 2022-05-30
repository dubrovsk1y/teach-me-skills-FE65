import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  name?: string;
  email?: string;
  password?: string;
};

export type AuthReduserStateType = {
  authStatus: boolean;
  registerUser: RegisterUser;
};

const initialState: AuthReduserStateType = {
  authStatus: !!localStorage.getItem("authStatus"),
  registerUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state: any, action: PayloadAction<RegisterUser>) => {
      state.registerUser = action.payload;
    },
    setAuthStatus: (state: any, action: PayloadAction<boolean>) => {
      state.authStatus = action.payload;
    },
  },
});

export const { setAuthStatus, registerUser } = authSlice.actions;

export default authSlice.reducer;

export const AuthSelectors = {
  getAuthStatus: (state: any) => state.auth.authStatus,
  getRegisterUser: (state: any) => state.auth.registerUser,
};
