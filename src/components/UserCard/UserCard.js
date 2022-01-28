import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { useDispatch } from "react-redux";
import { editeUser } from "../../features/appSlice";
import swal from "sweetalert";
import axios from "axios";
function UserCard({ _id, username, avatar, email, password, role }) {
  const [action, setAction] = useState(false);

  const dispatch = useDispatch();

  // edite user handler
  const editeUserHandler = () => {
    dispatch(editeUser({ _id, username, avatar, email, password, role }));
  };

  const deleteHandler = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/dev/user/delete/${_id}`)
          .then((response) => {
            swal("Poof! Your User has been deleted!", {
              icon: "success",
            });
          })
          .catch((error) => {
            swal({
              text: "Delete Failed. Please try again!",
            });
          });
      } else {
        swal("Your User is safe!");
      }
    });
  };

  return (
    <li className="flex items-center justify-between px-4 py-3 border shadow-md hover:shadow-xl cursor-pointer rounded-md bg-gray-50 hover:bg-white transition-all ease-in-out hover:font-bold text-xs font-semibold md:text-md transform hover:translate-x-4 hover:-translate-y-3">
      <p className="hidden lg:inline-flex">{_id}</p>
      {/* user info */}
      <div className="flex items-center space-x-2">
        <Avatar
          src={avatar ? avatar : "/IMG_2580.jpg"}
          className="hover:shadow-md"
        />
        <p className="hidden md:flex">{username}</p>
      </div>

      {/* remaining time */}
      <div className="flex text-gray-600 items-center space-x-2">
        <MarkunreadIcon />
        <span className="hidden md:flex">{email}</span>
      </div>

      {/* status */}
      <button
        className={`px-3 py-2 border shadow bg-green-400 rounded-md text-white`}
        onClick={editeUserHandler}
      >
        Edite
      </button>
      <button
        onClick={deleteHandler}
        className={`px-3 py-2 border shadow bg-red-400 rounded-md text-white`}
      >
        Delete
      </button>

      {/* action */}
      <div className="relative">
        <MoreVertIcon
          onClick={() => (action ? setAction(false) : setAction(true))}
        />
        {action && (
          <div className="absolute right-2 top-6 border w-40 bg-white">
            <p
              className="px-2 py-1 border-b text-gray-500 font-semibold text-xs md:text-md shadow hover:shadow-lg"
              onClick={() => setAction(false)}
            >
              Cancel
            </p>
            <p
              className="px-2 py-1 border-b text-gray-500 font-semibold text-xs md:text-md shadow hover:shadow-lg"
              onClick={deleteHandler}
            >
              Delete
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

export default UserCard;
