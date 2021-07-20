import React, { useState, useEffect} from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'
import BmPdLabel from './components/BmPdLabel'
import Footer from '../../components/Footer'
var moment = require('moment') //日期格式化需要引入

function DisplayOrder(props) {
    const { cartQty, bmQty } = props

  return(
    <>
      <LunarPhaseNavbar bmQty={bmQty} cartQty={cartQty} />
      <Breadcrumb />
      {/* 背景山 */}
      <div className="bmbgMountainRow container-fluid p-0">
        <div className="bmbgMountain position-absolute">
          <img src="/img/Cart/bgMountain.svg" alt="" />
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default DisplayOrder