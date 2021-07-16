import React, { useState } from 'react'

import ScItemChecked from './ScItemChecked'
import ShipSel from './ShipSel'
import ScPriceRowCheck from './ScPriceRowCheck'
import ScContent3 from './ScContent3'
import { countries, townships, postcodes } from '../../../../data/townships'

function ScCartChecked(props) {
  const { 
    inputs, setInputs,onChangeForField,
    handleSubmit,handleChange,handleInvalid,fieldErrors,
    isCon, setIsCon,
    showContent3, showShipSel, showContent4,
    shipPrice,
    setShipPrice,
    shipType,
    setShipType,
    paymentWay,
    setPaymentWay,
    country, setCountry, township, setTownship,
    selectedConAddress, setSeletedConAddress,
    sum,
    amountSum,
    orderItemsStr,
    scOrderId
  } = props
  const [isHidden, setIsHidden] = useState(true) //下拉選單的顯示與否
  


  // isHidden的切換函式
  const toggleIsHidden = () => {
    setIsHidden(!isHidden)
  }



  const ScOrderId = (
    <>
      {/* 訂單編號 */}
      <div className="pb-2 mb-3 titleDivider d-flex justify-content-start align-items-center">
        <div className="scTitle col-2">訂單編號</div>
        <div className="sc-nameFont">{scOrderId}</div>
      </div>
    </>
  )

  const OrderCon = ()=> (
    <>
      超商：711 {inputs.conCity}{inputs.conStore}店
      <br />
      地址：{selectedConAddress}
      <br />
    </>
  )
  const OrderHome = ()=> (
    <>
      地址：{(country > -1  && township>-1)&& (postcodes[country][township]+countries[country]+townships[country][township]+inputs.homeAddress)}
      <br />
    </>
  )


  const ScOrderData = (
    <>
      {/* 收件地址與資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">收件地址與資料</div>
      </div>
      <div className="ml-5 d-flex mt-3">
        <div className="orderPic">
          <img src="/img/Cart/gift.svg" alt="" />
        </div>
        <div className="sc-contentFont ml-5">
          姓名：{inputs.scname}
          <br />
          電話：{inputs.phone}
          <br />
          { isCon && <OrderCon/> }
          { !isCon && <OrderHome/> }
        </div>
      </div>
    </>
  )

  return (
    <>
      
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {/*  bar  */}
          <div className="d-flex select-bar align-items-center"></div>
          <div className="sc-Wrap d-flex flex-column justify-content-around">
            {showContent4 ? ScOrderId : "" }        
            <ScItemChecked
              isHidden={isHidden}
              setIsHidden={setIsHidden}
              toggleIsHidden={toggleIsHidden}
              orderItemsStr={orderItemsStr}
              sum={sum}
              amountSum={amountSum}
            />
            {showShipSel ? 
            <ShipSel 
              inputs={inputs}
              setInputs={setInputs}
              onChangeForField={onChangeForField}
              
              setShipPrice={setShipPrice}
              shipPrice={shipPrice} 
              orderItemsStr={orderItemsStr}
              sum={sum}
              isCon={isCon}
              setIsCon={setIsCon}
              shipType={shipType}
              setShipType={setShipType}
            /> 
            : ''}

            {showContent3 ? 
            <ScContent3 
              inputs={inputs}
              setInputs={setInputs}
              onChangeForField={onChangeForField}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleInvalid={handleInvalid}
              fieldErrors={fieldErrors}

              isCon={isCon}
              paymentWay={paymentWay}
              setPaymentWay={setPaymentWay}
              country={country}
              setCountry={setCountry}
              township={township}
              setTownship={setTownship}
              selectedConAddress={selectedConAddress}
              setSeletedConAddress={setSeletedConAddress}
            /> : ''}
            {showContent4 ? ScOrderData : "" }

            <ScPriceRowCheck
              inputs={inputs}

              orderItemsStr={orderItemsStr}
              sum={sum}
              shipPrice={shipPrice}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ScCartChecked
