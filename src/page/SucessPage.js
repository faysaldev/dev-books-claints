import React from "react";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

function SucessPage() {
  const router = useHistory();

  return (
    <div className="homeScreen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Payment Sucess in DebBooks</title>
      </Helmet>

      <div>
        {/* header */}
        <Header />
        {/* main */}

        <main className="max-w-6xl mx-auto space-y-8">
          <div className="md:flex space-y-4 items-center text-center justify-center md:space-x-5">
            <img
              src="https://i.ibb.co/G2b5FG5/0de41a3c5953fba1755ebd416ec109dd.gif"
              alt=""
            />

            <h1 className="text-3xl px-6 md:px-0 font-semibold text-center text-green-300">
              Your Payment Successfully Done! 😘😘😘
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="px-4 py-2 bg-green-500 rounded-md shadow-md text-white transform hover:scale-125 transition-all ease-in"
              onClick={() => router.push("/")}
            >
              Back to Home
            </button>
          </div>
        </main>
        <Fotter />
      </div>
    </div>
  );
}

export default SucessPage;
