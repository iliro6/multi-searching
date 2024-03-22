import { createSlice } from "@reduxjs/toolkit";
// import { data } from "../../data";
const initialState = {
  searchResult: "",
  resultArray: [],
  defaultArray:[],
};

const ddSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {},
});


export default ddSlice.reducer;
