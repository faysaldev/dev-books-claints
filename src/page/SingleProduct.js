import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import {
  deleteSingleProduct,
  selectSingle,
  allCart,
  addToBookMark,
  selectAllBookmark,
  selectCartAll,
} from "../features/appSlice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import swal from "sweetalert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SemilarProduct from "../components/SingleProductPage/SemilarProduct";

function SingleProduct() {
  const dispatch = useDispatch();
  const selectSingleData = useSelector(selectSingle);
  const history = useHistory();
  const [countity, setCountity] = useState(0);
  // !user data state
  const userData = useSelector(selectUser);
  // const [isBookmark, setItsBookmark] = useState(false);

  // TODO: select to the cart and bookmark is true or not
  const cartAll = useSelector(selectCartAll);
  const bookmarkAll = useSelector(selectAllBookmark);

  console.log(cartAll);
  const alreadyCart = cartAll.find(
    (cart) => cart._id === selectSingleData?._id
  );
  const isBookmark = bookmarkAll.find(
    (bookmark) => bookmark._id === selectSingleData?._id
  );

  console.log(alreadyCart);
  console.log(isBookmark);

  const colorPalet = ["yellow", "green", "gray", "red", "blue"];

  const [colours, setColours] = useState("text-gray-300");

  const addToCart = () => {
    if (selectSingleData) {
      const { _id, image, price, title, details, category } = selectSingleData;
      dispatch(
        allCart({
          _id,
          image,
          price: Number(price),
          title,
          details,
          category,
          quantity: 1,
        })
      );
      swal({
        title: "Added!",
        text: "This Product Added to the Card 😎!",
        icon: "success",
        button: "Ok!",
      });

      history.push("/orders");
    }
  };

  const BookmarkAdd = () => {
    if (userData) {
      const { _id, image, price, title, details, category } = selectSingleData;

      dispatch(
        addToBookMark({
          _id,
          image,
          title,
          category,
          price,
          details,
        })
      );
      swal({
        title: "BookMark Added!",
        text: "This Product Added to the BookMark List 😎!",
        icon: "success",
        button: "Ok!",
      });
      history.push("/bookmark");
    } else {
      history.push("/login");
    }
  };

  useEffect(() => {
    if (!selectSingleData) {
      return history.replace("/");
    }

    // return ()=>{ dispatch(deleteSingleProduct()) }
  }, []);

  return (
    <div>
      <Header />
      {/* Single Product Page main */}
      <main className="py-10 grid grid-cols-1 md:grid-cols-2 gap-y-8">
        {/* left */}
        <div className="pr-10 pl-10 border-r">
          {/* left top */}
          <div style={{ maxWidth: "400px" }} className="w-full mx-auto">
            <img
              src={
                selectSingleData
                  ? selectSingleData?.image
                  : "/engineers-day-concept_23-2148628083.jpg"
              }
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Right */}
        <div className="px-10">
          {/* top information */}
          <div className={`flex items-center justify-between pb-6 ${colours}`}>
            <h1 className="text-2xl font-semibold">
              {selectSingleData?.title}
            </h1>
            <FavoriteBorderIcon className="w-40 p-1 bg-gray-50 rounded-full cursor-pointer" />
          </div>
          {/* decription */}
          <p className="text-xs pb-4 sm:text-md pr-6">
            {selectSingleData?.details}
          </p>
          {/* Price */}
          <h1
            className={`${"font-semibold text-xl sm:text-2xl pb-4"} ${colours}`}
          >
            $ {selectSingleData?.price}
          </h1>
          <p className="text-sm font-semibold py-3 pt-0 text-gray-800 cursor-pointer">
            {selectSingleData?.category}
          </p>
          {/* revies */}
          <div className="flex items-center justify-between pb-4">
            {/* review icon */}
            <div className={`${colours} flex items-center md:space-x-2`}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
            </div>
            {/* review details */}
            <p className="text-gray-500">441 reviews</p>
          </div>
          {/* color palet */}
          <div className="pb-4">
            <h3 className={`${colours} font-semibold text-md`}>Colour</h3>
            {/* single color */}
            <div className="md:space-x-3 pt-10 pb-6">
              {colorPalet?.map((color) => (
                <span
                  onClick={() => setColours("text-" + color + "-400")}
                  className={`${
                    "text-" + color + "-400 bg-" + color + "-50"
                  } cursor-pointer p-4 rounded-full`}
                >
                  <FiberManualRecordIcon />
                </span>
              ))}
            </div>
          </div>

          {/* button */}
          <div className="md:space-x-4 pb-4">
            <button
              onClick={addToCart}
              className="px-10 border text-center text-md font-semibold rounded-md bg-black text-white py-3 hover:bg-red-300 hover:text-black focus:bg-green-500"
            >
              {alreadyCart ? (
                "Added"
              ) : (
                <>
                  <AddShoppingCartIcon />
                  Add to Cart
                </>
              )}
            </button>
            <button
              onClick={BookmarkAdd}
              className="px-2 border-2 text-center text-md font-semibold rounded-md bg-transparent text-black py-3"
            >
              {isBookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </button>
          </div>

          {/* Home Delever charge */}
          <p className="font-semibold text-md">Home Delivery - $ 10</p>
        </div>
      </main>
      <SemilarProduct
        _id={selectSingleData?._id}
        category={selectSingleData?.category}
      />
      <Fotter />
    </div>
  );
}

export default SingleProduct;
