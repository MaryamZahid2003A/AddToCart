import React from 'react'
import './App.css';
import productList from './productList';

function App() {
  let List=[
    {
      id:1,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:2,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:3,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:4,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:5,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:6,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:7,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:8,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:9,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:10,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:11,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    },
    {
      id:12,
      Name:"Shampoo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolorum non, a, aliquam cupiditate cumque ...",
      Price:200,
      quantity:0
    }
  ]
  return (
    <>
    <h1 className='addCart'>Add To Cart</h1>
    <div className='menu'>
      <productList  List={List}/>
    </div>

    </>
  );
}

export default App;
