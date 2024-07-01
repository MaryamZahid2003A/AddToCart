import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
let total=0;
function ShowCart(props) {
  let cartItems = props.List.filter(item => item.add === true);
    
    let totalAmount=(product)=>{
        let add=(product.Price)*(product.quantity);
        total=total+add;
        return add;
    }
  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map(product => (
           <div className='ProductItem'>
                <div className='flexClass'>
                <div className='productflex'>
                    <img src={product.img} alt={product.Name} className='productImage' height='96' width='96'/>
                        <div className='details'>
                            <p className='product ' ><strong className='productDetail'>ID: </strong> {product.id}</p> 
                            <p className='product'><strong  className='productDetail'>Name: </strong> {product.Name}</p>
                            <span> 
                            <p className='product'><strong  className='productDetail'>Per Item Price: </strong>{product.Price}</p> 
                            <p className='product'><strong  className='productDetail'>Total Price: </strong>{totalAmount(product)}</p> 
                            </span> 
                        </div>
                </div>
                
                <div className='buttons'>
                    <button type="button" className='individualbutton' onClick={()=>{props.increment(product.id)}}>+</button>
                    <span className='productButton' >{product.quantity}</span>
                    <button type='button' className='individualbutton' onClick={()=>{props.decrement(product.id)}}><strong>-</strong></button>
                </div>
            </div>
            </div>
        ))
      ) : (
        <div>
        <p className='Nothing'>Nothing In The Cart</p>
        </div>
      )}
      <br />
      <br />
      <p className='Nothing1' >Total Amount : $ {total}</p>
      <br />
       <p className='Nothing'> Move To Main Page 
            <Link to="/">
          <button type="button" className='button2'><strong>Click</strong></button>
        </Link></p>
    </div>
  );
}

export default ShowCart;
