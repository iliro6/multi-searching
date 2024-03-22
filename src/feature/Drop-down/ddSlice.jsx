import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";
const initialState = {
  searchedResult: "",
  defaultArray: data,
};

const ddSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    getInputValue: (state, action) => {
      state.searchedResult = action.payload;
    },
    searchForResult: (state, action) => {
      if(state.searchedResult===""){
        state.defaultArray = data;
      }
      state.defaultArray = state.defaultArray.filter((item) => {
        return item
          .toString()
          .toLowerCase()
          .startsWith(state.searchedResult.toLowerCase());
      });
      console.log(data);
    },
  },
});

export default ddSlice.reducer;
export const { getInputValue, searchForResult } = ddSlice.actions;
