import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'
import BmPdLabel from './components/BmPdLabel'
import Footer from '../../components/Footer'
import { FaTimes } from 'react-icons/fa'
var moment = require('moment') //日期格式化需要引入

function DisplayBookMark(props) {
  const { cartQty, bmQty, updateBmQty } = props
  const [bmPdDisplay, setBmPdDisplay] = useState([]) //1
  const [bmArDisplay, setBmArDisplay] = useState([]) //2
  const [bmEvDisplay, setBmEvDisplay] = useState([]) //3
  const [showBm, setShowBm] = useState(1)

  function getBmFromLocalStorage() {
    const newCart1 = localStorage.getItem('bookmark') || '[]'
    const newCart2 = localStorage.getItem('evbookmark') || '[]'
    const newCart3 = localStorage.getItem('arbookmark') || '[]'

    updateBmQty()

    console.log('cart1',JSON.parse(newCart1))
    console.log('cart2',JSON.parse(newCart2))
    console.log('cart3',JSON.parse(newCart3))
    setBmPdDisplay(JSON.parse(newCart1))
    setBmEvDisplay(JSON.parse(newCart2))
    setBmArDisplay(JSON.parse(newCart3))
  }
  useEffect(() => {
    getBmFromLocalStorage()
  }, [])
  const ScBar = (
    <>
      {/* bar */}
      <div className="d-flex bmbar align-items-center bdBottom">
        <div className="sc-contentFont ml-3"></div>
      </div>
    </>
  )

  const displayBmItems1 = (
    // 商品收藏列
    <>
      <div className="bmRow d-flex bdBottom align-items-center position-relative">
        {bmPdDisplay.map((item, index) => {
          return (
            <div key={item.id} className="col-6 d-flex align-items-center py-2">
              <div className="itemPic ml-5">
                <img className="w-100" src={item.image} alt="" />
              </div>
              <div className="sc-nameFont itemName">
                <div className="mb-0">{item.name}</div>
              </div>
              <div
                className="bmdelOne position-absolute scBtn"
                onClick={() => {
                  // delItem(item)
                }}
              >
                <FaTimes />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
  const displayBmItems2 = (
    // 文章收藏列
    <>
      <div className="bmRow d-flex bdBottom align-items-center position-relative">
        {bmArDisplay.map((item, index) => {
          return (
            <div key={item.id} className="col-6 d-flex align-items-center py-2">
              <div className="itemPic ml-5">
                <img className="w-100" src={item.image} alt="" />
              </div>
              <div className="sc-nameFont itemName">
                <div className="mb-1">{item.name}</div>
                <div className="mb-0 text-info">作者：{item.author}</div>
              </div>
              <div
                className="bmdelOne position-absolute scBtn"
                onClick={() => {
                  // delItem(item)
                }}
              >
                <FaTimes />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
  const displayBmItems3 = (
    // 活動收藏列
    <>
      <div className="bmRow d-flex bdBottom align-items-center position-relative">
        {bmEvDisplay.map((item, index) => {
          return (
            <div key={item.id} className="col-6 d-flex align-items-center py-2">
              <div className="itemPic ml-5">
                <img className="w-100" src={item.image} alt="" />
              </div>
              <div className="sc-nameFont itemName">
                <div className="mb-0">{item.name}</div>
                <div className="mb-0 text-info">{moment(item.date).format('YYYY-MM-DD')}</div>
              </div>
              <div
                className="bmdelOne position-absolute scBtn"
                onClick={() => {
                  // delItem(item)
                }}
              >
                <FaTimes />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
 

  return (
    <>
      <LunarPhaseNavbar bmQty={bmQty} cartQty={cartQty} />
      <Breadcrumb />
      {/* 背景山 */}
      <div className="bmbgMountainRow container-fluid p-0">
        <div className="bmbgMountain position-absolute">
          <img src="/img/Cart/bgMountain.svg" alt="" />
        </div>
      </div>
      <BmPdLabel showBm={showBm} setShowBm={setShowBm} />
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {ScBar}
          {showBm===1 ? displayBmItems1 : ''}
          {showBm===2 ? displayBmItems2 : ''}
          {showBm===3 ? displayBmItems3 : ''}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DisplayBookMark
