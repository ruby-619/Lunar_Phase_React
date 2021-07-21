import React from 'react'
import { Link } from 'react-router-dom'

function BmPdLabel(props) {
    const { showBm, setShowBm, bmQty } = props
  return (
    <>
      {/* label */}
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0">
          <div className="myBmLabelGroup d-flex">
            {/* <Link to="/cart/item"> */}
              <div className={`labelSquare ${showBm===1 ? '': 'bgWhite'}`}
                    onClick={()=>{setShowBm(1)}}>
                <div className="lableName">商品 ({bmQty.itemsQty})</div>
                <div className={showBm===1 ? 'labelTriangle': 'labelTriangleWhite'}></div>
              </div>
            {/* </Link> */}
            {/* <Link to="/cart/kit"> */}
              <div className={`labelSquare ${showBm===2 ? '': 'bgWhite'}`}
                    onClick={()=>{setShowBm(2)}}>
                <div className="lableName">文章 ({bmQty.arQty})</div>
                <div className={showBm===2 ? 'labelTriangle': 'labelTriangleWhite'}></div>
              </div>
            {/* </Link> */}
            {/* <Link to="/cart/event"> */}
              <div className={`labelSquare ${showBm===3 ? '': 'bgWhite'}`}
                    onClick={()=>{setShowBm(3)}}>
                <div className="lableName">活動 ({bmQty.eventsQty})</div>
                <div className={showBm===3 ? 'labelTriangle': 'labelTriangleWhite'}></div>
              </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default BmPdLabel
