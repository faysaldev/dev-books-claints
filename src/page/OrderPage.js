import React from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import OrderCard from "../components/OrderCard/OrderCard";
import { useSelector } from "react-redux";
import { selectCartAll, selectTotal } from "../features/appSlice";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function OrderPage() {
  const cardProduct = useSelector(selectCartAll);
  const Total = useSelector(selectTotal);

  const history = useHistory();

  return (
    <div className="orderScreen">
      <div>
        {/* Header */}
        <Header />
        {/* main */}
        <main className="max-w-6xl mx-auto pt-20">
          {/* main top */}
          {/* <div className="pt-4 pb-10 text-center space-y-2">
            {cardProduct.length > 0 ? (
              <>
                <h2 className="text-3xl text-gray-700 font-semibold">
                  Thanks for your order :)
                </h2>
                <p className="text-md text-gray-600">
                  Your Order is being processed
                </p>
              </>
            ) : (
              <h2 className="text-3xl text-gray-700 font-semibold">
                Your order is being empety ):
              </h2>
            )}
          </div> */}

          {/* orderlist */}

          <div className="px-4 py-3">
            {/* order list */}
            <div className="pt-2 pb-6">
              <h3 className="text-2xl font-semibold shadow-sm pb-2">
                Your Cart
              </h3>
              {/* order */}
              {/* TODO: for empety cart */}
              {cardProduct.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-4 pt-4">
                  {cardProduct?.map(
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
                      <OrderCard
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
                      src="/emptyCart.93ba7835.svg"
                      alt=""
                    />
                  </div>
                  {/* div right */}
                  <div className="px-6 py-6 bg-white border shadow-md mx-auto max-w-sm lg:max-w-xl">
                    <h2 className="text-2xl text-black pb-3 font-semibold">
                      Your cart feels lonely.
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
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* order Details */}
            {cardProduct.length > 0 && (
              <div className="py-4 px-4 border-t border-b border-gray-300 shadow hover:shadow-md">
                <h2 className="text-2xl font-semibold text-gray-400">
                  Order Details
                </h2>
                <ul className="text-gray-500 space-y-2 pt-4">
                  <li className="flex items-center justify-between">
                    Order number <span>#60c8dea7</span>
                  </li>
                  <l className="flex items-center justify-between">
                    Order Date<span>Tue Jun 15 2021</span>
                  </l>
                  <li className="flex items-center justify-between">
                    Price<span>${Total}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    Shipping<span>$30</span>
                  </li>
                  <li className="flex items-center justify-between">
                    Total Price<span>{Total + 30}</span>
                  </li>
                </ul>
                {/* chekout button */}
                <div className="py-5">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ textTransform: "capitalize" }}
                    fullWidth
                  >
                    Processed to payment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>
        {/* footer */}
        <Fotter />
      </div>
    </div>
  );
}

export default OrderPage;
