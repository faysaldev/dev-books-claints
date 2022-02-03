import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: [],
  bookmark: [],
  singleProduct: null,
  cartProduct: [],
  editeProduct: null,
  editeUser: null,
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
    addAProduct: (state, action) => {
      state.allProduct = [...state.allProduct, action.payload];
    },

    removeAProduct: (state, action) => {
      const findIndex = state.allProduct.findIndex(
        (item) => item._id === action.payload._id
      );

      const newAllProduct = [...state.allProduct];
      if (findIndex >= 0) {
        newAllProduct.splice(findIndex, 1);
      }

      state.allProduct = newAllProduct;
    },

    removeAFromCart: (state, action) => {
      const findIndex = state.cartProduct.findIndex(
        (item) => item._id === action.payload._id
      );
      let newCart = [...state.cartProduct];
      if (findIndex >= 0) {
        if (newCart[findIndex].quantity > 1) {
          newCart[findIndex].quantity -= 1;
        } else {
          newCart.splice(findIndex, 1);
        }
      }
      state.cartProduct = newCart;
    },
    prevSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    allCart: (state, action) => {
      // state.cartProduct=[...state.cartProduct,action.payload];
      const findIndex = state.cartProduct.findIndex(
        (item) => item._id === action.payload._id
      );
      let newCart = [...state.cartProduct];
      if (findIndex >= 0) {
        newCart[findIndex].quantity += 1;
      } else {
        newCart = [...state.cartProduct, action.payload];
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cartProduct = newCart;
    },
    deletSingleProduct: (state, action) => {
      state.singleProduct = null;
    },
    editeSingleProduct: (state, action) => {
      state.editeProduct = action.payload;
    },
    editeProductDelete: (state, action) => {
      state.editeProduct = null;
    },
    editeUser: (state, action) => {
      state.editeUser = action.payload;
    },
    editeUserDelete: (state, action) => {
      state.editeUser = null;
    },
    // for the bookmark action
    addToBookMark: (state, action) => {
      state.bookmark = [...state.bookmark, action.payload];
    },
    removeToBookMark: (state, action) => {
      const findIndex = state.bookmark.findIndex(
        (bookmark) => bookmark._id === action.payload._id
      );
      let newBookmark = [...state.bookmark];
      if (findIndex >= 0) {
        newBookmark.splice(findIndex, 1);
      }
      state.bookmark = newBookmark;
    },
  }, // this is the readucer close
});

export const {
  addAllProduct,
  addAProduct,
  removeAProduct,
  prevSingleProduct,
  allCart,
  deleteSingleProduct,
  editeSingleProduct,
  editeProductDelete,
  editeUser,
  editeUserDelete,
  removeAFromCart,
  addToBookMark,
  removeToBookMark,
} = appSlice.actions;
export const selectAll = (state) => state.app.allProduct;
export const selectSingle = (state) => state.app.singleProduct;
export const selectCartAll = (state) => state.app.cartProduct;
export const selectEditeProduct = (state) => state.app.editeProduct;
export const selectEditeUser = (state) => state.app.editeUser;
export const selectAllBookmark = (state) => state.app.bookmark;
export const selectTotal = (state) =>
  state.app.cartProduct.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

export default appSlice.reducer;
