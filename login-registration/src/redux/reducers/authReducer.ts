import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  username: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type ActivateUser = {
  uuid: string | undefined;
  token: string | undefined;
  callback: () => void;
};

export type AuthState = {
  authStatus: boolean;
  tempMail: string;
  isRegisterUserLoading: boolean;
  isLoginUserLoading: boolean;
  isActivateUserLoading: boolean;
};

const initialState: AuthState = {
  authStatus: !!localStorage.getItem("jwtAccessToken") || !!localStorage.getItem("jwtRefreshToken"),
  tempMail: "",
  isRegisterUserLoading: false,
  isLoginUserLoading: false,
  isActivateUserLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state: any, action: PayloadAction<LoginUser>) => {},
    activateUser: (state: any, action: PayloadAction<ActivateUser>) => {},
    registerUser: (state: any, action: PayloadAction<RegisterUser>) => {},
    logout: (state: any, action: any) => {},
    setAuthStatus: (state: any, action: PayloadAction<boolean>) => {
      state.authStatus = action.payload;
    },
    setTempMail: (state: any, action: PayloadAction<string>) => {
      state.tempMail = action.payload;
    },
    setRegisterUserLoading: (state: any, action: PayloadAction<boolean>) => {
      state.isRegisterUserLoading = action.payload;
    },
    setLoginUserLoading: (state: any, action: PayloadAction<boolean>) => {
      state.isLoginUserLoading = action.payload;
    },
    setActivateUserLoading: (state: any, action: PayloadAction<boolean>) => {
      state.isActivateUserLoading = action.payload;
    },
  },
});

export const {
  setAuthStatus,
  setTempMail,
  setRegisterUserLoading,
  setLoginUserLoading,
  setActivateUserLoading,
  registerUser,
  activateUser,
  loginUser,
  logout,
} = authSlice.actions;

export default authSlice.reducer;

export const AuthSelectors = {
  getAuthStatus: (state: any) => state.auth.authStatus,
  getTempMail: (state: any) => state.auth.tempMail,
  getRegisterUserLoading: (state: any) => state.auth.isRegisterUserLoading,
  getLoginUserLoading: (state: any) => state.auth.isLoginUserLoading,
  getActivateUserLoading: (state: any) => state.auth.isActivateUserLoading,
};
