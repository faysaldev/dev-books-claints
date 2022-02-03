import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editeSingleProduct, removeAProduct } from "../../features/appSlice";
import swal from "sweetalert";
import axios from "axios";

function AdminSingleProduct({
  _id,
  img,
  title,
  username,
  userImage,
  price,
  details,
  category,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const editeHandler = (_id) => {
    dispatch(
      editeSingleProduct({
        _id,
        img,
        title,
        username,
        userImage,
        price,
        details,
        category,
      })
    );
    history.push("/admin-edite-page");
  };

  const deleteHandler = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/dev/product/delete/${_id}`)
          .then((response) => {
            dispatch(removeAProduct({ _id }));
            swal("Poof! Your Product has been deleted!", {
              icon: "success",
            });
          })
          .catch((error) => {
            swal({
              text: "Delete Failed. Please try again!",
            });
          });
      } else {
        swal("Your Product is safe!");
      }
    });
  };

  return (
    <div className="border shadow roundPed-md cursor-pointer hover:shadow-lg px-4 py-6">
      <div>
        <img
          src={img}
          className="w-full object-contain"
          style={{ maxWidth: "335px" }}
          alt=""
        />
      </div>

      {/* title */}
      <div className="py-4 space-y-4">
        <h3 className="text-md sm:text-xl font-semibold">{title}</h3>
        <div className="flex items-center space-x-5">
          <Avatar src={userImage} />
          <p className="font-bold">{username}</p>
        </div>
        {/* button */}
        <div className="flex items-center justify-evenly">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => editeHandler(_id)}
          >
            Edite
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => deleteHandler(_id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminSingleProduct;
