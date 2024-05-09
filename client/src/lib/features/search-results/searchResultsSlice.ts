import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";

const initialState = {
  loading: false,
  searchTerm: "",
  sortBy:"NONE",
  courses: [],
  error: "",
};

const fetchcourses = createAsyncThunk("searchResults/allCourses", async () => {
  const response = await axios.get("/api/courses/getAllCourses");
  console.log("data: ", response.data.data);
  return response.data
    .data; /* this will become action.payload for automatically generated pending , fulfilled and rejected action types 
                          but we have to add reducers as extra reducers as they are not created*/
});

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      console.log(state.searchTerm);
    },
    setSortBy:(state,action)=>{
      state.sortBy = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchcourses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchcourses.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
      state.error = "";
    });
    builder.addCase(fetchcourses.rejected, (state, action) => {
      state.loading = false;
      state.courses = [];
      state.error = action.error.message || "";
    });
  },
});

export default searchResultsSlice.reducer;
export { fetchcourses };
export const {setSearchTerm,setSortBy}=searchResultsSlice.actions;