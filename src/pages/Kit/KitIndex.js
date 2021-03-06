import React, { useEffect } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import KitBreadcrumb from './component/KitBreadcrumb'
import Footer from '../../components/Footer'
import SvgSurprise from './component/svg-component/SvgSurprise'
import SvgShakeHand from './component/svg-component/SvgShakeHand'
import SvgGive from './component/svg-component/SvgGive'
import SvgRibbonIndex from './component/svg-component/SvgRibbonIndex'
import GoTestArea from './component/kit-index/GoTestArea'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function KitIndex(props) {
  const { cartQty, bmQty, updateQty, updateBmQty } = props

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init({ offset: 120, duration: 800 })
    updateQty()
    updateBmQty()
  }, [])
  return (
    <>
      <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty} />
      <div className="ribbon-wrap">
        <SvgRibbonIndex />
      </div>
      <KitBreadcrumb />
      <div className="kit-index-hero">
        <div
          className="kit-index-hero-icon"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <SvgSurprise />
          <img
            className="kit-index-hero-icon-2"
            src="/img/Kit/calligraphy002.svg"
            alt="#/"
          />
        </div>
      </div>
      <div className="container">
        {/* <!-- 前導文區塊 --> */}
        <div className="kit-index-info-area">
          <p className="kit-index-p">JUST FOR YOU</p>
          <h2 className="h2-tc kit-index-info-title">
            一個量身打造又優惠的方案...
          </h2>
          <p>
            希望以長期優惠金額的方式回饋給每位喜歡 Lunar Phase 的妳，
            <br />
            選擇適合自己的組合，透過定期定額的自動扣款服務，並宅配到妳的手中，每個月陪伴在妳身邊。
          </p>
          {/* 區塊一 */}
          <div className="kit-index-info-wrap-one">
            {/* 一小塊-每月配送 */}
            <div
              className="kit-index-info-box"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <SvgGive />
              <div className="kit-index-info-text">
                <h4 className="h4-tc kit-index-info-text-title">
                  每個月寄到妳的手中
                </h4>
                <p className="kit-index-p">
                  下訂後將於每個月15號定時寄送，宅配到妳的手中，
                  再也不用擔心沒注意到家裡的生理用品庫存。
                  <br />
                  方案到期前一個月會以簡訊通知配送期將滿，請會員進會員頁面續約或者是更換配送方案。
                </p>
              </div>
            </div>
            {/* 一小塊-每月配送 */}
            <div
              className="kit-index-info-img-1"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            ></div>
          </div>
          {/* 區塊二 */}
          <div className="kit-index-info-wrap kit-index-info-wrap">
            {/* 一小塊-終止合約 */}
            <div
              className="kit-index-info-img-2"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            ></div>
            <div
              className="kit-index-info-box"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {/* 一小塊-終止合約 */}
              <div>
                <div className="kit-shake-hands">
                  <SvgShakeHand />
                </div>
                <div className="kit-index-info-text">
                  <h4 className="h4-tc kit-index-info-text-title">
                    終止服務的權利
                  </h4>
                  <p className="kit-index-p">
                    很遺憾的，超過一個月份的組合若是購買後使用不習慣，可以於次月的10號前，前往會員頁面申請停止配送服務，我們會為您終止訂閱，並退還剩下組合的70%金額至您的帳戶中。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 英雄區2 */}
      <div
        className="kit-index-hero-2"
        data-aos="fade-up"
        data-aos-duration="3000"
      ></div>
      <div className="kit-index-info-wrap-last">
        {/* 一小塊-環保散裝 */}
        <div
          className="kit-index-info-box-last"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <SvgSurprise />
          <div className="kit-index-info-text">
            <h4 className="h4-tc kit-index-info-text-title">
              Lunar Phase 特製禮盒
            </h4>
            <p className="kit-index-p">
              將各項商品以裸裝方式裝進再生紙盒中，
              <br />
              一次將每個月需要的內容寄送給你，減少因包裝而產生的垃圾量。
            </p>
          </div>
        </div>
      </div>
      <div
        className="kit-index-bottom-text"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <p>開始選擇組合， 訂製屬於自己的禮盒吧</p>
        <p className="p-r">⇣</p>
      </div>
      {/* <FlashWall /> */}
      {/* <!-- 前往測驗區 --> */}
      <GoTestArea />
      <Footer />
    </>
  )
}

export default KitIndex
