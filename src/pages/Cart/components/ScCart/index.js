import React  from 'react'
import ScItem from './ScItem'

function ScCart(props) {
  const { cartQty, setCartQty, updateQty } = props

  const ScBar = (
    <>
      {/* 全選bar */}
      <div className="d-flex select-bar align-items-center bdBottom">
        {/* <input class="myCheckbox ml-3" type="radio" name="selectAll" id=""> */}
        {/* <div id="selectAll" className="myCheckbox selectAll ml-4 mr-5" /> */}
        <div className="sc-contentFont ml-3"></div>
        {/* <i className="fas fa-trash ml-auto p-3 scBtn" /> */}
      </div>
    </>
  )

  const ScFormTitle = (
    <>
      {/* 列表標題 */}
      <div className="d-flex sc-formTitle bdBottom py-1">
        <div className="col-6 d-flex ">
          <div className="firstTitle">商品項目</div>
        </div>
        <div className="col-2">數量</div>
        <div className="col-2">單價</div>
        <div className="col-2">總價</div>
      </div>
    </>
  )

  return (
    <>
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {ScBar}
          {ScFormTitle} 
          <ScItem 
            updateQty={updateQty}
            cartQty={cartQty}
            setCartQty={setCartQty}
          />
        </div>
      </div>
    </>
  )
}

export default ScCart
