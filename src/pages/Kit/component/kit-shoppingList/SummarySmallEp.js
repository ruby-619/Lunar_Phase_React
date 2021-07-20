import React from 'react'

function SummarySmallEp(props) {
  const { shoppingItemEp, smallTotalE, sumEpSmall } = props
  console.log('說吧你到底是不是被選到的環保組合', shoppingItemEp)
  // 計算總價的函式
  //因為週期的關係，一開始可能陣列裡面沒有值，所以要判斷他是陣列&&有值的時候才行動

  return (
    <>
      <div className="sale-price-s">
        <div className="set1-total-s">總金額</div>
        <div className="set1-total-box set1-total-box-inlineblock">
          <div className="set1-total">NT$</div>
          <div className="set1-total-red">{smallTotalE}</div>
        </div>
        <div>
          <s className="set1-total-box">
            <div className="set1-total">原價NT$</div>
            <div className="set1-total">{sumEpSmall(shoppingItemEp)}</div>
          </s>
        </div>
      </div>
    </>
  )
}

export default SummarySmallEp
