import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, selectUser } from "../../features/userSlice";

function MobileMenubar() {
  const [isClick, setIsClick] = useState(true);

  const menuButton = () => {
    setIsClick(false);
  };

  const crossButton = () => {
    setIsClick(true);
  };

  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  return (
    <>
      {/* <!-- mobile menubar --> */}
      <div className="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
        <div
          onClick={menuButton}
          className="block text-center text-gray-700 cursor-pointer hover:text-primary transition relative"
        >
          <div className="text-2xl" id="menuBar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 mx-auto w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="text-xs leading-3">Menu</div>
        </div>
        <Link
          to="/"
          className="block cursor-pointer text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 mx-auto w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div className="text-xs leading-3">Home</div>
        </Link>
        <Link
          to="/orders"
          className="block cursor-pointer text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 mx-auto w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs leading-3">Orders</div>
        </Link>
        <div
          onClick={() => dispatch(logoutUser())}
          className="text-center cursor-pointer text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
          <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            3
          </span>
          <div className="text-xs leading-3">Logout</div>
        </div>
      </div>
      {/* <!-- mobile menu end --> */}

      {userData && (
        // {/* <!-- mobile sidebar menu --> */}
        <div
          className={`fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow    ${
            isClick ? "hidden" : " "
          }`}
          id="mobileMenu"
        >
          <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow animationSidebar">
            <div
              onClick={crossButton}
              id="closeMenu"
              className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            {/* <!-- navlink --> */}
            <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">
              {" "}
              <Link to="/">
                <h1 className="text-bold text-2xl sm:text-3xl font-semibold text-blue-400 cursor-pointer">
                  DevBooks
                </h1>
              </Link>
            </h3>
            <div className="">
              <Link
                to="/admin-panel"
                className="block px-4 cursor-pointer py-2 font-medium transition hover:bg-gray-100"
              >
                Admin Home
              </Link>
              <Link
                to="/admin-add-page"
                className="block px-4 cursor-pointer py-2 font-medium transition hover:bg-gray-100"
              >
                Add
              </Link>
              <Link
                to="/admin-all-product"
                className="block px-4 cursor-pointer py-2 font-medium transition hover:bg-gray-100"
              >
                All Products
              </Link>
              <Link
                to="/admin-user-page"
                className="block px-4 cursor-pointer py-2 font-medium transition hover:bg-gray-100"
              >
                All User
              </Link>
            </div>
            {/* <!-- navlinks end --> */}
          </div>
        </div>
        // {/* <!-- mobile sidebar menu end --> */}
      )}
    </>
  );
}

export default MobileMenubar;
