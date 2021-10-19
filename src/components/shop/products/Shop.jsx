import { useEffect, useState } from "react";
import Product from "./Product";
import "./Shop.css";
import { Spinner } from "react-bootstrap";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const showProducts = () => {
    if (products.length === 0) {
      return (
        <Spinner animation="border"  className="spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    } else {
      return (
        <section className="shop">
          <h2 className="text-center py-4 shop-title"> Our Shop </h2>
          <div className="products container d-flex flex-wrap">
            {products.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </section>
      );
    }
  };

  return (
    showProducts()
  ) 
};

export default Shop;
