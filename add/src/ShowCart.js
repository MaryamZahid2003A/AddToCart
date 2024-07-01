import React from 'react'
  function ShowCart(props){
    return(
       
            props.List.map((product) => {
                product.add? 
                    <div className='productflex'>
                        <img src={product.img} alt={product.Name} className='productImage' height='96' width='96'/>
                        <div className='details'>
                            <p className='product ' ><strong className='productDetail'>ID: </strong> {product.id}</p> 
                            <p className='product'><strong  className='productDetail'>Name: </strong> {product.Name}</p> 
                            <p className='product'><strong  className='productDetail'>Price: </strong>{product.Price}</p> 
                        </div>
                    </div> 
                :<p>Nothing In The Cart</p>
            })
        
    );
  }
  export default ShowCart;