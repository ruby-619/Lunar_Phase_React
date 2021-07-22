import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// Ruby
import EventList from './pages/Event/EventList'
import EventDetail from './pages/Event/EventDetail'
import EventIndex2 from './pages/Event/EventIndex2'
// import Home from './pages/Home'
import EventCategoryCard from './pages/Event/components/EventCategoryCard'
import Calendar from './pages/Event/Calendar1'
import CalendarChild from './pages/Event/CalendarChild'

// Tanya
import ScrollToTop from './components/ScrollToTop'
// pages
import IndexMy from './pages/Index/IndexMy'
import Product from './pages/Product/Product'
import ProductDetail from './pages/Product/ProductDetail'

// 小J
import CartItem from './pages/Cart/CartItem'
import CartEv from './pages/Cart/CartEv'
import CartKit from './pages/Cart/CartKit'
import DisplayBookMark from './pages/Cart/DisplayBookMark'
import DisplayOrder from './pages/Cart/DisplayOrder'

// 晴
import ArticleIndex1 from './pages/article/ArticleIndex1.js'
import ArticleIndex2 from './pages/article/ArticleIndex2.js'
import ArticleIndex3 from './pages/article/ArticleIndex3.js'
import ArticleHealth from './pages/article/ArticleHealth.js'
import ArticleDetail from './pages/article/ArticleDetail.js'
import PeriodRecord from './pages/article/PeriodRecord.js'

// Apple
import KitIndex from './pages/Kit/KitIndex'
import KitTest from './pages/Kit/KitTest'
import KitSetList from './pages/Kit/KitSetList'
import KitShoppingList from './pages/Kit/KitShoppingList'
import Calendar1 from './pages/Event/Calendar1'
import CalendarChild2 from './pages/Event/CalendarChild2'

// Moana
import Login from './pages/Member/Login/Login'
import Account from './pages/Member/Account/Account'
import Profile from './pages/Member/Profile/Profile'
import OrderList from './pages/Member/OrderList/OrderList'

const _ = require('lodash')

