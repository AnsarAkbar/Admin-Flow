import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Admin Validate",
  initialState: {
    collectUserInfo: {
      nextPage: false,
      collect: {},
    },
    collectError: {
      collect: {},
    },
  },
  reducers: {
    
    handleUserData: (state, action) => {
      console.log(action.payload)
      state.collectUserInfo.collect = { ...state.collectUserInfo?.collect, ...action.payload };
      if (action.payload===true||action.payload===false) {
        state.collectUserInfo.nextPage= action.payload
      }
    },
    errorHandle:(state,action)=>{
      state.collectError.collect = { ...state.collectError?.collect, ...action.payload };
    }
  },
});

export const { handleUserData,errorHandle } = slice.actions;
export default slice.reducer;