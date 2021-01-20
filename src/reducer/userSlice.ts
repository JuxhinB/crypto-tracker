import {createSlice} from "@reduxjs/toolkit";

export interface UserSliceState {
  isValid: boolean;
  profile: UserProfile;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
}

export const userSlice = createSlice<UserSliceState, any, "user">({
  name: "user",
  initialState: {
    isValid: false,
    profile: {
      firstName: "",
      lastName: "",
    },
  },
  reducers: {},
});

export const {} = userSlice.actions;

export const selectUserProfile = (state: any) => state.user.profile;
export const selectIsValidUser = (state: any) => state.user.isValid;

export default userSlice.reducer;
