import React from 'react'

function SummaryBig(props) {
  const {
    catDay,
    catEp,
    clickName,
    handle,
    smallTotalD,
    smallTotalE,
    total,
  } = props
  const _ = require('lodash')
  //計算總價的方式
  console.log('現在應該只有日常', total)

  return (
    <>
      <div className="kit-shopping-list-total-area">
        <div className="kit-shopping-list-total">
          {/* <!-- 項目區塊(上) --> */}
          <div className="kit-items">
            {/* <!-- 單項塊 --> */}
            <div className="kit-item-wrap">
              <div className="kit-item-box">
                <div className="kit-total-item">
                  {catDay && catDay.length > 0 ? (
                    <div className="kit-item kit-item-name">
                      {catDay[0].kitCategoryName + '(' + clickName + ')'}
                    </div>
                  ) : (
                    <div className="kit-item kit-item-name"></div>
                  )}
                </div>
                <div className="kit-total-item">
                  <div className="kit-item">NT$</div>
                  <div className="kit-item">{smallTotalD}</div>
                </div>
              </div>
            </div>
            <div className="kit-item-wrap">
              {handle ? (
                <div className="kit-item-box">
                  <div className="kit-total-item">
                    {catEp ? (
                      <div className="kit-item kit-item-name">
                        {catEp.kitCategoryName}
                      </div>
                    ) : (
                      <div className="kit-item kit-item-name"></div>
                    )}
                  </div>
                  <div className="kit-total-item">
                    <div className="kit-item">NT$</div>
                    {handle ? (
                      <div className="kit-item">{smallTotalE}</div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
          </div>
          {/* <!-- 項目區塊＋頂線(下) --> */}
          <div className="kit-total-box-solid">
            <div className="kit-total">總計</div>
            <div className="kit-total-price">
              <div className="kit-total kit-total-name">NT$</div>
              <div className="kit-total kit-total-red">{total}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SummaryBig
