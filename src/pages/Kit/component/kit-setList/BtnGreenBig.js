import React from 'react'

function BtnGreenBig(props) {
  const { objDaily } = props
  console.log('objDaily有什麼', objDaily)
  return (
    <>
      {objDaily.key ? (
        <button
          className="btn-soft-green-big"
          onClick={() => {
            props.goShoppingList()
          }}
        >
          下一步
        </button>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default BtnGreenBig
