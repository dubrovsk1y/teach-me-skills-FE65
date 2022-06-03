import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
  // callback: () => void;
};

export type AuthReduserStateType = {
  authStatus: boolean;
  tempMail: string;
};

const initialState: AuthReduserStateType = {
  authStatus: !!localStorage.getItem("authStatus"),
  tempMail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userActivate: (state: any, action: any) => {},
    registerUser: (state: any, action: PayloadAction<RegisterUser>) => {},
    setAuthStatus: (state: any, action: PayloadAction<boolean>) => {
      state.authStatus = action.payload;
    },
    setTempMail: (state: any, action) => {
      state.tempMail = action.payload;
    },
  },
});

export const { setAuthStatus, registerUser, setTempMail, userActivate } = authSlice.actions;

export default authSlice.reducer;

export const AuthSelectors = {
  getAuthStatus: (state: any) => state.auth.authStatus,
  getRegisterUser: (state: any) => state.auth.registerUser,
  getTempMail: (state: any) => state.auth.tempMail,
};
