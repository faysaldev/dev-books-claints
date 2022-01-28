import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  allUsers: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
    },
    addUser: (state, action) => {
      state.allUsers = action.payload;
    },
  }, // this is the readucer close
});

export const { loginUser, logoutUser, addUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectAllUSers = (state) => state.user.allUsers;

export default userSlice.reducer;
