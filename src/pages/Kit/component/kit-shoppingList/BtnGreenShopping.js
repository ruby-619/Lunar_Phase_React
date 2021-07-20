import React from 'react'
import { Link } from 'react-router-dom'

function BtnGreenShopping(props) {
  const { catDay, sentLocal } = props
  console.log('catDay', catDay)
  return (
    <>
      <div className="kit-go-buy-btn-area">
        <Link to="/kitSetList">
          <div className="kit-go-buy-btn kit-go-buy-btn-left">
            <div className="kit-go-buy-btn-s">我還想參考</div>
            <div className="kit-go-buy-btn-m">其他組合</div>
          </div>
        </Link>
        <Link to="/cart/kit">
          <div
            className="kit-go-buy-btn kit-go-buy-btn-right"
            onClick={() => {
              sentLocal()
            }}
          >
            <div className="kit-go-buy-btn-l">結帳去</div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default BtnGreenShopping
