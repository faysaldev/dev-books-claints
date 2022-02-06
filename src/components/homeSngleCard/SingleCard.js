import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevSingleProduct, selectSingle } from "../../features/appSlice";
import { useHistory } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import Zoom from "react-reveal/Zoom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function SingleCard({
  _id,
  image,
  price,
  title,
  details,
  category,
  username,
  userImg,
  createdAt,
  updatedAt,
}) {
  const dispatch = useDispatch();

  const singleProductData = useSelector(selectSingle);
  const history = useHistory();
  const userData = useSelector(selectUser);

  const buyNow = async () => {
    if (userData) {
      // make data to a array
      const checkoutData = [
        {
          _id,
          image,
          price,
          title,
          details,
          category,
          username,
          userImg,
          createdAt,
          updatedAt,
          quantity: 1,
        },
      ];

      const stripe = await loadStripe(
        "pk_test_51KQ8r2BwFGSf6ilgNWYyT4XeYLkwvyIgsnMFdSa5aTAl1uCY00PvCl4BvlD9rU3vHqTUcWhMjSnTnKo81bLv6ltg00GOoo8vRr"
      );

      const checkoutSession = axios.post(
        "https://murmuring-woodland-93721.herokuapp.com/create-checkout-session",
        {
          items: checkoutData,
          email: userData.email,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const result = await stripe.redirectToCheckout({
        sessionId: (await checkoutSession).data.id,
      });

      if (result.error) alert(result.error.message);
      // alert("yo");
    } else {
      history.push("/login");
    }
  };

  const productClick = () => {
    dispatch(
      prevSingleProduct({
        _id,
        image,
        price,
        title,
        details,
        category,
        username,
        userImg,
        createdAt,
        updatedAt,
      })
    );
    history.push(`/single/${_id}`);
  };

  return (
    <Zoom>
      <div
        key={_id}
        className="shadow-md hover:shadow-xl cursor-pointer px-4 py-6 w-full"
      >
        <div
          className="bg-gray-200 rounded-md mx-auto"
          onClick={productClick}
          style={{ maxWidth: "250px" }}
        >
          <img
            src={image ? image : "/engineers-day-concept_23-2148628083.jpg"}
            alt={image}
            style={{ maxHeight: "330px" }}
            className="px-2 py-2 object-contain w-full h-full rounded-md"
          />
        </div>
        {/* card top */}

        <div
          onClick={productClick}
          className="text-base md:text-2xl font-semibold py-4"
        >
          <h2>{title}</h2>
        </div>

        <div className="flex items-center justify-between px-3 py-3">
          <h3 className="text-4xl font-bold text-blue-500 hidden lg:flex">
            ${price}
          </h3>
          <button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition"
            onClick={buyNow}
          >
            Buy Now
          </button>
        </div>
        {/* card bottom */}
      </div>
    </Zoom>
  );
}

export default SingleCard;
