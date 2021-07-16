import React from 'react'

function SummaryBig(props) {
  const { catDay, catEp, smallTotalD, smallTotalE, total } = props
  //計算總價的方式

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
                    {catDay[0].kitCategoryName}
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
              <div className="kit-item-box">
                <div className="kit-total-item">
                  {catDay && catEp.length > 0 ? (
                    <div className="kit-item kit-item-name">
                      {catEp[0].kitCategoryName}
                    </div>
                  ) : (
                    <div className="kit-item kit-item-name"></div>
                  )}
                </div>
                <div className="kit-total-item">
                  <div className="kit-item">NT$</div>
                  <div className="kit-item">{smallTotalE}</div>
                </div>
              </div>
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
