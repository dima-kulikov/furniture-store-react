import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component{
constructor(props) {
  super(props)
  this.state = {
    orders:[],
    currentItems:[],
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
    ],
    showFullItem: false,
    fullItem: {}
  }
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
}


chooseCategory(category){
  if(category === 'all'){
    this.setState({
      currentItems: this.state.items
    })
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}
deleteOrder(id) {
  this.setState({orders: this.state.orders.filter( el => el.id !== id)})
}
addToOrder(item) {
  let isInArray = false;
  this.state.orders.forEach(el => {
    if(el.id === item.id){
      isInArray = true;
    }
  })
  if(!isInArray){
  this.setState({orders:[...this.state.orders, item]});
  }

}

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})

}


  render() {
  return (
    <div className="wrapper">
     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
     <Categories chooseCategory={this.chooseCategory}/>
     <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

     {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} item={this.state.fullItem} onShowItem={this.onShowItem}/>}
     <Footer/>
    </div>
  );
}
}

export default App;


// https://www.youtube.com/watch?v=1njlwbOw6B0&list=PL0lO_mIqDDFVfIjOW2NsBaDYXB_ZwDB0p&index=8
// https://www.youtube.com/watch?v=e04Cc3n0BkU&list=PL0lO_mIqDDFVfIjOW2NsBaDYXB_ZwDB0p&index=9
// 00
