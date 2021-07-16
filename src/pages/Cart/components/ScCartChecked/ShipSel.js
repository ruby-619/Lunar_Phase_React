import React from 'react'

function ShipSel(props) {
  const {
    orderItemsStr,
    sum,
    setShipPrice,
    setIsCon,
    shipType, setShipType
  } = props
  let totalPrice = sum(orderItemsStr)

  const conShipPrice=(price)=>{
    if (price < 900) {
      return 60
    } else {
      return 0
    }
  }
  const homeShipPrice=(price)=>{
    if (price < 900) {
      return 120
    } else {
      return 0
    }
  }

  const display = (
    <>
      {/* 選擇物流方式 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">選擇物流方式</div>
      </div>
      <div className="d-flex align-items-center justify-content-start my-2">
        <input
          type="radio"
          className="scInput ml-5"
          name="shipWay"
          value="便利商店"
          onChange={(e) => {
            setIsCon(true)
            setShipType("便利商店")
            setShipPrice(conShipPrice(totalPrice))
            localStorage.setItem(
              'ShipPrice',
              JSON.stringify(conShipPrice(totalPrice))
            )
            localStorage.setItem('shipType', JSON.stringify(e.target.value))
          }}
          // checked={isCon}
          checked={shipType==="便利商店"}
        />
        <label className="sc-contentFont mb-0 ml-3">
          便利商店(未滿900元，運費60元)
        </label>
      </div>
      <div className="d-flex align-items-center justify-content-start my-2">
        <input
          type="radio"
          className="scInput ml-5"
          name="shipWay"
          value="宅配"
          onChange={(e) => {
            setIsCon(false)
            setShipType("宅配")
            setShipPrice(homeShipPrice(totalPrice))
            localStorage.setItem(
              'ShipPrice',
              JSON.stringify(homeShipPrice(totalPrice))
            )
            localStorage.setItem('shipType', JSON.stringify(e.target.value))
          }}
          // checked={!isCon}
          checked={shipType==="宅配"}
        />
        <label className="sc-contentFont mb-0 ml-3">
          宅配(未滿900元，運費120元)
        </label>
      </div>
    </>
  ) 


  return <>
    {display}
  </>
}

export default ShipSel
