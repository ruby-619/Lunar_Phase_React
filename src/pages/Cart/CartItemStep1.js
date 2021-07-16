import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCart from './components/ScCart/'

import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'
import ScAdSlider from './components/ScAdSlider/ScAdSlider'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'

//網址 /cart/item
function CartItemStep1(props) {
  const { nextStep, setStep, cartQty, setCartQty, updateQty} = props
  return (
    <>
      <LunarPhaseNavbar
        cartQty={cartQty}
      />
      <Breadcrumb />
    
      <ScStepRow step={1} 
        setStep={setStep}
      />
      {/*-------------- 第一頁 --------------*/}
      <ScLabel />
      <ScCart 
        updateQty={updateQty}
        cartQty={cartQty}
        setCartQty={setCartQty}
      />
      
      <ScBtn
        nextStep={nextStep} 
        showStep1={false}
        showStep2={true}
      />
      <ScAdSlider/>
      <div className="my-5"></div>
      <Footer/>
    </>
  )
}

export default CartItemStep1
