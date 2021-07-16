import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'
import SummarySmallDay from '../kit-shoppingList/SummarySmallDay'
import BtnMonth from './BtnMonth'

function OrderDailySet(props) {
  const {
    shoppingItemDay,
    setShoppingItemDay,
    catDay,
    smallTotalD,
    setSmallTotalD,
  } = props
  //你為什麼在這才能看有沒有進來
  // console.log('你是陣列嗎', Array.isArray(catDay))
  const [clickMon, setClickMon] = useState(1) //紀錄是哪個數字(月份按鈕)被按
  const [clickName, setClickName] = useState('一個月') //紀錄是哪個月份名稱
  const btnDropdown = {
    click: '一個月',
    arr: [
      {
        name: '一個月',
        month: 1,
      },
      {
        name: '二個月',
        month: 2,
      },
      {
        name: '三個月',
        month: 3,
      },
      {
        name: '四個月',
        month: 4,
      },
      {
        name: '五個月',
        month: 5,
      },
    ],
  }
  const btnHalfYear = { name: '半年', month: 6 }
  const btnYear = { name: 'ㄧ年', month: 12 }
  //紀錄誰被按然後送出倍率
  const orderMonth = (o, s) => {
    //函式變數可以自定義有幾種類型 o=obj a=array
    //函式會自己判斷然後算出來
    if (s !== undefined) {
      setClickName(s)
    }
    setClickMon(o)

    console.log('辛酸淚滴', o, s)
  }
  console.log('我就看你是啥', btnDropdown.arr[0].month)
  return (
    <>
      <div className="kit-shopping-list-bg">
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
              setShoppingItemDay={setShoppingItemDay}
              smallTotalD={smallTotalD}
              setSmallTotalD={setSmallTotalD}
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
                  <TiPlus className="TiPlus" size="90px" />
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
