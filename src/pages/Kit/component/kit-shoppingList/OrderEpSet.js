import React from 'react'
import { TiPlus } from 'react-icons/ti'
import SummarySmallEp from './SummarySmallEp'
import RightBtn from './RightBtn'

function OrderEpSet(props) {
  const {
    shoppingItemEp,
    catEp,
    sumEpSmall,
    smallTotalE,
    cuteBtn,
    threeClick,
    deleteFunction,
  } = props
  console.log('裡面到底有殺小，不要搞我', catEp)
  return (
    <>
      <TiPlus className="TiPlus-r" size="100px" />
      <div className="kit-shopping-list-bg-ep">
        {/* <!-- 刪除鈕 --> */}
        <div
          className="delete"
          onClick={() => {
            deleteFunction(true)
          }}
        >
          <i className="fas fa-times fa-3x"></i>
        </div>
        {/* <!-- 右邊3個小可愛 --> */}
        <RightBtn cuteBtn={cuteBtn} threeClick={threeClick} />
        <div className="kit-shopping-list-wrap">
          {/* <!-- 組合名稱＋右上方總計 --> */}
          <div className="kit-shopping-list-set-title">
            {/* <!-- 組合名稱 --> */}
            <div>
              {catEp ? (
                <div className="set-title">{catEp.kitCategoryName}</div>
              ) : (
                <div className="set-title"></div>
              )}
            </div>
            {/* <!-- 右上方總計區塊 --> */}
            <SummarySmallEp
              shoppingItemEp={shoppingItemEp}
              smallTotalE={smallTotalE}
              sumEpSmall={sumEpSmall}
            />
          </div>
          <div className="kit-shopping-list-product">
            {/* <!-- 商品圖片區＋PLUS --> */}
            {shoppingItemEp.map((Item, index) => (
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
                {index === shoppingItemEp.length - 1 ? (
                  <div></div>
                ) : (
                  <TiPlus className="TiPlus" size="85px" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderEpSet
