import React from 'react'
import { TiPlus } from 'react-icons/ti'
import SummarySmallEp from './SummarySmallEp'
import RightBtn from '../kit-shoppingList/RightBtn'

function OrderEpSet(props) {
  const {
    shoppingItemEp,
    setShoppingItemEp,
    catEp,
    setCatEp,
    smallTotalE,
    setSmallTotalE,
  } = props
  return (
    <>
      <TiPlus className="TiPlus-r" size="100px" />
      <div className="kit-shopping-list-bg">
        {/* <!-- 刪除鈕 --> */}
        <div className="delete">
          <i className="fas fa-times fa-3x"></i>
        </div>
        {/* <!-- 右邊3個小可愛 --> */}
        <RightBtn />
        <div className="kit-shopping-list-wrap">
          {/* <!-- 組合名稱＋右上方總計 --> */}
          <div className="kit-shopping-list-set-title">
            {/* <!-- 組合名稱 --> */}
            <div>
              {catEp && catEp.length > 0 ? (
                <div className="set-title">{catEp[0].kitCategoryName}</div>
              ) : (
                <div className="set-title"></div>
              )}
            </div>
            {/* <!-- 右上方總計區塊 --> */}
            <SummarySmallEp
              shoppingItemEp={shoppingItemEp}
              setShoppingItemEp={setShoppingItemEp}
              smallTotalE={smallTotalE}
              setSmallTotalE={setSmallTotalE}
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
                  <TiPlus className="TiPlus" size="90px" />
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
