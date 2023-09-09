import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';

import { ShopContext } from '../../context/shopContext';



const Product = (props) =>{
    const {id,productName,price,productImage}=props.data;
    const {cartItems, addToCart, removeFromCart}=useContext(ShopContext);
    // const {cartItems, addToCart, removeFromCart}=useContext(shopContext)
    // این علامت سوال که گذاشتیم یعنی اگر خالی بود سبد خرید فقط بهم فالس رو بده و خطا نده
    const isInCart = cartItems?.some((item)=> item.id === id && item.count !=0)
    return (
        
        <div className="col-3">
            <img src={productImage} alt="" srcset="" className='w-100' />
            
            <h5>{productName}</h5>
            <p>price: {price}</p>
            <button className='btn btn-sm btn-info' onClick={()=>addToCart(id)}>+</button>
        
            {isInCart && 
            <>
            <span className='mx-1'>{cartItems?.filter( (item)=>item.id === id )[0]?.count}</span>

            <button className='btn btn-sm btn-info' onClick={()=>removeFromCart(id)}>-</button></>  }
        </div>

  );
}

export default Product;