import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Admin Validate",
  initialState: {
    collectUserInfo: {
      nextPage: false,
      // inputFields:{},
      collect: {},
    },
  },
  reducers: {
    handleUserData: (state, action) => {
      state.collectUserInfo.collect = { ...state.collectUserInfo?.collect, ...action.payload };
    },
  },
});

export const { handleUserData } = slice.actions;
export default slice.reducer;