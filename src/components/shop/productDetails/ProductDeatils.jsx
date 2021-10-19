import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import "./ProductDeatils";
const ProductDeatils = () => {
  let params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [params.id]);

  const showProduct = () => {
    if (product.length === 0) {
      return (
        <Spinner
          animation="border"
          className="spinner"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    } else {
      return (
        <section key={product.id} className="container">
          <h2 className="my-4 mb-5 text-center">{product.title}</h2>

          <div className="row">
            <div className="col-md-5">
              <img className="img-fluid w-50" src={product.image} alt="" />
            </div>
            <div className="col-md-7">
              <h3 className="my-3">Project Description</h3>
              <p>{product.description}</p>
              <h3 className="my-3">Project Details</h3>
              <ul>
                <li>Price : {product.price}</li>
                <li>Category : {product.category}</li>
              </ul>
            </div>
          </div>
        </section>
      );
    }
  };

  return showProduct();
};

export default ProductDeatils;
