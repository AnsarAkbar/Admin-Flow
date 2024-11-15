import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Admin Validate",
  initialState: {
    collectUserInfo: {
      nextPage: false,
      collect: [],
    },
  },
  reducers: {
    handleUserData: (state, action) => {
      const userData = { ...action.payload };
      state.collectUserInfo.collect.push(userData);
    },
  },
});

export const { handleUserData } = slice.actions;
export default slice.reducer;