import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component{
constructor(props) {
  super(props)
  this.state = {
    items:[
      {
        id:1,
        title: 'Стул серый',
        img: './img/chairs-1.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'chairs',
        price: '34.99'
      },
      {
        id:2,
        title: 'Стол',
        img: './img/tables-1.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'tables',
        price: '134.99'
      },
      {
        id:3,
        title: 'Диван',
        img: '',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'sofa',
        price: '234.99'
      },
      {
        id:4,
        title: 'Лампа',
        img: '',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'light',
        price: '44.20'
      },
      {
        id:5,
        title: 'Стул черный',
        img: './img/chairs-1.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'chairs',
        price: '56.49'
      },
      {
        id:6,
        title: 'Стол',
        img: './img/tables-2.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'tables',
        price: '199.99'
      },
      {
        id:7,
        title: 'Диван',
        img: '',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'sofa',
        price: '456.25'
      },
      {
        id:8,
        title: 'Лампа',
        img: '',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'light',
        price: '72.15'
      },
    ]
  }
}


  render() {
  return (
    <div className="wrapper">
     <Header/>
     <Footer/>
    </div>
  );
}
}

export default App;


// https://www.youtube.com/watch?v=5XAz9-diwuA&list=PL0lO_mIqDDFVfIjOW2NsBaDYXB_ZwDB0p&index=3
// 3-35
