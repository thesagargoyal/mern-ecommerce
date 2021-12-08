import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import { MDBDataTable } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/Loader";
import Sidebar from "./Sidebar";
import { useAlert } from "react-alert";
import { getAdminProducts, clearErrors, deleteProduct } from "../../actions/productActions";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
const ProductsList = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const {error : deleteError, isDeleted} = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAdminProducts());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      alert.success("Product deleted successfully");
      history.push("/admin/products");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, deleteError, isDeleted, history]);

  const setProducts = () => {
    const data = {
      columns: [
        {
          label: "Order ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "ass",
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
        },
        {
          label: "Stock",
          field: "stock",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };
    products.forEach((product) => {
      data.rows.push({
        id: product._id,
        name: product.name,
        price: `$${product.price}`,
        stock: product.stock,
        actions: (
          <>
            <Link
              to={`/admin/product/${product._id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button className="btn btn-danger py-1 px-2 ml-2" onClick={()=>deleteProductHandler(product._id)}>
              <i className="fa fa-trash"></i>
            </button>
          </>
        ),
      });
    });

    return data;
  };

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  }

  return (
    <>
    <MetaData title={"All Products"}/>
      <div className="row">
          <div className="col-12 col-md-2">
              <Sidebar />
          </div>
          <div className="col-12 col-md-10">
              <>
                <h1 className="my-5">All Products</h1>
                {loading ? (
                  <Loader />
                ) : (
                  <MDBDataTable
                    className="px-3"
                    striped
                    bordered
                    small
                    data={setProducts()}
                  />
                )}
              </>
          </div>
      </div>
    </>
  );
};

export default ProductsList;
