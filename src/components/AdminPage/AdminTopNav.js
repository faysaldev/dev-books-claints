import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../../features/userSlice";
import { useHistory } from "react-router-dom";

function AdminTopNav({ dark }) {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="flex items-center justify-between px-4 py-6">
      {/* top nav left */}
      <div className=" hidden sm:flex items-center border px-2 py-3 rounded-md focus-within:ring-pink-600 focus-within:ring-1">
        <SearchIcon className="text-gray-400 sm:mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent"
        />
      </div>

      {/* top nav right */}
      <div
        className={`flex items-center justify-center sm:justify-between space-x-12 md:space-x-6 ${
          dark && "text-white"
        }`}
      >
        <p className="hidden md:inline-flex font-semibold md:text-md">
          Open For Order
        </p>
        <FiberManualRecordIcon className="text-green-500 cursor-pointer" />
        <div className="relative cursor-pointer">
          <NotificationsNoneIcon className="text-gray-500" />
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs text-center">
            +3
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Avatar
            onClick={() => {
              dispatch(logoutUser());
              history.push("/");
            }}
            src={userData?.photoURL}
            className="shadow transform hover:scale-150
                     transition-all cursor-pointer"
          />
          <p className="text-md hidden md:flex text-gray-600">
            {userData ? userData?.name : "Faysal Mridha"}
          </p>
          <KeyboardArrowDownIcon className="text-sm text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default AdminTopNav;
