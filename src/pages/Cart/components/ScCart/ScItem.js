import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
const _ = require('lodash');

function ScItem(props) {
  const { updateQty } = props
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])

  // function updateQty (){
  //   const orderItems = localStorage.getItem('cart') || 0
  //   const orderItemsArr = JSON.parse(orderItems)
  //   const orderEvents = localStorage.getItem('evcart') || 0
  //   const orderEventsArr = JSON.parse(orderEvents)
  //   const orderKits = localStorage.getItem('kitcart') || 0
  //   const orderKitsArr = JSON.parse(orderKits)

  //   // _.sumBy(orderItemsArr, function(o){return o.amount})
  //   // _.sumBy(orderEventsArr, function(o){return o.amount})
  //   // _.sumBy(orderKitsArr, function(o){return o.amount})
  //   // const newItemsQty = {...cartQty,
  //   //   itemsQty: amountSum(orderItemsArr),
  //   //   eventsQty: amountSum(orderEventsArr),
  //   //   kitsQty: amountSum(orderKitsArr),
  //   //   totalQty: amountSum(orderItemsArr)+amountSum(orderEventsArr)+amountSum(orderKitsArr),
  //   // }
  //   const newItemsQty = {...cartQty,
  //     itemsQty: _.sumBy(orderItemsArr, function(o){return o.amount}),
  //     eventsQty: _.sumBy(orderEventsArr, function(o){return o.amount}),
  //     kitsQty: _.sumBy(orderKitsArr, function(o){return o.amount}),
  //     totalQty: _.sumBy(orderItemsArr, function(o){return o.amount})+_.sumBy(orderEventsArr, function(o){return o.amount})+_.sumBy(orderKitsArr, function(o){return o.amount}),
  //   }
  //   setCartQty(newItemsQty)
  // }

  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'

    updateQty()
    
    console.log(JSON.parse(newCart))
    setMycart(JSON.parse(newCart))
  }
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // componentDidUpdate
  useEffect(() => {
    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    updateQty()
  }

  // 參考ProductList.js中updateCartToLocalStorage概念
  // 製作按下X按鈕執行delItem函式刪除localStorage單筆資料
  const delItem = (item) => {
    // 先複製原有的購物車內容
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // 找尋是否有此筆item.id的對應資料
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      // 找到的話就透過splice來移除array中的那個物件
      // 再更新至localStorage cart之中並且更新Mycart
      currentCart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(currentCart))
      setMycart(currentCart)

      updateQty()
    }
  }

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

   // 計算總商品數量的函式
   const amountSum = (items) => {
    let totalAmount = 0
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].amount
    }
    return totalAmount
  }

  const displayItems = (
    // 商品列
    <>
      {mycartDisplay.map((item, index) => {
        return (
          <div
            key={item.id}
            className="itemRow d-flex bdBottom align-items-center position-relative"
          >
            <div className="col-6 d-flex align-items-center">
              {/* <div className="myCheckbox selectOne ml-4" /> */}
              <div className="itemPic ml-5">
                <img className="w-100" src="/img/Product/mc01-00.jpg" alt=""/>
              </div>
              <div className="sc-nameFont itemName">
                <div className="mb-0">{item.name}</div>
              </div>
            </div>
            <div className="d-flex col-2 justify-content-center">
              <div
                className="sc-qtyFont p-2 scBtn scBtnSub"
                onClick={() => {
                  if (item.amount === 1) return
                  updateCartToLocalStorage(item, false)
                }}
              >
                -
              </div>
              <div className="sc-qtyFont p-2">{item.amount}</div>
              <div
                className="sc-qtyFont p-2 scBtn scBtnAdd"
                onClick={() =>{ updateCartToLocalStorage(item, true)} }
              >
                +
              </div>
            </div>
            <div className="sc-priceFont col-2">{item.price}</div>
            <div className="sc-priceFont col-2">{item.amount * item.price}</div>
            <div
              className="delOne position-absolute scBtn"
              onClick={() => {
                delItem(item)
              }}
            >
              <FaTimes/>
            </div>
          </div>
        )
      })}
    </>
  )

  const ScPriceRow = (
    <>
      {/* 總金額列 */}
      <div className="w-100 priceRow px-0">
        <div className=" col-10 bdBottom d-flex flex-column align-items-center py-5 mx-auto">
          <div className="w-100 totalQtyFont my-2 px-0 py-3 bdBottom">
            共<scspan>{amountSum(mycartDisplay)}</scspan>件商品
          </div>
          <div className="w-100 d-flex jus justify-content-end my-2 px-0">
            <div className="totalPriceFont col-3 px-0">總計</div>
            <div className="totalPriceFont-med col-3 px-0">
              NT<scspan>{sum(mycartDisplay)}</scspan>
            </div>
          </div>
        </div>
      </div>
    </>
  )


  return (
    <>
      {/* {dataLoading ? loading : displayItems} */}
      {displayItems}
      {ScPriceRow}
    </>
  )
}

export default ScItem
