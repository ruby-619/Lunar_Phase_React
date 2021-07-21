import React from 'react'
import { TiPlus } from 'react-icons/ti'
import SummarySmallDay from './SummarySmallDay'
import BtnMonth from './BtnMonth'

function OrderDailySet(props) {
  const {
    shoppingItemDay,
    catDay,
    sumDaySmall,
    smallTotalD,
    clickMon,
    clickName,
    orderMonth,
    btnDropdown,
    btnHalfYear,
    btnYear,
  } = props
  //你為什麼在這才能看有沒有進來
  // console.log('你是陣列嗎', Array.isArray(catDay))

  return (
    <>
      <div className="kit-shopping-list-bg-day">
        <div className="kit-shopping-list-wrap">
          {/* <!-- 組合名稱＋右上方總計 --> */}
          <div className="kit-shopping-list-set-title">
            {/* <!-- 組合名稱 --> */}
            <div>
              {/* 本人(true為存在所以要大於0)＋本人的長度 */}
              {catDay && catDay.length > 0 ? (
                <div className="set-title">{catDay[0].kitCategoryName}</div>
              ) : (
                <div className="set-title"></div>
              )}
            </div>
            {/* <!-- 右上方總計區塊 --> */}
            <SummarySmallDay
              shoppingItemDay={shoppingItemDay}
              sumDaySmall={sumDaySmall}
              smallTotalD={smallTotalD}
              clickMon={clickMon}
            />
          </div>
          <div className="kit-shopping-list-product">
            {/* <!-- 商品圖片區＋PLUS --> */}
            {shoppingItemDay.map((Item, index) => (
              <div className="d-flex">
                <div className="kit-shopping-list-product-wrap">
                  <div>
                    <img
                      className="kit-shopping-list-items-img"
                      src={`/img/Kit/${Item.kitImg}`}
                      alt=""
                    />
                  </div>
                  <div className="kit-shopping-list-items-text">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: Item.itemName,
                      }}
                    ></p>
                  </div>
                </div>
                {index === shoppingItemDay.length - 1 ? (
                  <div></div>
                ) : (
                  <TiPlus className="TiPlus" size="85px" />
                )}
              </div>
            ))}
          </div>
          {/* <!-- 按鈕 --> */}
          <BtnMonth
            clickMon={clickMon}
            clickName={clickName}
            orderMonth={orderMonth}
            btnDropdown={btnDropdown}
            btnHalfYear={btnHalfYear}
            btnYear={btnYear}
          />
        </div>
      </div>
    </>
  )
}

export default OrderDailySet
