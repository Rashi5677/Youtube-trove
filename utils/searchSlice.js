import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
    //   state = Object.assign(state, action.payload);
    //merge payload and state
    return { ...state, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
/**
 * cache
 * time complexity to search in array=o(n)
 * time complexity to search in object=o(1)
 * array.indexOf() to find element in array o(n)
 * [i,ip,iph,iphone]
 * {
 * i,
 * ip
 * iph
 * iphone
 * }
 * new Map() also to search in object
 * 
 * 
 */
