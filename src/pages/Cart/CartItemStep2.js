import React from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCartChecked from './components/ScCartChecked'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'
import Footer from '../../components/Footer'

//網址 /cart/item
function CartItemStep2(props) {
  const { 
    prevStep, nextStep, setStep, cartQty,
    inputs, setInputs,onChangeForField,
    handleSubmit,handleChange,handleInvalid,fieldErrors,
    isCon,
    setIsCon,
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
    addOrderToSever,
    orderItemsStr
  } = props
  return (
    <>
      <LunarPhaseNavbar 
         cartQty={cartQty}
      />
      <Breadcrumb />

    {/* <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        onInvalid={handleInvalid}
      > */}
      <ScStepRow step={2} 
        setStep={setStep}
      />
      {/*-------------- 第二頁 --------------*/}
      <ScLabel />
      <ScCartChecked
        showContent3={false}
        showShipSel={true}
        showContent4={false}
        inputs={inputs}
        setInputs={setInputs}
        onChangeForField={onChangeForField}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleInvalid={handleInvalid}
        fieldErrors={fieldErrors}

        isCon={isCon}
        setIsCon={setIsCon}
        shipPrice={shipPrice}
        setShipPrice={setShipPrice}
        shipType={shipType}
        setShipType={setShipType}
        paymentWay={paymentWay}
        setPaymentWay={setPaymentWay}
        country={country}
        setCountry={setCountry}
        township={township}
        setTownship={setTownship}
        selectedConAddress={selectedConAddress}
        setSeletedConAddress={setSeletedConAddress}
        sum={sum}
        amountSum={amountSum}
        addOrderToSever={addOrderToSever}
        orderItemsStr={orderItemsStr}
      />
      <ScBtn
        prevStep={prevStep}
        nextStep={nextStep} 
        showStep1={true}
        showStep2={true}
      />
      {/* </form> */}
      <Footer/>
    </>
  )
}

export default CartItemStep2
