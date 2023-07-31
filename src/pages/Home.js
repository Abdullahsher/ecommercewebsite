import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <section>
        <h3>Our Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
