import React from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'
import ScStepRow from './components/ScStepRow'
import ScLabel from './components/ScLabel'
import ScCartChecked from './components/ScCartChecked/'
import ScBtn from './components/ScBtn'
import Footer from '../../components/Footer'

function CartItemStep4(props) {
  const { 
    setStep, cartQty,
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
    orderItemsStr,
    scOrderId
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
      <ScStepRow step={4} 
        setStep={setStep}
      />
      {/*-------------- 第四頁 --------------*/}
      <ScLabel />
      <ScCartChecked
        showContent3={false}
        showShipSel={false}
        showContent4={true}
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
        scOrderId={scOrderId}
      />
      <ScBtn
        showStep1={false}
        showStep2={false}
      />
      {/* </form> */}
      <Footer/>
    </>
  )
}

export default CartItemStep4
