import React from 'react';
import Product from './Product'
import './App.css';

function ProductList(props){
    return(
        
        props.List.map((product,i)=> {
            return <div className='ProductItem'><Product product={product} key={product.id} increment={props.increment}/></div>;
        })     
    );
}
export default ProductList;