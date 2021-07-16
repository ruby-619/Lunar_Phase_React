import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'
import ScStepRow from './components/ScStepRow'
import ScLabel from './components/ScLabel'
import Footer from '../../components/Footer'
const _ = require('lodash');


function CartItemOrder(props) {
  const { setStep, cartQty, isCon, scOrderId } = props
  const [isHidden, setIsHidden] = useState(true) //下拉選單的顯示與否
  const [order, setOrder] = useState([])

  // 計算總商品數量的函式
  const amountSum = (items) => {
    let totalAmount = 0
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].checkQty
    }
    return totalAmount
  }

  

  async function getOrderFromServer() {
    /* get orderid去取訂單資料 */
    const url = 'http://localhost:4567/orderlist/' + scOrderId
    console.log('scOrderId',scOrderId)

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const dataRes = await response.json()
    console.log('訂單dataRes', dataRes)
    setOrder(dataRes)
     
    console.log('訂單scOrderId', scOrderId)
    // console.log('訂單order', order) //會是空的因為setOrder異步執行
  }
  useEffect(() => {
    getOrderFromServer()
  }, [])

  useEffect(() => {
    console.log('訂單order的變化', order)
  }, [order])

  const toggleIsHidden = () => {
    setIsHidden(!isHidden)
  }
  const ScOrderId = (
    <>
      {/* 訂單編號 */}
      <div className="pb-2 mb-3 titleDivider d-flex justify-content-start align-items-center">
        <div className="scTitle col-2">訂單編號</div>
        <div className="sc-nameFont">{scOrderId}</div>
      </div>
    </>
  )
  const displayItems = (
    <>
      {!_.isEmpty(order) &&
        order.map((item, index) => {
          return (
            <div
              key={item.itemId}
              className="dropdownItem my-2 d-flex align-items-center py-3"
            >
              <div className="col-5 d-flex align-items-center sc-nameFont">
                <div className="itemPic-sm mr-3 overflow-hidden">
                  <img
                    className="h-100"
                    src="/img/Product/mc01-00.jpg"
                    alt=""
                  />
                </div>
                <div>{item.itemName}</div>
              </div>
              <div className="col-1 sc-priceFont">{item.checkQty}</div>
              <div className="col-2 sc-priceFont">$ {item.checkPrice}</div>
              <div className="col-2 sc-priceFont">
                $ {item.checkSubtotal}
              </div>
              <Link className="col-2" to={`/product-detail/${item.itemId}`}>
                <div className="sc-priceFont">商品詳細頁</div>
              </Link>
            </div>
          )
        })}
    </>
  )
  const displayText = (
    <>
      <div
        className="dropdownBtnPanel d-flex justify-content-end align-items-center mt-2 ml-auto"
        onClick={() => {
          toggleIsHidden()
        }}
      >
        <div className="sc-describeFont mx-3">
          訂單金額(<scspan>{!_.isEmpty(order) && amountSum(order)}</scspan> 件商品)
        </div>
        <div className="sc-describePriceFont mx-4">NT{(!_.isEmpty(order) && order[0].orderPrice)-( !_.isEmpty(order) && order[0].shippingPrice)}</div>
        <img
          id="dropdownBtn"
          // className="icon18px dropdownIcon"
          className={`icon18px dropdownIcon ${isHidden ? '' : 'down'}`}
          src="/../img/Cart/dropdownBtn.svg"
          alt=""
        />
      </div>
    </>
  )
  const OrderCon = () => (
    <>
      超商：{!_.isEmpty(order) && order[0].conStore}店
      <br />
      地址：{!_.isEmpty(order) && order[0].conAddress}
      <br />
    </>
  )
  const OrderHome = () => (
    <>
      地址：{!_.isEmpty(order) && order[0].homeAddress}
      <br />
    </>
  )
  const ScOrderData = (
    <>
      {/* 收件地址與資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">收件地址與資料</div>
      </div>
      <div className="ml-5 d-flex mt-3">
        <div className="orderPic">
          <img src="/img/Cart/gift.svg" alt="" />
        </div>
        <div className="sc-contentFont ml-5">
          姓名：{!_.isEmpty(order) && order[0].receiverName}
          <br />
          電話：{!_.isEmpty(order) && order[0].receiverPhone}
          <br />
          {isCon && <OrderCon />}
          {!isCon && <OrderHome />}
        </div>
      </div>
    </>
  )
  const PriceRow = (
    <>
      {/* 總金額：商品小計 + 運費 */}
      <div className="sc-priceListRow">
        <div className="col-3 d-flex justify-content-between p-0 ml-auto">
          <div className="sc-describeFont">商品總金額:</div>
          <div className="sc-describeFont">
            <scspan>NT {(!_.isEmpty(order) && order[0].orderPrice)-( !_.isEmpty(order) && order[0].shippingPrice)}</scspan>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-between p-0 ml-auto">
          <div className="sc-describeFont">運費總金額:</div>
          <div className="sc-describeFont">
            <scspan>NT{!_.isEmpty(order) && order[0].shippingPrice}</scspan>
          </div>
        </div>
      </div>
      {/* 總金額列 */}
      <div className="w-100 d-flex jus justify-content-end my-2 px-0">
        <div className="totalPriceFont col-3 px-0">總計</div>
        <div className="totalPriceFont-med col-3 px-0">
          NT<scspan>${!_.isEmpty(order) && order[0].orderPrice}</scspan>
        </div>
      </div>
    </>
  )

  return (
    <>
      <LunarPhaseNavbar cartQty={cartQty} />
      <Breadcrumb />
      <ScStepRow step={4} setStep={setStep} />
      {/*-------------- 第四頁 --------------*/}
      <ScLabel />
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {/*  bar  */}
          <div className="d-flex select-bar align-items-center"></div>
          <div className="sc-Wrap d-flex flex-column justify-content-around">
            {ScOrderId}
            {/* 訂單商品 */}
            <div className="dropdownItemsTitle d-flex justify-content-between align-items-center pb-2 titleDivider">
              <div className="scTitle col-5">訂單商品</div>
              <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-1`}>
                數量
              </div>
              <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-2`}>
                單價
              </div>
              <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-2`}>
                總價
              </div>
              <div className="col-2" />
            </div>
            <div className={`dropdownItemsPanel ${isHidden ? 'hidden' : ''}`}>
              {displayItems}
            </div>
            {displayText}
            {ScOrderData}
            {PriceRow}
          </div>
        </div>
      </div>
      <div className="my-5"></div>
      <Footer/>
      
    </>
  )
}

export default CartItemOrder
