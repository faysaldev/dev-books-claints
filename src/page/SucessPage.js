import React from "react";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

function SucessPage() {
  const router = useHistory();

  return (
    <div className="homeScreen">
      <div>
        {/* header */}
        <Header />
        {/* main */}

        <main className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-5">
            <img
              src="https://i.ibb.co/G2b5FG5/0de41a3c5953fba1755ebd416ec109dd.gif"
              alt=""
            />

            <h1 className="text-3xl font-semibold text-center text-green-300">
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
