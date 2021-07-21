import React from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScEvCart from './components/ScEvCart/'

import ScBtn from './components/ScBtn'
import ScEvLabel from './components/ScEvLabel'
import Footer from '../../components/Footer'

//網址 /cart/event
function CartEvStep1(props) {
  const { nextStep, setStep, cartQty, setCartQty, updateQty, bmQty } = props
  return (
    <>
      <LunarPhaseNavbar 
        cartQty={cartQty} bmQty={bmQty} />
      <Breadcrumb />

      <ScStepRow step={1} setStep={setStep} />
      {/*-------------- 第一頁 --------------*/}
      <ScEvLabel />
      <ScEvCart 
        setCartQty={setCartQty}
        updateQty={updateQty}
      />
      <ScBtn nextStep={nextStep} showStep1={false} showStep2={true} />
      <Footer/>
    </>
  )
}

export default CartEvStep1
