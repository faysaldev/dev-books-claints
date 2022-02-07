import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import HomePage from "./page/HomePage";
import AdminPage from "./page/AdminPage";
import LoginPage from "./page/LoginPage";
import SingleProduct from "./page/SingleProduct";
import OrderPage from "./page/OrderPage";
import AllProduct from "./page/AllProduct";
import EditePage from "./page/EditePage";
import AddPage from "./page/AddPage";
import UserPage from "./page/UserPage";
import BoomarkPage from "./page/BoomarkPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "@emotion/react";

// todo for import the user slice
import { loginUser, logoutUser, selectUser } from "./features/userSlice";
import { selectAll, addAllProduct } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SucessPage from "./page/SucessPage";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const dispatch = useDispatch();
  const selectU = useSelector(selectUser);
  const selectAllProduct = useSelector(selectAll);
  const history = useHistory();

  // TODO: for preloader
  const [preloader, setPreloader] = useState(true);
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  // TODO: G-JNN1E3BF3N

  // let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const windowload = window.addEventListener("load", () => {
    setPreloader(false);
  });

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/admin-panel">
            <AdminPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/single/:id">
            <SingleProduct />
          </Route>

          <Route exact path="/orders">
            <OrderPage />
          </Route>

          <Route exact path="/bookmark">
            <BoomarkPage />
          </Route>

          <Route exact path="/admin-all-product">
            <AllProduct />
          </Route>

          <Route exact path="/admin-edite-page">
            <EditePage />
          </Route>

          <Route exact path="/admin-add-page">
            <AddPage />
          </Route>

          <Route exact path="/admin-user-page">
            <UserPage />
          </Route>

          <Route exact path="/payment-succes">
            <SucessPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {preloader && (
        <div
          className="fixed top-0 left-0 w-full h-full preloaderHomePage flex items-center justify-center"
          style={{ background: "rgba(0,0,0,1)" }}
        >
          <GridLoader
            color={color}
            loading={preloader}
            css={override}
            size={30}
          />
        </div>
      )}
    </>
  );
}

export default App;
