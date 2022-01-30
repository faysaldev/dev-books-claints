import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../features/userSlice";
import { Avatar } from "@material-ui/core";
import MobileMenubar from "./AdminPage/MobileMenu";

function Header({ adminMobile }) {
  const [menu, setMenu] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const itsHome = history?.location.pathname == "/";

  const LogoutUser = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
  };

  return (
    <>
      <header className="px-4 py-6 sticky top-0 bg-white shadow-sm z-30">
        <div className="bg-white max-w-6xl mx-auto flex items-center justify-between">
          {/* header Left */}
          <div className="pr-4">
            <Link to="/">
              <h1 className="text-bold text-2xl sm:text-3xl font-semibold text-blue-400 cursor-pointer">
                DevBooks
              </h1>
            </Link>
          </div>

          {/* Header Right */}

          <div className="px-4 hidden md:block w-1/3">
            <ul className="flex justify-between items-center">
              {!itsHome && (
                <li>
                  <Link to="/">Home</Link>
                </li>
              )}
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/bookmark">Bookmark</Link>
              </li>
              <li>
                <Link to="/admin-panel">Admin</Link>
              </li>
              {userData ? (
                <Avatar
                  className="cursor-pointer"
                  onClick={LogoutUser}
                  src={userData?.photoURL}
                />
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>

          {/* menu icon */}

          <div
            className="px-3 py-4 cursor-pointer flex md:hidden"
            onClick={() => (menu ? setMenu(false) : setMenu(true))}
          >
            <MenuIcon />
          </div>
        </div>

        {/* moile menu */}
        {menu && (
          <div className="mobile_menu w-full md:hidden block">
            <ul>
              {!itsHome && (
                <li className="px-3 py-2 font-semibold border-b border-gray-200">
                  <Link to="/">Home</Link>
                </li>
              )}
              <li className="px-3 py-2 font-semibold border-b border-gray-200">
                <Link to="/orders">Orders</Link>
              </li>
              <li className="px-3 py-2 font-semibold border-b border-gray-200">
                <Link to="/bookmark">Bookmark</Link>
              </li>
              <li className="px-3 py-2 font-semibold border-b border-gray-200">
                <Link to="/admin-panel">Admin</Link>
              </li>
            </ul>

            <div className="flex items-center justify-center py-6">
              {userData ? (
                <Avatar
                  className="cursor-pointer"
                  onClick={LogoutUser}
                  src={userData?.photoURL}
                />
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="text-center px-6 bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer text-white w-2/3
                        py-3 rounded-md shadow-sm font-semibold uppercase"
                  >
                    Login
                  </Link>
                </li>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
