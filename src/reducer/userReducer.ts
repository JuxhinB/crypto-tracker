import {createSlice} from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {},
});

export const {} = userReducer.actions;

export default userReducer.reducer;
