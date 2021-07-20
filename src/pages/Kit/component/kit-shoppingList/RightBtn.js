import React, { useState } from 'react'

function RightBtn(props) {
  const { cuteBtn, threeClick } = props
  console.log('cuteBtn', cuteBtn)

  return (
    <>
      <div className="right-little-btn">
        {cuteBtn.arr.map((btn, key) => (
          <div
            className={'little-btn ' + (btn.click ? 'little-btn-active' : '')}
            onClick={() => {
              threeClick(btn, key)
            }}
          >
            {btn.icon}
          </div>
        ))}
      </div>
    </>
  )
}

export default RightBtn
