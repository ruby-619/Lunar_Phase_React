import React from 'react'
import { Link } from 'react-router-dom'

function OrLabel(props) {
  const { showBm, setShowBm } = props
  return (
    <>
      {/* label */}
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0">
          <div className="myBmLabelGroup d-flex">
            <div
              className="labelSquare">
              <div className="lableName">訂單</div>
              <div
                className="labelTriangle"></div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default OrLabel
