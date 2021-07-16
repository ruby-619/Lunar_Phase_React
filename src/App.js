import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// Ruby
import EventList from './pages/Event/EventList'
import EventDetail from './pages/Event/EventDetail'
import EventIndex2 from './pages/Event/EventIndex2'
import Home from './pages/Home'
import EventCategoryCard from './pages/Event/components/EventCategoryCard'

// Tanya
import ScrollToTop from './components/ScrollToTop'
// pages
import IndexMy from './pages/Index/IndexMy'
import Product from './pages/Product/Product'
import ProductDetail from './pages/Product/ProductDetail'

// 小J
import CartItem from './pages/Cart/CartItem'
import CartEv from './pages/Cart/CartEv'


const _ = require('lodash');


function App() {

  /* J */
  const [cartQty, setCartQty] = useState(
    {
      itemsQty: 0,
      eventsQty: 0,
      kitsQty: 0,
      totalQty: 0,
    })
  
    function updateQty (){
      const orderItems = localStorage.getItem('cart') || 0
      const orderItemsArr = JSON.parse(orderItems)
      const orderEvents = localStorage.getItem('evcart') || 0
      const orderEventsArr = JSON.parse(orderEvents)
      const orderKits = localStorage.getItem('kitcart') || 0
      const orderKitsArr = JSON.parse(orderKits)
  
      const newItemsQty = {...cartQty,
        itemsQty: _.sumBy(orderItemsArr, function(o){return o.amount}),
        eventsQty: _.sumBy(orderEventsArr, function(o){return o.amount}),
        kitsQty: _.sumBy(orderKitsArr, function(o){return o.amount}),
        totalQty: _.sumBy(orderItemsArr, function(o){return o.amount})+_.sumBy(orderEventsArr, function(o){return o.amount})+_.sumBy(orderKitsArr, function(o){return o.amount}),
      }
      setCartQty(newItemsQty)
    }
  




  return (
    <Router>
      <>
        
        {/* 路由表 */}

        <Switch>
          <ScrollToTop>
          <Route path="/category/:id?">
            <EventCategoryCard />
          </Route>
          <Route path="/event-list">
            <EventList />
          </Route>
          <Route path="/event-detail/:id?">
            <EventDetail />
          </Route>
          <Route path="/event">
            <EventIndex2 renderItem />
          </Route>

          {/* J */}
          <Route path="/cart/event">
            <CartEv 
            />
          </Route>
          
          <Route path="/cart/item">
            <CartItem 
              updateQty={updateQty}
              cartQty={cartQty}
              setCartQty={setCartQty}
            />
          </Route>
          {/* J */}

          {/* Tanya Route */}
          <Route path="/product">
              <Product />
            </Route>
            <Route path="/product-detail/:itemId">
              <ProductDetail />
            </Route>
            <Route exact path="/">
              <IndexMy />
            </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* Tanya Route */}
          </ScrollToTop>
        </Switch>
      </>
    </Router>
  )
}

export default App
