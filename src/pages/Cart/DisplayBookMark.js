import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    const newCart2 = localStorage.getItem('arbookmark') || '[]'
    const newCart3 = localStorage.getItem('evbookmark') || '[]'

    updateBmQty()

    console.log('cart1', JSON.parse(newCart1))
    console.log('cart2', JSON.parse(newCart2))
    console.log('cart3', JSON.parse(newCart3))
    setBmPdDisplay(JSON.parse(newCart1))
    setBmArDisplay(JSON.parse(newCart2))
    setBmEvDisplay(JSON.parse(newCart3))
  }
  useEffect(() => {
    getBmFromLocalStorage()
  }, [])
  const delItem1 = (item) => {
    // 商品刪除
    const currentCart = JSON.parse(localStorage.getItem('bookmark')) || []
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      currentCart.splice(index, 1)
      localStorage.setItem('bookmark', JSON.stringify(currentCart))
      setBmPdDisplay(currentCart)
      updateBmQty()
    }
  }
  const delItem2 = (item) => {
    // 文章刪除
    const currentCart = JSON.parse(localStorage.getItem('arbookmark')) || []
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      currentCart.splice(index, 1)
      localStorage.setItem('arbookmark', JSON.stringify(currentCart))
      setBmArDisplay(currentCart)
      updateBmQty()
    }
  }
  const delItem3 = (item) => {
    // 活動刪除
    const currentCart = JSON.parse(localStorage.getItem('evbookmark')) || []
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      currentCart.splice(index, 1)
      localStorage.setItem('evbookmark', JSON.stringify(currentCart))
      setBmEvDisplay(currentCart)
      updateBmQty()
    }
  }

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
              <Link to={`/product-detail/${item.id}`}>
                <div className="itemPic ml-5">
                  <img className="w-100" src={item.image} alt="" />
                </div>
              </Link>
              <Link to={`/product-detail/${item.id}`}>
                <div className="sc-nameFont itemName">
                  <div className="mb-0">{item.name}</div>
                  <div className="mb-0 text-info">$ {item.price}</div>
                </div>
              </Link>
              <div
                className="bmdelOne position-absolute scBtn"
                onClick={() => {
                  delItem1(item)
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
              <Link to={`/article/detail/${item.id}`}>
                <div className="itemArPic ml-5">
                  <img className="h-100" src={item.image} alt="" />
                </div>
              </Link>
              <Link to={`/article/detail/${item.id}`}>
                <div className="sc-nameFont itemName">
                  <div className="mb-1">{item.name}</div>
                  <div className="mb-0 text-info">作者：{item.author}</div>
                </div>
              </Link>
              <div
                className="bmdelOne position-absolute scBtn"
                onClick={() => {
                  delItem2(item)
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
              <Link to={`/event-detail/${item.id}`}>
                <div className="itemEvPic ml-5">
                  <img className="w-100" src={item.image} alt="" />
                </div>
              </Link>
              <Link to={`/event-detail/${item.id}`}>
                <div className="sc-nameFont itemName">
                  <div className="mb-0">{item.name}</div>
                  <div className="mb-0 text-info">
                    {moment(item.date).format('YYYY-MM-DD')}
                  </div>
                </div>
              </Link>
              <div
                className="bmdelOne position-absolute scBtn"
                onClick={() => {
                  delItem3(item)
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
      <BmPdLabel showBm={showBm} setShowBm={setShowBm} bmQty={bmQty} />
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {ScBar}
          {showBm === 1 ? displayBmItems1 : ''}
          {showBm === 2 ? displayBmItems2 : ''}
          {showBm === 3 ? displayBmItems3 : ''}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DisplayBookMark
