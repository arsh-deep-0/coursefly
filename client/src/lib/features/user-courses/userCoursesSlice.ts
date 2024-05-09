import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";

const initialState = {
  loading: false,
  courses: [],
  condition: "ALL",
  error: "",
};

const fetchcourses = createAsyncThunk(
  "userCourses/allCourses",
  async (userID: string) => {
    const response = await axios.get(
      `api/subscriptions/getAllSubscriptions/${userID}`
    );
    console.log("data: ", response.data.data);
    return response.data
      .data; /* this will become action.payload for automatically generated pending , fulfilled and rejected action types 
                          but we have to add reducers as extra reducers as they are not created*/
  }
);

const userCoursesSlice = createSlice({
  name: "userCourses",
  initialState,
  reducers: {
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
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

export default userCoursesSlice.reducer;
export { fetchcourses };
export const { setCondition } = userCoursesSlice.actions;
