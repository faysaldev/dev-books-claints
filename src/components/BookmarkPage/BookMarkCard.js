import React from "react";
import { useDispatch } from "react-redux";
import { removeToBookMark } from "../../features/appSlice";

function BookMarkCard({ _id, image, title, category, price, details }) {
  const dispatch = useDispatch();
  const removeToBookmark = () => {
    dispatch(removeToBookMark({ _id }));
  };
  return (
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
        <h2 className="text-xl tracking-widest font-semibold pb-4">{title}</h2>
        <h4 className="text-base font-semibold tracking-widest">${price}</h4>
      </div>
    </div>
  );
}

export default BookMarkCard;