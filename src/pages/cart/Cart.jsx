import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ShopContext } from '../../context/shopContext';
import { PRODUCTS } from '../../data/products';
import Product from '../shop/Product';

const Cart = () =>{
  const {cartItems , resetCart} = useContext(ShopContext)
  return (
    <React.Fragment>
        <h1>Your cart items</h1>
        <div className="row">
            {PRODUCTS.map((p)=>{
                if( cartItems?.some((item)=> item.id===p.id && item.count >0))
                 return <Product data={p} ></Product>
            })}
        </div>
        <button className="btn btn-warning m-3" onClick={resetCart}>reset</button>
    </React.Fragment>
  );
}

export default Cart;