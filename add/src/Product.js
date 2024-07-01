import React from 'react'
import './App.css';

function Product(props){
    return(
        <div className='flexClass'>
            <div >
            <p className='product ' ><strong className='productDetail'>ID: </strong> {props.product.id}</p> 
            <p className='product'><strong  className='productDetail'>Name: </strong> {props.product.Name}</p> 
            <p className='product'><strong  className='productDetail'>Price: </strong>{props.product.Price}</p> 
            </div>
            <div className='buttons'>
                <button type="button" className='individualbutton' onclick={()=>{props.increment(props.product.id)}}><strong>+</strong></button>
                <span className='productButton' >{props.product.quantity}</span>
                <button type='button' className='individualbutton' ><strong>-</strong></button>
            </div>
        </div>
    
    );
}

export default Product;