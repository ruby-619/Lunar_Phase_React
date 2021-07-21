import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'
import OrLabel from './components/OrLabel'
import Footer from '../../components/Footer'
import DisplayOrderItems from './DisplayOrderItems'
var moment = require('moment') //日期格式化需要引入
const _ = require('lodash')

function DisplayOrder(props) {
  const { cartQty, bmQty, updateBmQty,updateQty } = props

//   const [isHidden, setIsHidden] = useState([0,0,0,0,0,0,0,0,0,0]) //下拉選單的顯示與否
  const [isHidden, setIsHidden] = useState([1,1,1,1,1,1,1,1,1,1]) //下拉選單的顯示與否
  const [orderAll, setOrderAll] = useState([]) //初始資料
  const [order, setOrder] = useState([])

  async function getOrderListFromServer() {
    const url = 'http://localhost:4567/orderlist'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setOrderAll(data.data)
  }

  useEffect(() => {
    getOrderListFromServer()
    updateBmQty()
    updateQty()
  }, [])

  function toggleIsHidden (i) {
    const newHidden = [...isHidden]
    newHidden[i]= newHidden[i] === 1 ? 0 : 1
    setIsHidden(newHidden)
  }
  const ScBar = (
    <>
      {/* bar */}
      <div className="d-flex bmbar align-items-center bdBottom">
        <div className="sc-contentFont ml-3"></div>
      </div>
    </>
  )
  const ScFormTitle = (
    <>
      {/* 列表標題 */}
      <div className="d-flex sc-formTitle bdBottom py-1">
        <div className="col-2 p-0">訂購時間(狀態)</div>
        <div className="col-2 p-0">訂單編號</div>
        <div className="col-1 p-0">取貨人</div>
        <div className="col-1 p-0">金額</div>
        <div className="col-1 p-0">付款方式</div>
        <div className="col-1 p-0">物流</div>
        <div className="col-4 p-0">地址</div>
      </div>
    </>
  )

  const OrderDisplay = () => (
    <>
      { orderAll?.map((v, i) => {
          console.log('hihi')
        return (
          
          <React.Fragment key={v.orderId}>
            <div
              className="d-flex orderDisplay dropdownBtnPanel"
              onClick={() => {
                toggleIsHidden(i)
              }}
            >
              <div className="col-2 p-0">
                {moment(v.created_at).format('YYYY-MM-DD')} ({v.orCondition})
              </div>
              <div className="col-2 p-0">{v.orderId}</div>
              <div className="col-1 p-0">{v.receiverName}</div>
              <div className="col-1 p-0">{v.orderPrice}</div>
              <div className="col-1 p-0">{v.paymentType}</div>
              <div className="col-1 p-0">{v.shippingType}</div>
              <div className="col-4 p-0">
                {v.conStore ? v.conStore : v.homeAddress}
              </div>
            </div>
            {/* {console.log(isHidden[i])} */}
            <div className={`dropdownItemsPanel orderBg ${isHidden[i] ? 'hidden' : ''}`}>
             <DisplayOrderItems
               scOrderId={v.orderId}
             />
            </div>
          </React.Fragment>
        )
      })}
    </>
  )

  console.log(orderAll)
  
  return (
    <>
      <LunarPhaseNavbar bmQty={bmQty} cartQty={cartQty} />
      <Breadcrumb />
      {/* 背景山 */}
      <div className="bmbgMountainRow container-fluid p-0">
        <div className="bmbgMountain position-absolute">
          <img src="/img/Cart/bgMountain.svg" alt="" />
        </div>
      </div>
      <OrLabel />
      <div className="container-fluid">
        <div className="orderWrap col-10 mx-auto px-0 shadow-sm orderContentFont">
          {ScBar}
          {ScFormTitle}
          <OrderDisplay/>
          {/* {OrderDisplay} */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DisplayOrder