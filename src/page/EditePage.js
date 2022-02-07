import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminPage/AdminSidebar";
import AdminTopNav from "../components/AdminPage/AdminTopNav";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectEditeProduct, editeProductDelete } from "../features/appSlice";
import { TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MobileMenubar from "../components/AdminPage/MobileMenu";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from "axios";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

function EditePage() {
  const [dark, setDark] = useState(false);
  const EditeProductData = useSelector(selectEditeProduct);
  const history = useHistory();
  const dispatch = useDispatch();

  // product data
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [img, setImg] = useState(EditeProductData?.img);
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (!EditeProductData) {
      return history.replace("/admin-all-product");
    }

    setProductName(EditeProductData?.title);
    setCategory(EditeProductData?.category);
    setAddPrice(EditeProductData?.price);
    setDetails(EditeProductData?.details);

    return () => {
      dispatch(editeProductDelete());
    };
  }, [EditeProductData]);

  //   set image upload
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const handleImageUpload = (event) => {
    setLoading(true);
    const imageData = new FormData();
    imageData.set("key", "43c828f276d3172b181bfb3a02198111");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setImg(response.data.data.display_url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SaveDataProduct = (e) => {
    e.preventDefault();
    console.log(EditeProductData?._id);
    axios
      .patch(
        `https://murmuring-woodland-93721.herokuapp.com/dev/product/update/${EditeProductData?._id}`,
        {
          title: productName,
          category: category,
          price: addPrice,
          details: details,
          image: img,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Thanks !",
          text: "Product Updated Successfully😃!",
          icon: "success",
          button: "Ok",
        });
        history.replace("/admin-all-product");
      })
      .catch((error) => {
        swal({
          text: "There Was an Error 🤔",
          button: "Try Again",
        });

        history.replace("/admin-all-product");
      });
  };

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
          <title>Edite Single Page || DebBooks</title>
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
            <main>
              <div className="px-2 md:pr-10 border-r pb-16">
                {/* Add Product page top */}
                <h1 className="text-xl font-semibold pb-4">Edite Product</h1>
                <form className="w-full grid grid-cols-2 gap-x-3">
                  <div className="space-y-3 pb-3">
                    <h3 className="text-md font-semibold">Product Name</h3>
                    <TextField
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
                      fullWidth
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      id="outlined-basic"
                      label="Category"
                      variant="outlined"
                    />
                  </div>

                  {/* Add Price */}
                  <div className="space-y-3 pb-3 col-span-2">
                    <h3 className="text-md font-semibold">Add Price</h3>

                    <TextField
                      fullWidth
                      value={addPrice}
                      onChange={(e) => setAddPrice(e.target.value)}
                      id="outlined-basic"
                      label="Add Price"
                      variant="outlined"
                    />
                  </div>

                  <div className="w-full col-span-2 grid grid-cols-2 space-x-6">
                    {/* image div */}
                    <div className="w-full flex items-center justify-center">
                      <img
                        className="object-contain"
                        src={EditeProductData?.img}
                        onClick={() =>
                          document.querySelector(".productImageUpdate").click()
                        }
                      />

                      {/* input  */}
                      <input
                        type="file"
                        className="hidden productImageUpdate"
                        onChange={handleImageUpload}
                      />
                    </div>
                    {/* product deception */}
                    <textarea
                      cols="30"
                      rows="10"
                      name=""
                      className=" border border-green-500 rounded-md shadow-md outline-none px-6 py-4"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Add a Deception"
                    ></textarea>
                  </div>

                  {/* submit button */}
                  <button
                    className="my-6 px-4 py-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-400 shadow"
                    onClick={() => dispatch(editeProductDelete())}
                  >
                    Cancel
                  </button>

                  <button
                    className="my-6 px-4 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-400 shadow"
                    disabled={loading}
                    onClick={SaveDataProduct}
                  >
                    {loading ? (
                      <ScaleLoader
                        color={color}
                        loading={loading}
                        css={override}
                        size={30}
                      />
                    ) : (
                      "Save"
                    )}
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
      <MobileMenubar />
    </>
  );
}

export default EditePage;