function App() {
  /* J */
  const [cartQty, setCartQty] = useState({
    itemsQty: 0,
    eventsQty: 0,
    kitsQty: 0,
    totalQty: 0,
  })

  const [bmQty, setBmQty] = useState({
    itemsQty: 0,
    eventsQty: 0,
    arQty: 0,
    totalQty: 0,
  })

  function updateQty() {
    const orderItems = localStorage.getItem('cart') || 0
    const orderItemsArr = JSON.parse(orderItems)
    const orderEvents = localStorage.getItem('evcart') || 0
    const orderEventsArr = JSON.parse(orderEvents)
    const orderKits = localStorage.getItem('kitcart') || 0
    const orderKitsArr = JSON.parse(orderKits)

    const newItemsQty = {
      ...cartQty,
      itemsQty: _.sumBy(orderItemsArr, function (o) {
        return o.amount
      }),
      eventsQty: _.sumBy(orderEventsArr, function (o) {
        return o.amount
      }),
      kitsQty: _.sumBy(orderKitsArr, function (o) {
        return o.amount
      }),
      totalQty:
        _.sumBy(orderItemsArr, function (o) {
          return o.amount
        }) +
        _.sumBy(orderEventsArr, function (o) {
          return o.amount
        }) +
        _.sumBy(orderKitsArr, function (o) {
          return o.amount
        }),
    }
    setCartQty(newItemsQty)
  }

  function updateBmQty() {
    const localPdBookmark = localStorage.getItem('bookmark') || 0
    const localPdBookmarkArr = JSON.parse(localPdBookmark)
    const localEvBookmark = localStorage.getItem('evbookmark') || 0
    const localEvBookmarkArr = JSON.parse(localEvBookmark)
    const localArBookmark = localStorage.getItem('arbookmark') || 0
    const localArBookmarkArr = JSON.parse(localArBookmark)

    const newBmQty = {
      ...bmQty,
      itemsQty: _.size(localPdBookmarkArr),
      eventsQty: _.size(localEvBookmarkArr),
      arQty: _.size(localArBookmarkArr),
      totalQty:
        _.size(localPdBookmarkArr) +
        _.size(localEvBookmarkArr) +
        _.size(localArBookmarkArr),
    }

    console.log('_.size(localPdBookmarkArr)', _.size(localPdBookmarkArr))
    console.log('_.size(localEvBookmarkArr)', _.size(localEvBookmarkArr))
    console.log('_.size(localArBookmarkArr)', _.size(localArBookmarkArr))
    console.log('bmQty', bmQty)
    setBmQty(newBmQty)
  }

  // Moana
  const [parendUser, setParendUser] = useState({})

  return (
    <Router>
      <>
        {/* 路由表 */}

        <Switch>
          <ScrollToTop>
            <Route path="/category/:id?">
              <EventCategoryCard cartQty={cartQty} bmQty={bmQty} />
            </Route>
            <Route path="/event-list">
              <EventList cartQty={cartQty} bmQty={bmQty} updateBmQty={updateBmQty} />
            </Route>
            <Route path="/event-detail/:id?">
              <EventDetail cartQty={cartQty} bmQty={bmQty} updateBmQty={updateBmQty} updateQty={updateQty} />
            </Route>
            <Route path="/event">
              <EventIndex2 renderItem cartQty={cartQty} bmQty={bmQty} updateBmQty={updateBmQty} updateQty={updateQty}/>
            </Route>
            <Route exact path="/calendar">
              <Calendar1 cartQty={cartQty} bmQty={bmQty} updateBmQty={updateBmQty} updateQty={updateQty}/>
            </Route>
            <Route exact path="/calendar-child">
              <CalendarChild cartQty={cartQty} bmQty={bmQty} updateBmQty={updateBmQty} updateQty={updateQty}/>
            </Route>
            <Route exact path="/calendar-child2">
              <CalendarChild2 cartQty={cartQty} bmQty={bmQty} updateBmQty={updateBmQty} updateQty={updateQty}/>
            </Route>

            {/* J */}
            <Route path="/order">
            <DisplayOrder cartQty={cartQty} bmQty={bmQty} 
            updateBmQty={updateBmQty} updateQty={updateQty}              
            />
          </Route>
            <Route path="/bookmark">
              <DisplayBookMark
                cartQty={cartQty}
                bmQty={bmQty}
                updateBmQty={updateBmQty}
                updateQty={updateQty}              
              />
            </Route>
            <Route path="/cart/event">
              <CartEv 
                updateBmQty={updateBmQty}
                updateQty={updateQty}
                cartQty={cartQty}
                bmQty={bmQty}
                setCartQty={setCartQty} />
            </Route>
            <Route path="/cart/kit">
              <CartKit 
                updateBmQty={updateBmQty}
                updateQty={updateQty}
                cartQty={cartQty}
                bmQty={bmQty}
                setCartQty={setCartQty} />
            </Route>

            <Route path="/cart/item">
              <CartItem 
                updateBmQty={updateBmQty}
                updateQty={updateQty}
                cartQty={cartQty}
                bmQty={bmQty}
                setCartQty={setCartQty}
              />
            </Route>
            {/* J */}

            {/* Tanya Route */}
            <Route path="/product">
              <Product
                cartQty={cartQty}
                updateQty={updateQty}
                bmQty={bmQty}
                updateBmQty={updateBmQty}
              />
            </Route>
            <Route path="/product-detail/:itemId">
              <ProductDetail
                cartQty={cartQty}
                updateQty={updateQty}
                bmQty={bmQty}
                updateBmQty={updateBmQty}
              />
            </Route>
            <Route exact path="/">
              <IndexMy 
                cartQty={cartQty}
                updateQty={updateQty}
                bmQty={bmQty}
                updateBmQty={updateBmQty} />
            </Route>
            {/* <Route exact path="/">
            <Home />
          </Route> */}
            {/* Tanya Route */}

            {/* 晴 */}
            <Route path="/article/health">
              <ArticleHealth cartQty={cartQty} bmQty={bmQty} />
            </Route>

            <Route path="/article/detail/:id?">
              <ArticleDetail cartQty={cartQty} bmQty={bmQty} updateBmQty={updateBmQty} />
            </Route>
            <Route path="/periodrecord">
              <PeriodRecord cartQty={cartQty} bmQty={bmQty} />
            </Route>

            <Route path="/article1">
              <ArticleIndex1 cartQty={cartQty} bmQty={bmQty}  
                updateBmQty={updateBmQty}
                updateQty={updateQty} />
            </Route>
            <Route path="/article2">
              <ArticleIndex2 cartQty={cartQty} bmQty={bmQty} />
            </Route>
            <Route path="/article3">
              <ArticleIndex3 cartQty={cartQty} bmQty={bmQty} />
            </Route>
            {/* 晴 */}

            {/* Apple */}
            <Route path="/kitIndex">
              <KitIndex 
                cartQty={cartQty} bmQty={bmQty} 
                updateBmQty={updateBmQty}
                updateQty={updateQty}
              />
            </Route>
            <Route path="/kitTest">
              <KitTest cartQty={cartQty} bmQty={bmQty} />
            </Route>
            <Route path="/kitSetList">
              <KitSetList cartQty={cartQty} bmQty={bmQty} />
            </Route>
            <Route path="/kitShoppingList">
              <KitShoppingList cartQty={cartQty} bmQty={bmQty} />
            </Route>
            {/* Apple */}

            {/* moana */}

            <Route path="/member/orderList">
              <OrderList parendUser={parendUser} cartQty={cartQty} bmQty={bmQty} />
            </Route>
            <Route path="/member/profile">
              <Profile parendUser={parendUser} cartQty={cartQty} bmQty={bmQty} />
            </Route>
            <Route path="/member/account">
              <Account parendUser={parendUser} cartQty={cartQty} bmQty={bmQty} />
            </Route>
            <Route path="/login">
              <Login setParendUser={setParendUser} cartQty={cartQty} bmQty={bmQty} />
            </Route>

            {/* moana */}
          </ScrollToTop>
        </Switch>
      </>
    </Router>
  )
}

export default App
