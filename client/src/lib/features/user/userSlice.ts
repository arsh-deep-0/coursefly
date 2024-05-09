import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Arsh Deep",
  id: "663c97d3e6c245d9fed3a472",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
