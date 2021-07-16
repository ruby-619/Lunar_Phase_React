import React from 'react'
import SvgClothPad from '../svg-component/SvgClothPad'
import SvgCup from '../svg-component/SvgCup'
import SvgPanty from '../svg-component/SvgPanty'

function RightBtn() {
  return (
    <>
      <div className="right-little-btn">
        <div className="little-btn ">
          <SvgClothPad className="btn-cloth-pad" />
        </div>
        <div className="little-btn">
          <SvgCup className="btn-cup" />
        </div>
        <div className="little-btn">
          <SvgPanty className="btn-panty" />
        </div>
      </div>
    </>
  )
}

export default RightBtn
