import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import BookMarkCard from "../components/BookmarkPage/BookMarkCard";
import { useSelector } from "react-redux";
import { selectAllBookmark } from "../features/appSlice";

function BoomarkPage() {
  const history = useHistory();
  const markProduct = useSelector(selectAllBookmark);
  return (
    <div className="bookmarkPage" style={{ background: "#FAFAFA" }}>
      <div>
        {/* Header */}
        <Header />
        {/* main */}
        <main className="max-w-6xl mx-auto pt-20">
          {/* is bookmark is empety */}
          <div className="px-4 py-3">
            {/* order list */}
            <div className="pt-2 pb-6">
              <h3 className="text-2xl font-semibold shadow-sm pb-2">
                Your BookMark
              </h3>
              {/* order */}
              {/* TODO: for empety cart */}
              {markProduct.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-4 pt-4">
                  {markProduct?.map(
                    ({
                      _id,
                      image,
                      title,
                      category,
                      date,
                      price,
                      quantity,
                      details,
                    }) => (
                      <BookMarkCard
                        key={_id}
                        _id={_id}
                        image={image}
                        title={title}
                        category={category}
                        date={date}
                        price={price}
                        quantity={quantity}
                        details={details}
                      />
                    )
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 pt-4">
                  {/* div Left */}
                  <div className="max-w-md lg:max-w-2xl px-6 py-4">
                    <img
                      className="w-full object-contain"
                      src="/emptyBookmarks.84799a34.svg"
                      alt=""
                    />
                  </div>
                  {/* div right */}
                  <div className="px-6 py-6 bg-white border shadow-md max-w-sm lg:max-w-xl mx-auto">
                    <h2 className="text-2xl text-black pb-3 font-semibold">
                      It's empty here.
                    </h2>
                    <p className="text-base pb-8">
                      Your shopping cart lives to serve. Give it purpose - fill
                      it with books, electronicts, videos, etc. and make it
                      happy.
                    </p>
                    <button
                      className="px-4 py-2 text-white bg-yellow-400 rounded-md font-semibold shadow-md"
                      onClick={() => history.push("/")}
                    >
                      Go Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        <Fotter />
      </div>
    </div>
  );
}

export default BoomarkPage;
