import React from 'react'
import './App.css';
import ProductList from './ProductList';
import { useState } from 'react';

function App() {
  const List=[
    {
      id:1,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:2,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:3,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:4,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:5,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:6,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:7,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:8,
      Name:"Cold Drinks",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:900,
      quantity:0
    },
    {
      id:9,
      Name:"Camera",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:2000,
      quantity:0
    },
    {
      id:10,
      Name:"Soap",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:100,
      quantity:0
    },
    {
      id:11,
      Name:"Conditioner",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:400,
      quantity:0
    },
    {
      id:12,
      Name:"Decorations",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:600,
      quantity:0
    },
    {
      id:13,
      Name:"Oil",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:1000,
      quantity:0
    },
    {
      id:14,
      Name:"Brush",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam cupiditate cumque ...",
      Price:100,
      quantity:0
    }
  ]
const [increase,setIncrease]=useState(List);
   const increment = (index) => {
    let x=[...increase]
    x[index].quantity++;
    setIncrease(x);
  }
  return (
    <>
    <h1 className='addCart'>Add To Cart</h1>
    <div className='menu'>
      <ProductList  List={List} increment={increment}/>
    </div>

    </>
  );
}

export default App;
