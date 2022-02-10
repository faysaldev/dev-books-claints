import React from "react";
import { useDispatch } from "react-redux";
import { removeToBookMark } from "../../features/appSlice";
import Bounce from "react-reveal/Bounce";
import { toast } from "react-toastify";
import axios from "axios";

function BookMarkCard({ _id, image, title, category, price, details }) {
  const dispatch = useDispatch();
  const removeToBookmark = () => {
    axios
      .delete(
        `https://murmuring-woodland-93721.herokuapp.com/dev/cart/delete/${_id}`
      )
      .then(function (response) {
        dispatch(removeToBookMark({ _id }));
        toast.info("Remove From Bookmark done 😎!", {
          icon: "🛒",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Bounce right>
      <div className="bg-white border shadow-lg group-hover:shadow-xl group">
        {/* image top */}
        <div
          className="mx-auto overflow-hidden relative"
          style={{ width: "100%", maxHeight: "500px" }}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-contain rounded-md"
          />

          {/* div cancel button */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <button
              className="bg-white px-5 py-2 rounded-md text-base font-semibold shadow-lg"
              onClick={removeToBookmark}
            >
              Cancel
            </button>
          </div>
        </div>
        {/* bottom content */}
        <div className="px-5 py-4 space-y-3">
          <span className="text-xs px-3 py-1 tracking-widest bg-gray-100 rounded-lg">
            {category}
          </span>
          <h2 className="text-xl tracking-widest font-semibold pb-4">
            {title}
          </h2>
          <h4 className="text-base font-semibold tracking-widest">${price}</h4>
        </div>
      </div>
    </Bounce>
  );
}

export default BookMarkCard;
