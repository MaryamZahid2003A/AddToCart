import React from 'react'
import './App.css';
import ProductList from './ProductList';
import { useState } from 'react';
import ShowCart from './ShowCart';
function App() {
  const List=[
    {
      id:1,
      img:"https://media.istockphoto.com/id/1356587396/photo/shampoo-and-hair-conditioner-bottle-with-soapy-bubbles-beauty-hair-care-cosmetic-packaging.jpg?s=612x612&w=0&k=20&c=jM2woyBay4kGCbVsLVqvx1ZXWDU6KLAGGan3DMoTFgU=",
      Name:"Shampoo",
      add:"false",
      Price:200,
      quantity:0
    },
    {
      id:2,
      Name:"Lotion",
      img:"https://physiogelpakistan.com/cdn/shop/files/Allproduct1stimages-07_1024x1024.jpg?v=1700547686",
      add:"false",
      Price:200,
      quantity:0
    },
    {
      id:3,
      Name:"Wooden Box",
      img:"https://i.pinimg.com/736x/01/aa/00/01aa00b7b3fa932a02fc1b2290378a44.jpg",
      add:"false",
      Price:200,
      quantity:0
    },
    {
      id:4,
      Name:"Shampoo",
      img:"https://physiogelpakistan.com/cdn/shop/files/Allproduct1stimages-07_1024x1024.jpg?v=1700547686",
      add:"false",
      Price:200,
      quantity:0
    },
    {
      id:5,
      Name:"Juice",
      img:"https://cdn.cdnparenting.com/articles/2019/01/10122448/192709250-H-1024x700.webp",
      add:"false",
      Price:200,
      quantity:0
    },
    {
      id:6,
      Name:"Shampoo",
      img:"https://physiogelpakistan.com/cdn/shop/files/Allproduct1stimages-07_1024x1024.jpg?v=1700547686",

      add:"false",
      Price:200,
      quantity:0
    },
    {
      id:7,
      Name:"Toys",
      img:"https://m.media-amazon.com/images/I/51j3+ymeRNL._SL500_.jpg",
      add:"false",
      
      Price:1200,
      quantity:0
    },
    {
      id:8,
      Name:"Cold Drinks",
      img:"https://naturals.pk/cdn/shop/products/soft-drink-can.jpg?v=1589057207",
      add:"false",
      Price:900,
      quantity:0
    },
    {
      id:9,
      Name:"Camera",
      img:"https://www.instaxus.com/wp-content/uploads/2022/09/CNY_PR34666_mini11_PURPLE_FRONT_sRGB_V1b_for-web.png",
      add:"false",
      Price:2000,
      quantity:0
    },
    {
      id:10,
      Name:"Soap",
      img:"https://www.medigreen.pk/store/wp-content/uploads/Lavender-Soap.png",
      add:"false",
      Price:100,
      quantity:0
    },
    {
      id:11,
      Name:"Conditioner",
      img:"https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1233806-1.jpg",
      add:"false",
      Price:400,
      quantity:0
    },
    {
      id:12,
      Name:"Decorations",
      img:"https://i.pinimg.com/564x/57/54/c3/5754c36b9b3277a2601cabc645ef1411.jpg",
      add:"false",
      Price:600,
      quantity:0
    },
    {
      id:13,
      Name:"Oil",
      img:"https://chiltanpure.com/cdn/shop/products/coconut-oil-for-hair-skin-antiseptic-moisturizer-supports-hair-nourishment-935232.jpg?v=1683818815",
      add:"false",
      Price:1000,
      quantity:0
    },
    {
      id:14,
      Name:"Brush",
      img:"https://revolutionbeauty.pk/cdn/shop/products/LargePowderBrush_1200x.png?v=1666158078",
      add:"false",
      Price:100,
      quantity:0
    }
  ]
  const[showNotification,setshowNotifications]=useState('false');
  const[notification,setNotification]=useState('');
  const [boolean,setBoolean]=useState('false');

let [increase,setIncrease]=useState(List);
   const  increment = (index) => {
    let x=[...increase]
    x[index-1].quantity++
    setIncrease(x);
    setNotification('${product.name} is added');
    setshowNotifications(true);
    setBoolean('true');
    setTimeout(() => {
      setshowNotifications(false);
    }, 3000);
  }
  let [Decrease,setDecrease]=useState(List);
    const  decrement = (index) => {
      let x=[...Decrease]
      //
      x[index-1].quantity?  x[index-1].quantity-- : x[index-1].quantity=0;
      //
      setDecrease(x);
      if(x[index-1].quantity==0){
        x[index-1].add=false;
        setBoolean(x) 
      }
   }
   
  return (
    <>
    <h1 className='addCart'>Add To Cart</h1>
    <div className='menu'>
      <ProductList  List={increase} increment={increment} decrement={decrement}/>
      {showNotification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}
      <ShowCart  List={increase}/>
      
    </div>
      <button type="button" ><strong>Continue To Billing</strong>
      {/* {List.map((product) => {
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
      }) }*/
      }
     </button>
    </>
  );
}

export default App;
