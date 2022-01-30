import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function OrderLIstCard({ id, image, username, payment, time, type, total }) {
  const [action, setAction] = useState(false);

  return (
    <li className="flex items-center justify-between px-4 py-3 border shadow-md hover:shadow-xl cursor-pointer rounded-md bg-gray-50 hover:bg-white transition-all ease-in-out hover:font-bold text-xs font-semibold md:text-md transform hover:translate-x-4 hover:-translate-y-3">
      <p className=" hidden sm:inline-flex">{id}</p>
      {/* user info */}
      <div className="flex items-center space-x-2">
        <Avatar src={image} className="hover:shadow-md" />
        <p className="hidden md:flex">{username}</p>
      </div>
      {/* payment */}
      <p className=" hidden sm:inline-flex">{payment}</p>
      {/* remaining time */}
      <div className=" hidden sm:inline-flex items-center space-x-1">
        <AvTimerIcon />
        <span>{time}</span>
      </div>
      {/* type */}
      <p>{type ? "Sended" : "Collection"}</p>
      {/* status */}
      <button
        className={`px-3 py-2 rounded-md ${
          type ? "bg-red-50 text-red-300 border" : "bg-red-400 text-white"
        }`}
      >
        {type ? "Delevery" : "Peanding"}
      </button>
      <p className="font-bold">{total}</p>

      {/* action */}
      <div className="relative">
        <MoreVertIcon
          onClick={() => (action ? setAction(false) : setAction(true))}
        />
        {action && (
          <div className="absolute right-2 top-6 border w-40 bg-white">
            <p
              className="px-2 py-1 border-b text-gray-500 font-semibold text-xs md:text-md shadow hover:shadow-lg"
              onClick={() => setAction(false)}
            >
              Cancel
            </p>
            {!type && (
              <p className="px-2 py-1 border-b text-red-500 font-semibold text-xs md:text-md shadow hover:shadow-lg">
                Cancel Product
              </p>
            )}
            <p className="px-2 py-1 border-b text-gray-500 font-semibold text-xs md:text-md shadow hover:shadow-lg">
              Message
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

export default OrderLIstCard;
