import { TextField } from "@mui/material";
import React, { useState } from "react";
import AdminSidebar from "../components/AdminPage/AdminSidebar";
import AdminTopNav from "../components/AdminPage/AdminTopNav";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useDispatch, useSelector } from "react-redux";
import { addANewUser, addUser, selectUser } from "../features/userSlice";
import { useEffect } from "react";
import { addAProduct } from "../features/appSlice";
import MobileMenubar from "../components/AdminPage/MobileMenu";
import { css } from "@emotion/react";
import axios from "axios";
import PacmanLoader from "react-spinners/ClipLoader";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

function AddPage() {
  const userData = useSelector(selectUser);
  const itsAdmin = userData?.role === "admin";

  const [dark, setDark] = useState(false);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [addPrice, setAddPrice] = useState("9");
  const [img, setImg] = useState(null);
  const [details, setDetails] = useState("");

  // user info state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const [role, setRole] = useState("admin");

  // dispatch
  const dispatch = useDispatch();

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRole("admin");
    setUserPhoto(null);
  };

  const resetProdect = () => {
    setProductName("");
    setCategory("");
    setAddPrice("");
    setDetails("");
    setImg(null);
  };

  //   FIXME: for loader
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  let [loading1, setLoading1] = useState(false);
  let [loading2, setLoading2] = useState(false);
  let [color, setColor] = useState("#ffffff");

  //   TODO: for the user

  const handleImageUploadUser = (event) => {
    setLoading2(true);
    const imageData = new FormData();
    imageData.set("key", "43c828f276d3172b181bfb3a02198111");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setUserPhoto(response.data.data.display_url);
        setLoading2(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const CreateAnUser = (e) => {
    e.preventDefault();
    const userInfo = {
      name: name,
      email: email,
      password: password,
      photoURL: userPhoto,
      role: role,
    };
    console.log(userInfo);

    // TODO: copy to the login page
    axios
      .post(
        "https://murmuring-woodland-93721.herokuapp.com/dev/user/login",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        if (response?.data) {
          swal({
            text: "This Email Was Already Exiest",
          });
        } else {
          axios
            .post(
              "https://murmuring-woodland-93721.herokuapp.com/dev/user/post",
              {
                name: name,
                email: email,
                password: password,
                photoURL: userPhoto,
                role: role,
              }
            )
            .then(function (response) {
              dispatch(addANewUser(response?.data));
              swal({
                title: "Thanks For add User !",
                text: "User Added Successfully😃!",
                icon: "success",
                button: "Ok",
              });
              reset();
            })
            .catch(function (error) {
              console.log(error);
              reset();
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   TODO: product image handler

  const handleImageUploadProduct = (event) => {
    setLoading1(true);
    const imageData = new FormData();
    imageData.set("key", "43c828f276d3172b181bfb3a02198111");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setImg(response.data.data.display_url);
        setLoading1(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveProduct = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://murmuring-woodland-93721.herokuapp.com/dev/product/post`,
        {
          image: img,
          price: addPrice,
          title: productName,
          details: details,
          category: category,
          username: userData?.name,
          userImg: userData?.photoURL,
          email: userData?.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch(addAProduct(response?.data?.data));
        swal({
          title: "Thanks !",
          text: "Product Added Successfully😃!",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((error) => {
        swal({
          text: "There Was an Error 🤔",
          button: "Try Again",
        });
      });
    resetProdect();
  };

  // useEffect(()=>{

  // },[])

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add Page || Product and User</title>
        </Helmet>

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
              className={`px-4 grid grid-cols-1 ${
                itsAdmin && "md:grid-cols-2"
              } gap-y-4`}
            >
              {/* Add Product Section */}
              <div className="pr-0 sm:pr-10 border-r">
                {/* Add Product page top */}
                <h1 className="text-xl font-semibold pb-4">
                  Add A New Product
                </h1>
                <div className="w-full grid grid-cols-2 gap-x-3">
                  <div className="space-y-3 pb-3">
                    <h3 className="text-md font-semibold">Product Name</h3>
                    <TextField
                      required
                      fullWidth
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      id="outlined-basic"
                      label="Product Name"
                      variant="outlined"
                    />
                  </div>

                  {/* category */}
                  <div className="space-y-3 pb-3">
                    <h3 className="text-md font-semibold">Category</h3>
                    <TextField
                      required
                      fullWidth
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      id="outlined-basic"
                      label="Category"
                      variant="outlined"
                    />
                  </div>

                  {/* Add Price */}
                  <div className="space-y-3 pb-3">
                    <h3 className="text-md font-semibold">Add Price</h3>

                    <TextField
                      required
                      fullWidth
                      value={addPrice}
                      type="number"
                      inputProps={{ inputProps: { min: 1, max: 3000 } }}
                      onChange={(e) => setAddPrice(e.target.value)}
                      id="outlined-basic"
                      label="Add Price"
                      variant="outlined"
                    />
                  </div>

                  {/* add Photo */}
                  <div className="space-y-3 pb-3">
                    <input
                      className="hidden"
                      onChange={handleImageUploadProduct}
                      type="file"
                      accept="image/gif,image/jpg,image/png,image/jpeg"
                      name="file"
                    />
                    <h3 className="text-md font-semibold">Product Photo</h3>
                    {/*  top input is the hidden input bar */}
                    <button
                      className="px-6 py-2 mt-0 rounded-md shadow text-green-500 font-bold bg-green-50 border-green-500 border"
                      onClick={() =>
                        document.querySelector("input.hidden").click()
                      }
                    >
                      Upload <CloudUploadIcon />
                    </button>
                  </div>

                  {/* product deception */}
                  <textarea
                    cols="30"
                    rows="10"
                    name=""
                    className="w-full col-span-2 border border-green-500 rounded-md shadow-md outline-none px-6 py-4"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Add a Deception"
                  ></textarea>

                  {/* submit button */}
                  <button
                    onClick={saveProduct}
                    className="my-6 px-4 py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-400 shadow"
                    disabled={loading1}
                  >
                    {loading1 ? (
                      <PacmanLoader
                        color={color}
                        loading={loading1}
                        css={override}
                        size={30}
                      />
                    ) : (
                      "Save"
                    )}
                  </button>
                </div>
              </div>

              {/* chek its admin */}
              {itsAdmin && (
                // {/* Add User secton */}
                <div className="md:pl-10 pb-16 md:pb-0">
                  <h1 className="text-xl font-semibold pb-4">Add a New User</h1>
                  {/* users add */}
                  <div className="w-full grid grid-cols-2 gap-x-3">
                    <div className="space-y-3 pb-3">
                      <h3 className="text-md font-semibold">Name</h3>
                      <TextField
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                      />
                    </div>
                    {/* email */}

                    <div className="space-y-3 pb-3">
                      <h3 className="text-md font-semibold">Email Addres</h3>
                      <TextField
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-basic"
                        label="email"
                        variant="outlined"
                      />
                    </div>
                    {/* password */}
                    <div className="space-y-3 pb-3">
                      <h3 className="text-md font-semibold">Password</h3>
                      <TextField
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="outlined-basic"
                        label="password"
                        variant="outlined"
                      />
                    </div>
                    {/* userphoto */}
                    <div className="space-y-3">
                      <input
                        className="hidden user"
                        onChange={handleImageUploadUser}
                        type="file"
                        accept="image/gif,image/jpg,image/png,image/jpeg"
                        name="file"
                      />
                      {/*  top input is the hidden input bar */}
                      <h3 className="text-md font-semibold">User Photo</h3>
                      <button
                        className="px-6 py-2 rounded-md shadow text-blue-500 font-bold bg-blue-50 border-blue-400 border"
                        onClick={() =>
                          document.querySelector("input.user").click()
                        }
                      >
                        User-Photo <CloudUploadIcon />
                      </button>
                    </div>

                    {/* role */}
                    <select
                      className="w-full mt-4 sm:mt-0 col-span-2 border border-green-500 rounded-md shadow-md outline-none px-4 py-2"
                      name=""
                      id=""
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option
                        className="bg-green-400 py-3 shadow"
                        value="admin"
                      >
                        admin
                      </option>
                      <option className="bg-green-400 py-3 shadow" value="user">
                        user
                      </option>
                    </select>

                    {/* submit button */}
                    <button
                      onClick={CreateAnUser}
                      disabled={loading2}
                      className="my-6 px-4 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-400 shadow"
                    >
                      {loading2 ? (
                        <PacmanLoader
                          color={color}
                          loading={loading2}
                          css={override}
                          size={30}
                        />
                      ) : (
                        " Save"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
      <MobileMenubar />
    </>
  );
}

export default AddPage;
