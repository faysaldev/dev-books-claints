import React, { useEffect } from "react";
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
// todo for import the user slice
import { loginUser, logoutUser, selectUser } from "./features/userSlice";
import { selectAll, addAllProduct } from "./features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const selectU = useSelector(selectUser);
  const selectAllProduct = useSelector(selectAll);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .post(
          "http://localhost:5000/dev/user/login",
          {
            email: localStorage.getItem("user"),
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
      const user = localStorage.getItem("user");
      dispatch(loginUser(user));
    } else {
      dispatch(logoutUser());
    }
  }, [history]);

  return (
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

        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
