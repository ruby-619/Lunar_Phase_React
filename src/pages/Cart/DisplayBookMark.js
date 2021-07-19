import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'
import BmPdLabel from './components/BmPdLabel'
import Footer from '../../components/Footer'
import { FaTimes } from 'react-icons/fa'

function DisplayBookMark(props) {
  const { cartQty, bmQty, updateBmQty } = props
  const [myBsDisplay, setBsDisplay] = useState([])

  function getBsFromLocalStorage() {
    const newCart = localStorage.getItem('bookmark') || '[]'

    updateBmQty()

    console.log(JSON.parse(newCart))
    setBsDisplay(JSON.parse(newCart))
  }
  useEffect(() => {
    getBsFromLocalStorage()
  }, [])
  const ScBar = (
    <>
      {/* 全選bar */}
      <div className="d-flex select-bar align-items-center bdBottom">
        {/* <input class="myCheckbox ml-3" type="radio" name="selectAll" id=""> */}
        {/* <div id="selectAll" className="myCheckbox selectAll ml-4 mr-5" /> */}
        <div className="sc-contentFont ml-3"></div>
        {/* <i className="fas fa-trash ml-auto p-3 scBtn" /> */}
      </div>
    </>
  )

  const displayBmItems = (
    // 商品列
    <>
      <div className="bmRow d-flex bdBottom align-items-center position-relative">
        {myBsDisplay.map((item, index) => {
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
  const displayItems = (
    // 商品列
    <>
      {myBsDisplay.map((item, index) => {
        return (
          <div
            key={item.id}
            className="bmRow d-flex bdBottom align-items-center position-relative"
          >
            <div className="col-6 d-flex align-items-center py-2">
              {/* <div className="myCheckbox selectOne ml-4" /> */}
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
            <div className="col-6 d-flex align-items-center py-2">
              {/* <div className="myCheckbox selectOne ml-4" /> */}
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
          </div>
        )
      })}
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
      <BmPdLabel />
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {ScBar}
          {displayBmItems}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DisplayBookMark
