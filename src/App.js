import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component{
constructor(props) {
  super(props)
  this.state = {
    orders:[],
    items:[
      {
        id:1,
        title: 'Стул серый',
        img: 'chairs-1.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'chairs',
        price: '34.99'
      },
      {
        id:2,
        title: 'Стол',
        img: 'tables-1.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'tables',
        price: '134.99'
      },
      {
        id:3,
        title: 'Диван',
        img: 'sofa-1.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'sofa',
        price: '234.99'
      },
      {
        id:4,
        title: 'Лампа',
        img: 'light-1.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'light',
        price: '44.20'
      },
      {
        id:5,
        title: 'Стул черный',
        img: 'chairs-2.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'chairs',
        price: '56.49'
      },
      {
        id:6,
        title: 'Стол',
        img: 'tables-2.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'tables',
        price: '199.99'
      },
      {
        id:7,
        title: 'Диван',
        img: 'sofa-2.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'sofa',
        price: '456.25'
      },
      {
        id:8,
        title: 'Лампа',
        img: 'light-2.jpg',
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, illum at?",
        category: 'light',
        price: '72.15'
      },
    ]
  }
  this.addToOrder = this.addToOrder.bind(this)
}

addToOrder(item) {

}



  render() {
  return (
    <div className="wrapper">
     <Header/>
     <Items items={this.state.items}/>
     <Footer/>
    </div>
  );
}
}

export default App;


// https://www.youtube.com/watch?v=JyU2RbwYxJA&list=PL0lO_mIqDDFVfIjOW2NsBaDYXB_ZwDB0p&index=4
// 00
