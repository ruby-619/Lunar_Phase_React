import React from 'react'

function ScPriceRowCheck(props) {
  const {orderItemsStr, sum, shipPrice} = props

  // let ShipPrice = JSON.parse(localStorage.getItem('ShipPrice'))
  
  return (
    <>
      {/* 總金額：商品小計 + 運費 */}
      <div className="sc-priceListRow">
        <div className="col-3 d-flex justify-content-between p-0 ml-auto">
          <div className="sc-describeFont">商品總金額:</div>
          <div className="sc-describeFont">
            <scspan>NT {sum(orderItemsStr)}</scspan>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-between p-0 ml-auto">
          <div className="sc-describeFont">運費總金額:</div>
          <div className="sc-describeFont">
            <scspan>NT {shipPrice}</scspan>
          </div>
        </div>
      </div>
      {/* 總金額列 */}
      <div className="w-100 d-flex jus justify-content-end my-2 px-0">
        <div className="totalPriceFont col-3 px-0">總計</div>
        <div className="totalPriceFont-med col-3 px-0">
          NT<scspan>${sum(orderItemsStr)+shipPrice}</scspan>
        </div>
      </div>
    </>
  )
}

export default ScPriceRowCheck
