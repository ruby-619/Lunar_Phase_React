import React from 'react'
import { Link } from 'react-router-dom'

function BmPdLabel(props) {
  return (
    <>
      {/* label */}
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0">
          <div className="myBmLabelGroup d-flex">
            <Link to="/cart/item">
              <div className="labelSquare">
                <div className="lableName">商品</div>
                <div className="labelTriangle"></div>
              </div>
            </Link>
            <Link to="/cart/kit">
              <div className="labelSquare bgWhite">
                <div className="lableName">文章</div>
                <div className="labelTriangleWhite"></div>
              </div>
            </Link>
            <Link to="/cart/event">
              <div className="labelSquare bgWhite">
                <div className="lableName">活動</div>
                <div className="labelTriangleWhite"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BmPdLabel
