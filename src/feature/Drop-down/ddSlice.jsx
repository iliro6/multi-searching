import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";
const initialState = {
  searchedResult: "",
  defaultArray: data,
  finalItems: [],
};

const ddSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    getInputValue: (state, action) => {
      state.searchedResult = action.payload;
    },
    searchForResult: (state, action) => {
      if (state.searchedResult === "") {
        state.defaultArray = data;
      }
      state.defaultArray = state.defaultArray.filter((item) => {
        return item
          .toString()
          .toLowerCase()
          .startsWith(state.searchedResult.toLowerCase());
      });
      
    },
    addItem: (state, action) => {
     if(state.finalItems.includes(action.payload)){
      null
     }
     else if (state.finalItems.length >=8){
      null
     }
     else{
      state.finalItems.push(action.payload);
     }
    },
  },
});

export default ddSlice.reducer;
export const { getInputValue, searchForResult, addItem } = ddSlice.actions;
