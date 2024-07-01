import React from 'react';
import Product from './Product'
import './App.css';

function ProductList(props){
    return(
        
        props.List.map((product,i)=> {
            return <div className='ProductItem'  key={product.id}><Product product={product}  increment={props.increment} decrement={props.decrement}/></div>;
        })     
    );
}
export default ProductList;