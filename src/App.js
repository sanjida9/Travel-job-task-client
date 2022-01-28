import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import AuthProvider from "./context/AuthProvider";
import Register from "./components/Register/Register";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import NewBlog from "./components/NewBlog/NewBlog";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MoreProducts from "./components/MoreProducts/MoreProducts";
import Pay from "./components/Pay/Pay";
import Review from "./components/Review/Review";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/moreProducts">
              <MoreProducts></MoreProducts>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/blog/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/moreProducts">
              <MoreProducts></MoreProducts>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/newBlog">
              <NewBlog></NewBlog>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
