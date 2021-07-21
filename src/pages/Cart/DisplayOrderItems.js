import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const _ = require('lodash')

function DisplayOrderItems(props) {
  const { scOrderId } = props
  const [order, setOrder] = useState([])
  async function getOrderFromServer() {
    /* get orderid去取訂單資料 */
    const url = 'http://localhost:4567/orderlist/' + scOrderId
    console.log('scOrderId', scOrderId)

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

  return (
    <>
      {!_.isEmpty(order) &&
        order.map((item, index) => {
          return (
            <div className="d-flex key={item.itemId}">
              <div className="dropdownItemNum col-1 d-flex ml-auto my-2 mr-2 align-content-center justify-content-center">{index+1}</div>
              <div
                className="dropdownItemOrder col-10 my-2 d-flex mr-5  align-items-center py-3"
              >
                <div className="col-5 d-flex align-items-center sc-nameFont">
                  <div className="itemPic-sm mr-3 overflow-hidden">
                    <img
                      className="h-100"
                      src={`/img/Product/${item.itemCoverImg}`}
                      alt=""
                    />
                  </div>
                  <div>{item.itemName}</div>
                </div>
                <div className="col-1 sc-priceFont">{item.checkQty}</div>
                <div className="col-2 sc-priceFont">$ {item.checkPrice}</div>
                <div className="col-2 sc-priceFont">$ {item.checkSubtotal}</div>
                <Link className="col-2" to={`/product-detail/${item.itemId}`}>
                  <div className="sc-priceFont">商品詳細頁</div>
                </Link>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default DisplayOrderItems
