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

    addANewUser: (state, action) => {
      state.allUsers = [...state.allUsers, action.payload];
    },
    removeAUser: (state, action) => {
      const findIndex = state.allUsers.findIndex(
        (user) => user._id === action.payload._id
      );
      const newUsers = [...state.allUsers];
      if (findIndex >= 0) {
        newUsers.splice(findIndex, 1);
      }
      state.allUsers = newUsers;
    },
  }, // this is the readucer close
});

export const { loginUser, logoutUser, addUser, addANewUser, removeAUser } =
  userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectAllUSers = (state) => state.user.allUsers;

export default userSlice.reducer;
