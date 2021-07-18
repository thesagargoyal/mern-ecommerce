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
          <Route path="/me" component={Profile} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
