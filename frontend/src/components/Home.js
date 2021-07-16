import React, { useEffect } from "react";
import MetaData from "./layouts/MetaData";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";

import Products from "./product/Product";
import Loader from "./layouts/Loader";

import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
  }, [dispatch, alert, error]);

  return (
    <>
      <MetaData title="Buy Best " />
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 id="products_heading">Latest Products</h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Products key={product.id} product={product} />
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
