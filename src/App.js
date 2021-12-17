import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from './page/HomePage'
import AdminPage from './page/AdminPage';
import LoginPage from './page/LoginPage';
import SingleProduct from './page/SingleProduct';
import OrderPage from './page/OrderPage';
import AllProduct from './page/AllProduct';
import EditePage from './page/EditePage';
import AddPage from './page/AddPage';
import UserPage from './page/UserPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/admin-panel">
              <AdminPage />
          </Route>

          <Route exact path="/login">
              <LoginPage />
          </Route>

          <Route exact path="/single">
              <SingleProduct />
          </Route>

          <Route exact path="/orders">
              <OrderPage />
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