import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminPage/AdminSidebar";
import AdminTopNav from "../components/AdminPage/AdminTopNav";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import UserCard from "../components/UserCard/UserCard";
import Data from "../components/UserCard/userData";
import { useSelector, useDispatch } from "react-redux";
import { selectEditeUser, editeUserDelete } from "../features/appSlice";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { selectAllUSers } from "../features/userSlice";
import MobileMenubar from "../components/AdminPage/MobileMenu";
import swal from "sweetalert";
import axios from "axios";

function UserPage() {
  const [dark, setDark] = useState(false);
  const editeUserData = useSelector(selectEditeUser);
  const dispatch = useDispatch();

  const allUsersData = useSelector(selectAllUSers);

  // user info state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  // TODO update user data
  const UpdateUserData = () => {
    axios
      .patch(
        `http://localhost:5000/dev/user/update/${editeUserData?._id}`,
        {
          name: name,
          email: email,
          password: password,
          role: role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        swal({
          title: "Thanks !",
          text: "User Data Updated Successfully😃!",
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
  };

  useEffect(() => {
    setName(editeUserData?.username);
    setEmail(editeUserData?.email);
    setPassword(editeUserData?.password);
    setRole(editeUserData?.role);
  }, [editeUserData]);

  return (
    <>
      <div
        className="UserScreen min-h-screen pt-10 px-2"
        style={{
          backgroundImage: `url(${"/bg.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repet",
        }}
      >
        <div
          className={`flex max-w-7xl pt-4 shadow-md rounded-lg mx-auto ${
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
                editeUserData && "md:grid-cols-3"
              } gap-y-4 pb-16`}
            >
              {/* Add Product Section */}
              <div
                className={`pr-10 border-r ${
                  editeUserData && "md:col-span-2 "
                } overflow-y-scroll p-6`}
                id="scrollbarHide"
              >
                <h1 className="text-xl font-semibold pb-4 text-gray-600">
                  All The Users We Have ({allUsersData?.length})
                </h1>
                {/* order list */}
                <ul className="space-y-5">
                  {allUsersData?.map(
                    ({ _id, name, photoURL, email, password, role }) => (
                      <UserCard
                        key={_id}
                        _id={_id}
                        username={name}
                        avatar={photoURL}
                        email={email}
                        password={password}
                        role={role}
                      />
                    )
                  )}
                </ul>
              </div>

              {/* chek the edite user is here */}

              {editeUserData && (
                // Add User secton
                <div className="pl-4">
                  <h1 className="text-xl font-semibold pb-4">
                    Edite The User of {editeUserData?.username}
                  </h1>
                  {/* users add */}
                  <div className="w-full grid grid-cols-2 gap-x-3">
                    <div className="space-y-3 pb-3">
                      <h3 className="text-md font-semibold">Name</h3>
                      <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </div>
                    {/* email */}

                    <div className="space-y-3 pb-3">
                      <h3 className="text-md font-semibold">Email Addres</h3>
                      <TextField
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                      />
                    </div>
                    {/* password */}
                    <div className="space-y-3 pb-3">
                      <h3 className="text-md font-semibold">Password</h3>
                      {/* <TextField type='password' value={password} onChange={(e)=>setPassword(e.target.value) } id="outlined-basic" label="" variant="outlined" /> */}

                      <OutlinedInput
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
                              {!showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </div>
                    {/* userphoto */}
                    {/* i think it will be not nedded in this page */}

                    {/* role */}
                    <div className="space-y-3">
                      <h3 className="text-md font-semibold">
                        Change the Role ({role})
                      </h3>
                      <select
                        className="w-full col-span-2 border border-green-500 rounded-md shadow-md outline-none px-4 py-2"
                        name=""
                        id=""
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option className="bg-green-400 shadow" value="admin">
                          admin
                        </option>
                        <option className="bg-green-400 shadow" value="user">
                          user
                        </option>
                      </select>
                    </div>

                    {/* submit button */}
                    <button
                      className="my-6 px-4 py-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-400 shadow"
                      onClick={() => dispatch(editeUserDelete())}
                    >
                      Cancel
                    </button>

                    <button
                      className="my-6 px-4 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-400 shadow"
                      onClick={UpdateUserData}
                    >
                      Save
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

export default UserPage;
