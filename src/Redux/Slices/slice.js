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
    //   console.log(action.payload);
      state.collectInfo = action.payload;
    },
  },
});

export const { handleUserData } = slice.actions;

// Export the reducer to be used in the store
export default slice.reducer;
