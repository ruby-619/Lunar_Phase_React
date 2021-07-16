import React from 'react'

function BtnGreenBig(props) {
  return (
    <>
      <button
        className="btn-soft-green-big"
        onClick={() => {
          props.goShoppingList()
        }}
      >
        下一步
      </button>
    </>
  )
}

export default BtnGreenBig
