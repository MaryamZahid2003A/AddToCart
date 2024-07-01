import React from 'react'
import './App.css';

function Product(props){
    return(
        <div className='flexClass'>
            <div className='productflex'>
                 <img src={props.product.img} alt={props.product.Name} className='productImage' height='96' width='96'/>
                    <div className='details'>
                        <p className='product ' ><strong className='productDetail'>ID: </strong> {props.product.id}</p> 
                        <p className='product'><strong  className='productDetail'>Name: </strong> {props.product.Name}</p> 
                        <p className='product'><strong  className='productDetail'>Price: </strong>{props.product.Price}</p> 
                    </div>
            </div>
            
            <div className='buttons'>
                <button type="button" className='individualbutton' onClick={()=>{props.increment(props.product.id)}}>+</button>
                <span className='productButton' >{props.product.quantity}</span>
                <button type='button' className='individualbutton' onClick={()=>{props.decrement(props.product.id)}}><strong>-</strong></button>
            </div>
        </div>
    
    );
}

export default Product;