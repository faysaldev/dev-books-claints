import React from "react";
import { MoreHorizOutlined } from "@material-ui/icons";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Tooltip } from "@mui/material";
import {
  deleteSingleProduct,
  selectSingle,
  allCart,
  removeAFromCart,
} from "../../features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

function OrderCard({
  _id,
  image,
  title,
  category,
  date,
  price,
  details,
  quantity,
}) {
  // const singleProductData = useSelector(selectSingle);
  const dispatch = useDispatch();
  const AddTocart = () => {
    dispatch(
      allCart({ _id, image, price: Number(price), title, details, category })
    );
    swal({
      title: "Added!",
      text: "This Product Added to the Card 😎!",
      icon: "success",
      button: "Ok!",
    });
  };
  const removeFormCart = () => {
    console.log(_id);
    if (quantity > 1) {
      dispatch(removeAFromCart({ _id }));
    } else {
      swal({
        title: "😗",
        text: "This Product Minimum Quantity required is 1 😎!",
        button: "Ok!",
      });
    }
  };
  return (
    <div className="flex items-center space-x-4 border shadow-md rounded-md px-4 py-3">
      <div className="mx-6  w-24">
        <img src={image} alt="" className="w-full object-contain rounded-md" />
      </div>
      {/* right content */}
      <div className="flex-grow flex-col flex space-y-8">
        <a href="https://www.facebook.com/faysaldev" className="text-base">
          {title}
        </a>
        {/* another div */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-base">${price}</p>
          {/* another one */}
          <div className="flex items-center space-x-4">
            {/* quantify */}

            <div className="flex items-center space-x-3">
              <button
                onClick={removeFormCart}
                className="px-3 text-center font-bold py-1 bg-gray-200 rounded-md text-black"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={AddTocart}
                className="px-3 text-center font-bold py-1 bg-gray-200 rounded-md text-black"
              >
                +
              </button>
            </div>
            {/* remove from card */}
            <div
              className="text-white bg-red-600 px-2 rounded-md shadow cursor-pointer py-1"
              onClick={() => dispatch(removeAFromCart({ _id }))}
            >
              <Tooltip title="Remove from Cart" arrow>
                <RemoveShoppingCartIcon />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;

// <div className="flex items-center cursor-pointer hover:shadow-md shadow border border-gray-200 p-4 relative">
//   <div className="rounded-md w-28">
//     <img src={image} alt="" className="w-full object-fill" />
//   </div>

//   {/* Icon remove and outher */}
//   <div className="absolute top-0 right-0 px-4 py-3">
//     <MoreHorizOutlined />
//   </div>

//   <div className="pl-10">
//     <h3 className="text-xl font-semibold pb-3">{title}</h3>
//     <p className="text-md text-gray-400">{category}</p>
//     <h4 className="text-md text-gray-400">Tue Jun 15 2021</h4>
//     <span className="text-md text-gray-400">$ {price}</span>
//   </div>
// </div>
