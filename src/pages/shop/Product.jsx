
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';

import { shopContext } from '../../context/shopContext';

// cartItem =[
//     {id:1,count:1},
//     {id:1,count:1},
// 
// ]

const Product = (props) =>{
    const {id,productName,price,productImage}=props.data;
    const {cartItems,addToCart,removeFromCart}=useContext(shopContext)
   
    return (
        
        <div className="col-3">
            <img src={productImage} alt="" srcset="" className='w-100' />
            
            <h5>{productName}</h5>
            <p>price: {price}</p>
            <button className='btn btn-sm btn-info' onClick={()=>addToCart(id)}>+</button>
            <span className='mx-1'>{cartItems?.filter((row)=>row.id===id)[0]?.count}</span>
            <button className='btn btn-sm btn-info' onClick={()=>addToCart(id)}>-</button>

        </div>

  );
}

export default Product;