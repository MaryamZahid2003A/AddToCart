import React from 'react';
import Product from './Product'
function productList(props){
    return(
        props.List.map((product)=> {
            return <Product product={product}/>;
        })
        
    );
}
export default productList;