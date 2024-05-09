import { configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "./features/search-results/searchResultsSlice";
import currentCourseReducer from "./features/currentCourse/currentCourseSlice";
import userReducer from "./features/user/userSlice";
import userCoursesReducer from "./features/user-courses/userCoursesSlice";

const store = configureStore({
  reducer: {
    SearchResults: searchResultsReducer,
    currentCourse: currentCourseReducer,
    user: userReducer,
    userCourses: userCoursesReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
