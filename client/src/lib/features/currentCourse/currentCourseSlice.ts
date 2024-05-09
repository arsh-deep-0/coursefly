import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";
import { CourseType } from "@/components/types/CourseType";

const initialState = {
  loading: false,
  courseID: undefined,
  course: {},
  error: "",
};

const fetchcourse = createAsyncThunk<CourseType, string>(
  "currentCourse/getCourse",
  async (courseID: string) => {
    const response = await axios.get(`api/courses/getCourse/${courseID}`);
    console.log("data: ", response.data.data);
    return response.data
      .data; /* this will become action.payload for automatically generated pending , fulfilled and rejected action types 
                          but we have to add reducers as extra reducers as they are not created*/
  }
);

const currentCourseSlice = createSlice({
  name: "currentCourse",
  initialState,
  reducers: {
    setCurrentCourse: (state, action) => {
      state.courseID = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchcourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchcourse.fulfilled, (state, action) => {
      console.log("action", action);
      state.loading = false;
      state.course = action.payload;
      state.error = "";
    });
    builder.addCase(fetchcourse.rejected, (state, action) => {
      state.loading = false;
      state.course = [];
      state.error = action.error.message || "";
    });
  },
});

export default currentCourseSlice.reducer;
export { fetchcourse };
export const { setCurrentCourse } = currentCourseSlice.actions;
