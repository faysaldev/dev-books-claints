import React, { useState } from "react";
import AdminSidebar from "../components/AdminPage/AdminSidebar";
import AdminTopNav from "../components/AdminPage/AdminTopNav";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LiveSingleCard from "../components/AdminPage/LiveSingleCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import OrderLIstCard from "../components/AdminPage/OrderLIstCard";
import Data from "../components/AdminPage/demoInfo";
import AdminSingleProduct from "../components/AdminAllProduct/AdminSingleProduct";
import { useSelector } from "react-redux";
import { selectAll } from "../features/appSlice";
import MobileMenubar from "../components/AdminPage/MobileMenu";

function AllProduct() {
  const [dark, setDark] = useState(false);
  const allProductInfo = useSelector(selectAll);

  const DataInfo = [
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
    {
      id: 1,
      img: "/engineers-day-concept_23-2148628083.jpg",
      title: "Programminger couddogosti",
      username: "Faysal Mridha",
      userImage: "/IMG_2580.jpg",
      price: "$768",
      details:
        "npm install moment --save # npm yarn add moment # Yarn Install-Package Moment.js # NuGet spm install moment --save # spm meteor add momentjs:moment # meteor ...",
      category: "programming",
    },
  ];

  return (
    <>
      <div
        className="adminScreen min-h-screen pt-10 px-2"
        style={{
          backgroundImage: `url(${"/bg.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repet",
        }}
      >
        <div
          className={`flex max-w-6xl pt-4 shadow-md rounded-lg mx-auto ${
            dark ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {/* Adminpage sidebar */}
          <AdminSidebar dark={dark} setDark={setDark} />

          <div className="flex-grow">
            {/* adminpage top nav */}
            <AdminTopNav />
            {/* admin page main content */}
            <main
              className="px-4 py-6 h-screen overflow-y-scroll"
              id="scrollbarHide"
            >
              <h1 className="text-center text-2xl pb-8 font-semibold">
                All The Product We Have <span className="text-red-400">:)</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6 place-items-center">
                {allProductInfo?.map(
                  ({
                    _id,
                    image,
                    title,
                    username,
                    userImg,
                    price,
                    details,
                    category,
                  }) => (
                    <AdminSingleProduct
                      key={_id}
                      price={price}
                      details={details}
                      category={category}
                      _id={_id}
                      img={image}
                      title={title}
                      username={username}
                      userImage={userImg}
                    />
                  )
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
      <MobileMenubar />
    </>
  );
}

export default AllProduct;
