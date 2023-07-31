import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';
import '../styles/Products.css'; 

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div className="loading">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} className="productImage" />
          <div className="productDetails">
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
          <button className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
