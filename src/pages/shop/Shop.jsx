
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { PRODUCTS } from '../../data/products';
import Product from './Product';
import React from 'react';

const Shop = () =>{
  return (
    <React.Fragment>
      <h1>shop</h1>
        <div className="row">
            {PRODUCTS.map((product)=>{
             return  <Product key={product.id} data={product} />
            })}
        </div>
    </React.Fragment>
  );
}

export default Shop;