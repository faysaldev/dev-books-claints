import React from "react";
import AdminSidebarCard from "./AdminSidebarCard";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Link, useHistory } from "react-router-dom";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../../features/userSlice";
import { useEffect } from "react";

function AdminSidebar({ dark, setDark }) {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const userRole = userData?.role == "admin";
  const history = useHistory();
  useEffect(() => {
    if (!userData) {
      return history.replace("/");
    }
  }, []);

  return (
    <div className="hidden md:flex md:flex-col">
      <div className="pt-4 px-3">
        <Link to="/">
          <h1 className="text-bold text-xl sm:text-2xl font-semibold text-blue-400 cursor-pointer pl-2">
            DevBooks
          </h1>
        </Link>
      </div>

      {/* card Menu */}
      <div className="space-y-6 px-4 py-8 pt-20">
        {userRole && (
          <>
            <AdminSidebarCard
              url="/admin-panel"
              Icon={AllInboxIcon}
              text="Live Orders"
              active
            />
            <AdminSidebarCard
              url="/admin-all-product"
              Icon={Inventory2Icon}
              text="Products"
            />
          </>
        )}
        <AdminSidebarCard url="/admin-add-page" Icon={AddBoxIcon} text="Add" />
        {userRole && (
          <AdminSidebarCard
            url="/admin-user-page"
            Icon={GroupAddIcon}
            text="User"
          />
        )}
        {/* this is for the logout */}
        <div
          className={`flex items-center px-4 py-3 rounded-md sm:space-x-3 text-gray-500 cursor-pointer hover:bg-blue-200 hover:text-blue-600 transition-all`}
        >
          <LogoutIcon />
          <p
            className="font-semibold hidden md:flex"
            onClick={() => {
              dispatch(logoutUser());
              localStorage.removeItem("user");
              history.replace("/");
            }}
          >
            Logout
          </p>
        </div>
        <AdminSidebarCard url="/" Icon={HomeWorkIcon} text="Back to home" />
      </div>

      {/* busy mode */}
      <div
        className={`flex items-center px-6 py-10 justify-evenly text-md ${
          dark && "text-white"
        }`}
      >
        <p className=" font-semibold hidden sm:flex">Busy Mode</p>
        <div
          className="text-2xl cursor-pointer"
          onClick={() => (dark ? setDark(false) : setDark(true))}
        >
          {dark ? <ToggleOnIcon /> : <ToggleOffIcon />}
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
