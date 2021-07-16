import React from 'react'
const _ = require('lodash');

function ScItemChecked(props) {
  const {isHidden, toggleIsHidden, orderItemsStr, amountSum, sum} = props

  const displayItems = (
    <>
    {!_.isEmpty(orderItemsStr) && orderItemsStr.map((item, index)=>{
      return (
        <div key={item.id} className="dropdownItem my-2 d-flex align-items-center py-3">
          <div className="col-5 d-flex align-items-center sc-nameFont">
            <div className="itemPic-sm mr-3 overflow-hidden">
              <img className="h-100" src="/img/Product/mc01-00.jpg" alt=""/>
            </div>
            <div>{item.name}</div>
          </div>
          <div className="col-1 sc-priceFont">{item.amount}</div>
          <div className="col-2 sc-priceFont">$ {item.price}</div>
          <div className="col-2 sc-priceFont">$ {item.amount * item.price}</div>
          <div className="col-2 sc-priceFont">商品詳細頁</div>
        </div>
      )
    })}
    </>
  )
  const displayText = (
    <>
      <div className="dropdownBtnPanel d-flex justify-content-end align-items-center mt-2 ml-auto"
      onClick={()=>{toggleIsHidden()}}>
        <div className="sc-describeFont mx-3">
          訂單金額(<scspan>{amountSum(orderItemsStr)}</scspan> 件商品)
        </div>
        <div className="sc-describePriceFont mx-4">NT{sum(orderItemsStr)}</div>
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

  return (
    <>
      {/* 訂單商品 */}
      <div className="dropdownItemsTitle d-flex justify-content-between align-items-center pb-2 titleDivider">
        <div className="scTitle col-5">訂單商品</div>
        <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-1`}>數量</div>
        <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-2`}>單價</div>
        <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-2`}>總價</div>
        <div className="col-2" />
      </div>
      <div className={`dropdownItemsPanel ${isHidden ? 'hidden' : ''}`}>
        {displayItems}
      </div>
      {displayText}
      
      
    </>
  )
}

export default ScItemChecked
