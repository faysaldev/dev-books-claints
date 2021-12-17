import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProduct:[],
  bookmark:[],
  singleProduct:null,
  cartProduct:[],
  editeProduct:null,
  editeUser:null,
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   addAllProduct:(state,action)=>{
     state.allProduct=action.payload;
   },
   addAProduct:(state,action)=>{
    state.allProduct=[...state.allProduct ,action.payload];
   },
   removeAFromCart:(state,action)=>{
    const findIndex = state.cartProduct.findIndex((item)=> item.id===action.payload.id)
    let newCart =[...state.cartProduct];
    if(findIndex >=0){
      newCart[findIndex].quantity +=1;
    }else{
      newCart=[...state.cartProduct,action.payload];
    }

    localStorage.setItem('cart',JSON.stringify(newCart));
    state.cartProduct = newCart;
    
   },
   prevSingleProduct:(state,action)=>{
    state.singleProduct=action.payload;
  },
  allCart:(state,action)=>{
    state.cartProduct=[...state.cartProduct,action.payload];
  },
  deletSingleProduct:(state,action)=>{
    state.singleProduct=null;
  },
  editeSingleProduct:(state,action)=>{
    state.editeProduct=action.payload;
  },
  editeProductDelete:(state,action)=>{
    state.editeProduct=null;
  },
  editeUser:(state,action)=>{
    state.editeUser=action.payload;
  },
  editeUserDelete:(state,action)=>{
    state.editeUser=null;
  },

  }, // this is the readucer close 
});

export const { addAllProduct,addAProduct,prevSingleProduct,allCart,deleteSingleProduct,editeSingleProduct,editeProductDelete,editeUser,editeUserDelete} = appSlice.actions;
export const selectAll=(state)=> state.app.allProduct;
export const selectSingle=(state)=> state.app.singleProduct;
export const selectCartAll=(state)=> state.app.cartProduct;
export const selectEditeProduct=(state)=> state.app.editeProduct;
export const selectEditeUser=(state)=> state.app.editeUser;
export const selectTotal=(state)=> state.app.cartProduct.reduce((total,product)=>total + product.price,0);




export default appSlice.reducer;
