import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "console";
import { CourseType } from "@/components/types/CourseType";

const initialState = {
  loading: false,
  courseID: "",
  course: {},
  likes: 0,
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
const increaseCourseLikes = createAsyncThunk<CourseType, string>(
  "currentCourse/getCourse",
  async (courseID: string) => {
    const response = await axios.get(`api/courses/increaseLikes/${courseID}`);
    console.log("data: ", response.data.data);
    return response.data.data;
  }
);
const decreaseCourseLikes = createAsyncThunk<CourseType, string>(
  "currentCourse/getCourse",
  async (courseID: string) => {
    const response = await axios.get(`api/courses/decreaseLikes/${courseID}`);
    console.log("data: ", response.data.data);
    return response.data.data;
  }
);

const currentCourseSlice = createSlice({
  name: "currentCourse",
  initialState,
  reducers: {
    setCurrentCourse: (state, action) => {
      console.log('set id:',action.payload.id)
      state.courseID = action.payload.id;
    },
    increaseLikes: (state) => {
      state.likes += 1;
    },
    decreaseLikes: (state) => {
      state.likes -= 1;
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
      state.likes = action.payload.likes;
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
export { fetchcourse,increaseCourseLikes,decreaseCourseLikes };
export const { setCurrentCourse, increaseLikes, decreaseLikes } =
  currentCourseSlice.actions;
