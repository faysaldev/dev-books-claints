import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import SingleCard from "../components/homeSngleCard/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../features/appSlice";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import { addAllProduct } from "../features/appSlice";
import {
  addUser,
  selectAllUSers,
  loginUser,
  logoutUser,
  selectUser,
} from "../features/userSlice";

function HomePage() {
  const [search, setSearch] = useState("");
  const allP = useSelector((state) => state.app.allProduct);

  const [allProduct, setAllProduct] = useState(allP);

  // TODO:slect the user
  const selectU = useSelector(selectUser);

  // setProject(() => ProjectData.filter((item) => item.title.toLocaleLowerCase().match(searchText.toLocaleLowerCase())))

  const searchBar = (e) => {
    e.preventDefault();
    if (search === "") return;
    setLoading(true);

    setTimeout(() => {
      setAllProduct(() =>
        allProduct.filter(
          (item) =>
            item.title.toLocaleLowerCase().match(search.toLocaleLowerCase()) ||
            item.category.toLocaleLowerCase().match(search.toLocaleLowerCase())
        )
      );
      setLoading(false);
    }, 3000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    if (!e.target.value.length > 0) {
      setAllProduct(allP);
    }
  };

  // TODO for loading
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#56DDC3");

  // featch data

  const dispatch = useDispatch();
  const selectAllProduct = useSelector(selectAll);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dev/product/all")
      .then(function (response) {
        dispatch(addAllProduct(response?.data?.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [selectAllProduct]);

  // todo get all user from the api
  useEffect(() => {
    axios
      .get("http://localhost:5000/dev/user/all")
      .then(function (response) {
        dispatch(addUser(response?.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [selectAllUSers]);

  // TODO: get the localStorage get user
  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");
    if (localStorageUser) {
      axios
        .post(
          "http://localhost:5000/dev/user/getemail",
          {
            email: localStorageUser,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          dispatch(loginUser(response?.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      dispatch(logoutUser());
    }
  }, [selectU]);

  return (
    <div className="homeScreen">
      <div>
        {/* header */}
        <Header />
        {/* main */}

        <main className="max-w-6xl mx-auto px-5 md:px-3 pt-40">
          {/* home search bar input  */}
          <form className="flex items-center justify-between max-w-sm sm:max-w-lg mx-auto p-3 bg-white text-gray-600 border rounded-md shadow hover:shadow-xl focus-within:shadow-xl">
            <SearchIcon className="mr-4" />
            <input
              value={search}
              onChange={handleChange}
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none border-none h-full text-black"
            />
            {/* only show the when the searchbar is full */}

            <div className="px-8 hidden md:flex py-2 rounded-md bg-gradient-to-tr from-green-400 to-blue-500 text-white cursor-pointer">
              <button type="submit" onClick={searchBar}>
                SEARCH
              </button>
            </div>
          </form>

          {/* content feed */}

          {loading ? (
            <div className="pt-10 sm:pt-16 px-6">
              <HashLoader
                color={color}
                loading={loading}
                css={override}
                size={300}
              />
            </div>
          ) : (
            <div className="pt-10 sm:pt-16 sm:px-6 grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 gap-y-8">
              {allProduct.length >= 1 ? (
                <>
                  {allProduct?.map(
                    ({
                      _id,
                      image,
                      price,
                      title,
                      details,
                      category,
                      username,
                      userImg,
                      createdAt,
                      updatedAt,
                    }) => (
                      <SingleCard
                        _id={_id}
                        title={title}
                        price={price}
                        category={category}
                        details={details}
                        image={image}
                        username={username}
                        userImg={userImg}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                      />
                    )
                  )}
                </>
              ) : (
                <div className="pt-10 col-span-3 place-items-center place-content-center text-center">
                  <div className="flex items-center justify-center flex-col space-y-8">
                    <img
                      src="/notfound.svg"
                      className="object-contain"
                      style={{ width: "500px" }}
                      alt=""
                    />
                    <h1 className="text-2xl font-semibold">
                      There was no product 🤨
                    </h1>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* fotter content */}
        </main>
        <Fotter />
      </div>
    </div>
  );
}

export default HomePage;
