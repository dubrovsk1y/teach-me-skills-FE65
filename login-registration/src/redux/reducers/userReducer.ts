import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  userInfo: {
    username: string;
    email: string;
  };
};

const initialState: UserState = {
  userInfo: {
    username: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state: any, action: any) => {
      state.userInfo = action.payload;
    },
    loadUserInfoData: (state: any, action: any) => {},
  },
});

export const { setUserInfo, loadUserInfoData } = userSlice.actions;

export default userSlice.reducer;

export const UserSelectors = {
  getUserInfo: (state: any) => state.user.userInfo,
};
