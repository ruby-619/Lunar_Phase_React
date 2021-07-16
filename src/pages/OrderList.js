import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../components/LunarPhaseNavbar'

function OrderList() {
  const [orderAll, setOrderAll] = useState([]) //初始資料

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
  }, [])

  return (
    <>
      <LunarPhaseNavbar />
      <div className="col-10 mt-5 mx-auto">
        <h2>訂單查詢</h2>
        {orderAll.map((v, i) => {
          return (
            <div className="my-2 d-flex align-items-center py-3">
              <div className="col-5 d-flex align-items-center sc-nameFont">
                <div className="itemPic-sm mr-3" />
                <div>訂單號{v.orderId}</div>
              </div>
              <div className="col-1 sc-priceFont">訂購人{v.username}</div>
              <div className="col-1 sc-priceFont">金額$ {v.orderPrice}</div>
              <div className="col-1 sc-priceFont">運費$ {v.shippingPrice}</div>
              <div className="col-1 sc-priceFont">付款方式 {v.paymentType}</div>
              <div className="col-1 sc-priceFont">訂購時間 {v.created_at}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OrderList
