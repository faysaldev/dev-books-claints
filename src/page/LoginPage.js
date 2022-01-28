import React, { useEffect, useState } from "react";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser } from "../features/userSlice";
import axios from "axios";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import swal from "sweetalert";

// firebase login

function LoginPage() {
  const [dark, setDark] = useState(false);
  const [login, setLogin] = useState(true);

  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const history = useHistory();

  // user info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // * this users details for the registration user
  const [userPhoto, setUserPhoto] = useState(null);

  // FIXME: this email already exist
  const [existEmail, setExistEmail] = useState(false);
  // TODo to chage the login  state
  const LoginStateChanged = () => {
    setLogin(!login);
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  // for clicp loader

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  // ! user image uploaded handler
  // user photo image handler
  // const UserimageHandler = (e) => {
  //   e.preventDefault();
  //   const uplodedUserImage = e.target.files[0];
  //   console.log(uplodedUserImage);

  //   if (uplodedUserImage == "" || uplodedUserImage === undefined) {
  //     alert(`not an image, file is a${uplodedUserImage.type}`);
  //   } else {
  //     setUserPhoto(uplodedUserImage);
  //   }
  // };

  // chek the all the input have fillup or not
  const fillUpInput = name && email && password;

  // create an account
  const careateAccount = () => {
    axios
      .post(
        "http://localhost:5000/dev/user/login",
        {
          email: email,
          password: password,
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
            .post("http://localhost:5000/dev/user/post", {
              name: name,
              email: email,
              password: password,
              photoURL: userPhoto,
            })
            .then(function (response) {
              console.log(response?.data);
              localStorage.setItem(
                "user",
                JSON.stringify(response?.data.email)
              );
              dispatch(loginUser(response?.data));
              response?.data?.email && history.replace("/");
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(
    //   loginUser({ name, email, password, role: "admin", photoURL: userPhoto })
    // );
  };

  const SingInWIthEmail = () => {
    axios
      .post(
        "http://localhost:5000/dev/user/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response?.data.email));
          dispatch(loginUser(response?.data));

          response?.data?.email && history.replace("/");
        } else {
          swal("Email or Password was Wrong!", {
            buttons: "Try again",
            timer: 3000,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleImageUpload = (event) => {
    setLoading(true);
    const imageData = new FormData();
    imageData.set("key", "43c828f276d3172b181bfb3a02198111");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setUserPhoto(response.data.data.display_url);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(userPhoto);

  return (
    <div
      className={`adminScreen min-h-screen pt-10 px-2 bg-gradient-to-r ${
        dark ? "from-green-300 to-pink-400" : "to-yellow-300 from-purple-400"
      }`}
    >
      <div
        className={`flex max-w-6xl shadow-md rounded-lg mx-auto ${
          dark ? "bg-transparent" : "bg-white backdrop-blur"
        }`}
      >
        <main className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:pr-4">
          {/* Login Left */}
          <div className="w-full rounded-md h-full">
            <img
              src="/loginbg.jpg"
              alt=""
              className="w-full object-cover h-full rounded-md"
            />
          </div>

          {/* login Right */}
          <div className="py-6 px-6">
            {/* right top */}
            <div className="flex items-center justify-between pb-6 border-b">
              <Link to={"/"} className="text-red-700 text-md font-semibold">
                Devebooks &copy;
              </Link>
              <div onClick={() => setDark(!dark)} className="cursor-pointer">
                {dark ? <ToggleOnIcon /> : <ToggleOffIcon />}
              </div>
            </div>

            {/* Right Middle */}
            <div className="pt-6">
              <h1 className="text-2xl font-semibold text-gray-700 pb-4">
                {login ? "Sign in" : "Sign up"} To DevBooks
              </h1>
              {login ? (
                <p className="text-md font-semibold text-gray-500 pb-7">
                  {" "}
                  Don't have an account{" "}
                  <span
                    onClick={LoginStateChanged}
                    className="pl-4 font-bold text-red-600 cursor-pointer hover:underline"
                  >
                    Sign up
                  </span>
                </p>
              ) : (
                <p className="text-md font-semibold text-gray-500 pb-7">
                  {" "}
                  Already have a account{" "}
                  <span
                    onClick={LoginStateChanged}
                    className="pl-4 font-bold text-red-600 cursor-pointer hover:underline"
                  >
                    Sign In
                  </span>
                </p>
              )}
            </div>

            {/*  INput fuiled*/}

            <div className="w-full space-y-5 pt-7 border-t pb-8">
              <div className="space-y-3 pb-3">
                <h3 className="text-md font-semibold">Name</h3>
                <TextField
                  fullWidth
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
                {/* {existEmail && (
                  <span className="text-red-500 text-sm">
                    This Email Already Exiest
                  </span>
                )} */}
                <TextField
                  fullWidth
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
                {/* <TextField type='password' value={password} onChange={(e)=>setPassword(e.target.value) } id="outlined-basic" label="" variant="outlined" /> */}

                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={(e) => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </div>

              {/* for the uploader iamge  */}

              <div className="grid grid-cols-2">
                {!login && (
                  // {/* userphoto */}
                  <div className="space-y-3">
                    <input
                      className="hidden user"
                      onChange={handleImageUpload}
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
                )}

                {/* submit button */}

                <div className={`${login && "col-span-2"}`}>
                  {login ? (
                    <button
                      className={`w-full my-6 px-4 py-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-400 shadow-md ${
                        !fillUpInput && "cursor-not-allowed"
                      }`}
                      disabled={!fillUpInput}
                      onClick={SingInWIthEmail}
                    >
                      Sign in
                    </button>
                  ) : (
                    <button
                      onClick={careateAccount}
                      className={`w-full my-6 px-4 py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-400 shadow-md ${
                        !fillUpInput && "cursor-not-allowed"
                      }`}
                      disabled={!userPhoto || !fillUpInput}
                    >
                      {!loading ? (
                        " Create an account"
                      ) : (
                        <ScaleLoader
                          color={color}
                          loading={loading}
                          css={override}
                          size={30}
                        />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* sgn up with another
            <div className="pt-8 text-center border-t w-8/12 mx-auto">
              <h2 className="text-gray-400 font-semibold">OR</h2>
              <div className="pt-6 flex items-center space-x-4 justify-center">
                <button className="bg-red-400 px-6 py-4 rounded-md shadow font-semibold text-white cursor-pointer hover:bg-red-200">
                  {" "}
                  <GoogleIcon />
                </button>

                <button className="bg-red-400 px-6 py-4 rounded-md shadow font-semibold text-white cursor-pointer hover:bg-red-200">
                  {" "}
                  <FacebookIcon />
                </button>

                <button className="bg-red-400 px-6 py-4 rounded-md shadow font-semibold text-white cursor-pointer hover:bg-red-200">
                  {" "}
                  <AppleIcon />
                </button>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
