import React from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScKitCart from './components/ScKitCart/'

import ScBtn from './components/ScBtn'
import ScKitLabel from './components/ScKitLabel'
import Footer from '../../components/Footer'

//網址 /cart/kit
function CartKitStep1(props) {
  const { nextStep, setStep, cartQty } = props
  return (
    <>
      <LunarPhaseNavbar cartQty={cartQty} />
      <Breadcrumb />

      <ScStepRow step={1} setStep={setStep} />
      {/*-------------- 第一頁 --------------*/}
      <ScKitLabel />
      <ScKitCart />
      <ScBtn nextStep={nextStep} showStep1={false} showStep2={true} />
      <Footer />
    </>
  )
}

export default CartKitStep1
