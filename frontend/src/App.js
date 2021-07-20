import { BrowserRouter as Router, Route } from "react-router-dom";
import {useEffect } from 'react';
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Profile from "./components/user/Profile";
import { loadUser } from "./actions/userActions";
import store from './store';
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import Cart from './components/cart/Cart';

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  },[])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} exact />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute path="/password/update" component={UpdatePassword} exact />
          <ProtectedRoute path="/cart" component={Cart} exact />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
