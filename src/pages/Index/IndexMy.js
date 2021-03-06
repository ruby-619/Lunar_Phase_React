import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './IndexMy.scss'

// component
import HeroSlider from './IndexHeroSlider'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import IndexLineA from './components/IndexLineA'
import IndexLineB from './components/IndexLineB'

// react-icon
import { GrFacebookOption, GrInstagram } from 'react-icons/gr'
// import { GrInstagram } from 'react-icons/gr'
// import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
// import { VscChevronRight } from 'react-icons/vsc'
import { RiMoonClearFill } from 'react-icons/ri'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function IndexMy(props) {
  // nav sticky
  const [sticky, setSticky] = useState(false)
  // drawing animate
  const [drawing, setDrawing] = useState(false)

  useEffect(() => {
    // AOS
    AOS.init({ offset: 120, duration: 800 })
  })

  useEffect(() => {
    // navbar sticky
    const navbar = document.getElementById('navbar')
    const sticky = navbar.offsetTop
    function navbarSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
        setSticky(true)
      } else {
        navbar.classList.remove('sticky')
      }
    }

    // drawing animate
    const block = document.getElementById('pd-title')
    const drawMe = block.offsetTop

    function drawing() {
      if (window.pageYOffset >= drawMe) {
        setDrawing(true)
      } else {
        setDrawing(false)
      }
    }
    window.onscroll = function () {
      drawing()
      navbarSticky()
    }

    updateQty()
    updateBmQty()
  }, [])

  const displayDraw = (
    <>
      <IndexLineA />
    </>
  )
  const displayDraw2 = (
    <>
      <IndexLineB />
    </>
  )

  const { cartQty, bmQty, updateQty, updateBmQty } = props
  return (
    <>
      {/* HEADER */}
      <header id="top">
        <div className="index-top-wrap">
          <h1 className="text-left mb-3">
            <Link to="#home">
              <img
                className="index-top-logo"
                src="/img/Index/logo-l-dark.svg"
                alt=""
              />
            </Link>
          </h1>
          <div className="index-top-sns">
            <Link to="https://www.facebook.com/IIIEDU.TW" className="mr-3">
              <GrFacebookOption />
            </Link>
            <Link to="https://www.iiiedu.org.tw/">
              <GrInstagram />
            </Link>
          </div>
          <nav className="index-top-menu">
            <ul className="d-flex flex-column index-top-nav align-items-end">
              <li className="col">
                <Link to="/product">PRODUCT</Link>
              </li>
              <li className="col">
                <Link to="/article1">ARTICLE</Link>
              </li>
              <li className="col">
                <Link to="/kitindex">KIT</Link>
              </li>
              <li className="col">
                <Link to="/event">EVENT</Link>
              </li>
              <li className="col">
                <Link to="/calendar">CALCULATOR</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="index-top-letter">
          <img src="/img/Index/calligraphy002.svg" alt="StayTrue" />
        </div>

        <div className="index-top-bottom d-flex justify-content-between py-3">
          <div className="index-login-bar d-flex my-auto">
            <Link to="/login">LOG IN</Link>
            <p> / </p>
            <Link to="/cart/item">CART</Link>
          </div>
          <div data-aos="fade-left" className="index-news-bar d-flex my-auto">
            <Link
              className="index-news-bar-info my-auto py-0"
              to="/product-detail/30"
            >
              <RiMoonClearFill className="mr-2" /> ??????????????????
            </Link>
          </div>
          {/* <div className="btn-soft-green mx-auto">
            <a href>SHOP NOW</a>
          </div> */}
        </div>
        {/* carousel */}
        <HeroSlider />
      </header>

      {/* NAVBAR */}

      <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty} />

      {/* ABOUT */}
      <div id="about" className="index-about container-fluid">
        <div className="index-about-row">
          <h2 className="text-center col-12">Our Mission</h2>
          <img
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            className="index-about-content col-12 col-md-9 col-lg-7 mx-auto"
            src="/img/Index/calligraphy001.svg"
            alt="Our_Mission"
          />
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="row col-12 index-about-unit justify-content-between"
          >
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <Link to="/product">
                <span>01.</span>
                <h3>PRODUCT</h3>
                <p className="p-tc">
                  ????????????????????????
                  <br />
                  ??????????????????????????????
                  <br />
                  ???????????? ???????????????
                </p>
              </Link>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <Link to="/article">
                <span>02.</span>
                <h3>ARTICLE</h3>
                <p className="p-tc">
                  ???????????? ????????????
                  <br />
                  ?????????????????????
                </p>
              </Link>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <Link to="/kit">
                <span>03.</span>
                <h3>KIT</h3>
                <p className="p-tc">
                  ????????????
                  <br />
                  ????????????????????????
                </p>
              </Link>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <Link to="/event">
                <span>04.</span>
                <h3>EVENT</h3>
                <p className="p-tc">??????????????????????????????</p>
              </Link>
            </div>
          </div>
        </div>
        <div id="bodyline-l" className="index-bodyline-l">
          {drawing ? displayDraw : ''}
          {/* <IndexLineA /> */}
        </div>
        <div className="index-bodyline-r">
          {drawing ? displayDraw2 : ''}
          {/* <IndexLineB /> */}
        </div>
      </div>

      {/* product */}
      <div id="product" className="index-product container-fluid text-center">
        <div className="row index-product-row">
          <h2 id="pd-title" className="col-12 text-center">
            PRODUCT
          </h2>
          <div className="index-product-bg-mountain">
            <img src="/img/Index/mountain-w.svg" alt="mountain-bg" />
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            className="col-12 row index-product-unit-wrap justify-content-between mx-auto"
          >
            <div className="index-product-unit product-unit-move col-12 col-md-2 mt-md-5">
              <div className="index-product-moon-frame mx-auto text-center">
                <Link to>
                  <div className="index-moon moon1">
                    <img src="/img/Index/panties.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">?????????</h6>
                </Link>
              </div>
            </div>
            <div className="index-product-unit product-unit-move col-12 col-md-2 mt-3 mt-md-3">
              <div className="index-product-moon-frame mx-auto">
                <Link to>
                  <div className="index-moon moon2">
                    <img src="/img/Index/cloth-pad.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">????????????</h6>
                </Link>
              </div>
            </div>
            <div className="index-product-unit product-unit-move col-12 col-md-2 ">
              <div className="index-product-moon-frame  mx-auto">
                <Link to>
                  <div className="index-moon moon3">
                    <img src="/img/Index/pad.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">?????????</h6>
                </Link>
              </div>
            </div>
            <div className="index-product-unit product-unit-move col-12 col-md-2 mt-3 mt-md-3">
              <div className="index-product-moon-frame mx-auto">
                <Link to>
                  <div className="index-moon moon4">
                    <img src="/img/Index/tampon.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">????????????</h6>
                </Link>
              </div>
            </div>
            <div className="index-product-unit product-unit-move col-12 col-md-2 mt-3 mt-md-5">
              <div className="index-product-moon-frame mx-auto">
                <Link to>
                  <div className="index-moon moon5">
                    <img src="/img/Index/menstrual-cup.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="index-product-link">
                <Link to>
                  <h6 className="h6-tc">?????????</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <button className="btn-soft-pink">
              <Link to="/product">SHOP ALL</Link>
            </button>
          </div>
        </div>
      </div>
      {/* ARTICLE */}
      <div id="article" className="index-article container-fluid">
        <div className="index-row">
          <div className="index-article-header d-flex flex-wrap justify-content-between col-12 mx-0 px-0">
            <Link to="/article1">
              <h2 className="col-12 col-sm-4 px-0">ARTICLE</h2>
            </Link>
            <div className="index-article-tags col-12 col-sm-8 px-0">
              <h6 className="h6-tc ml-3 text-center text-sm-right px-0">
                ?????????????????? / ???????????? / ????????????
              </h6>
            </div>
          </div>
          <div
            data-aos="fade-up"
            // data-aos="fade-zoom-in"
            // data-aos-easing="ease-in-back"
            data-aos-delay="300"
            // data-aos-offset="0"
            className="index-article-topic row col-12"
          >
            <div className="index-article-topic-content text-left col-12 col-md-6 col-lg-8 ml-0 pl-0 pr-0 pr-md-3">
              <div className="">
                <p className="index-article-date mb-1">2021.07.26</p>
                <Link to="/article/detail/48">
                  <h4 className="index-article-h4 h4-tc">
                    ??????????????????????????????????????????????????????
                  </h4>
                </Link>
                <p className="p-tc">
                  ????????????????????????????????????????????????????????????????????????
                  ??????????????????????????????????????????????????????????????????
                </p>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/48">read</Link>
                </div>
                <div>
                  <Link to="/article1" className="btn-tag mr-0">
                    #????????????
                  </Link>
                </div>
              </div>
            </div>
            <div className="index-article-topic-img col-12 col-md-6 col-lg-4 p-0 my-4 my-md-auto">
              <Link to="/article/detail/48">
                <img src="/img/Index/article001.jpg" alt="" />
              </Link>
            </div>
          </div>
          <div className="index-article-unit-wrap row text-left col-12">
            <div
              data-aos="fade-up"
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              data-aos-delay="600"
              // data-aos-offset="0"
              className="border-right-1 index-article-unit col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0"
            >
              <div className="p-0 m-0">
                <p className="index-article-date mb-1">2021.07.19</p>
                <div className="index-article-unit-img col-12 p-0">
                  <Link to="/article/detail/39">
                    <img src="/img/Index/article002.jpg" alt="" />
                  </Link>
                </div>
                <Link to="/article/detail/39">
                  <h5 className="index-article-h5 h5-tc my-2">
                    ??????????????????????????????????????????????????????????????????????????????????????????
                  </h5>
                </Link>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/39">read</Link>
                </div>
                <div className="text-right">
                  <Link to="/article2" className="btn-tag ml-2">
                    #?????????
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              data-aos-delay="600"
              // data-aos-offset="0"
              className="border-right-2 index-article-unit col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0"
            >
              <div className="p-0 m-0">
                <p className="index-article-date mb-1">2021.07.12</p>
                <div className="index-article-unit-img col-12 p-0">
                  <Link to="/article/detail/2">
                    <img src="/img/Index/article003.jpg" alt="" />
                  </Link>
                </div>
                <Link to="/article/detail/2">
                  <h5 className="index-article-h5 h5-tc my-2">
                    40???????????????????????????????????????????????????????????????????????????????????????
                  </h5>
                </Link>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/2">read</Link>
                </div>
                <div className="text-right">
                  <Link to="/article3" className="btn-tag ml-2">
                    #????????????
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              data-aos-delay="600"
              // data-aos-offset="0"
              className="border-right-1 index-article-unit col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0"
            >
              <div className="p-0 m-0">
                <p className="index-article-date mb-1">2021.07.05</p>
                <div className="index-article-unit-img col-12 p-0">
                  <Link to="/article/detail/38">
                    <img src="/img/Index/article004.jpg" alt="" />
                  </Link>
                </div>
                <Link to="/article/detail/38">
                  <h5 className="index-article-h5 h5-tc my-2">
                    ????????????????????????????????????????????????????????????????????????????????????????????????
                  </h5>
                </Link>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/38">read</Link>
                </div>
                <div className="text-right">
                  <Link to="/article2" className="btn-tag ml-2">
                    #?????????
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              data-aos-delay="600"
              // data-aos-offset="0"
              className="index-article-unit col-12 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0"
            >
              <div className="p-0 m-0">
                <p className="index-article-date mb-1">2021.06.28</p>
                <div className="index-article-unit-img p-0">
                  <Link to="/article/detail/23">
                    <img src="/img/Index/article005.jpg" alt="" />
                  </Link>
                </div>
                <Link to="/article/detail/23">
                  <h5 className="index-article-h5 h5-tc my-2">
                    ????????????????????????????????????????????????????????????
                  </h5>
                </Link>
              </div>
              <div className="index-article-unit-under d-flex justify-content-between pt-4">
                <div className="btn-read text-center">
                  <Link to="/article/detail/23">read</Link>
                </div>
                <div className="text-right">
                  <Link to="/article3" className="btn-tag ml-2">
                    #????????????
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="index-article-footer d-flex justify-content-between mx-0 px-0 col-12">
            <div className="d-flex">
              {/* <Link to="/article" className="btn-prev mr-3">
                <i className="fas fa-chevron-left" />
              </Link>
              <Link to="/article" className="btn-next">
                <i className="fas fa-chevron-right" />
              </Link> */}
            </div>
            <Link to="/article1" className="btn-more">
              more
            </Link>
          </div>
        </div>
      </div>
      {/* KIT */}
      <div id="kit" className="index-kit container-fluid">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          className="index-kit-pic1"
        />
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="800"
          className="index-kit-pic2"
        />
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1300"
          className="index-kit-pic3"
        />
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1600"
          className="index-kit-pic4"
        />
        <div className="index-kit-content row index-row justify-content-between">
          <div className="index-kit-content-l pl-0 col-12 col-md-4">
            <Link to="/kitindex">
              <h2>KIT</h2>
            </Link>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1600"
            data-aos-duration="3000"
            className="index-kit-content-r col-12 col-md-8"
          >
            <h5 className="h5-tc">???????????? - ????????????????????????</h5>
            <p className="my-4">
              ???????????????????????????????????????????????????????????????????????????????????????
              <br />
              Lunar Phase
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              <br />
              ????????????????????????????????????????????????????????????????????????????????????????????????
            </p>
            <div className="row p-0 m-0 justify-content-between ">
              <h6 className="h6-tc col-12 col-md-4">????????????????????????</h6>
              <h6 className="h6-tc col-12 col-md-4">?????????????????????</h6>
              <h6 className="h6-tc col-12 col-md-4">???????????????????????????</h6>
            </div>
          </div>
        </div>
        <div className="btn-more index-kit-bottom mr-0 pr-0">
          <Link to="/kitindex">more</Link>
        </div>
      </div>
      {/* EVENT */}
      <div id="event" className="index-event radial-gradient container-fluid">
        <div className="index-event-top d-flex justify-content-between">
          <div className="index-event-block" />
          <Link className="mx-auto" to="/event">
            <h2>EVENT</h2>
          </Link>
          <div className="index-event-more btn-more">
            <Link to="/event">more</Link>
          </div>
        </div>
        <h6 className="h6-tc text-center">????????????</h6>
        <div className="d-flex mt-5">
          {/* <button className="index-arrow">
            <VscChevronLeft />
          </button> */}
          <div className="index-event-content row m-0 justify-content-between">
            <div className="index-event-unit-wrap d-flex justify-content-between">
              <div className="index-event-unit row">
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="col-12 col-lg-4 mb-5"
                >
                  <p className="index-article-date mb-2 mx-auto">2021.08.14</p>
                  <Link to="/event-detail/1">
                    <img
                      className="index-event-unit-img"
                      src="/img/Index/flower05.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="/event-detail/1">
                    <h5 className="index-event-h5 h5-tc mt-3">
                      ????????????????????????
                    </h5>
                  </Link>
                  <p className="p-tc mx-auto">????????? x ????????? x ?????????</p>
                  <div className="underline" />
                  <p className="mt-2 mx-auto">?????????</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="col-12 col-lg-4 mb-5"
                >
                  <p className="index-article-date mb-2 mx-auto">2021.08.21</p>
                  <Link to="/event-detail/5">
                    <img
                      className="index-event-unit-img"
                      src="/img/Index/girltalk01.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="/event-detail/5">
                    <h5 className="index-event-h5 h5-tc mt-3">
                      ???????????????????????????
                    </h5>
                  </Link>
                  <p className="p-tc mx-auto">Simple talk??????????????????</p>
                  <div className="underline" />
                  <p className="mt-2 mx-auto">?????????</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="col-12 col-lg-4 mb-5"
                >
                  <p className="index-article-date mb-2 mx-auto">2020.09.5</p>
                  <Link to="/event-detail/4">
                    <img
                      className="index-event-unit-img"
                      src="/img/Index/surf04.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="/event-detail/4">
                    <h5 className="index-event-h5 h5-tc mt-3">?????????</h5>
                  </Link>
                  <p className="p-tc mx-auto">Girls Surf Boardriders Taiwan</p>
                  <div className="underline" />
                  <p className="mt-2 mx-auto">?????????</p>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="index-arrow">
            <VscChevronRight />
          </button> */}
        </div>
      </div>
      <div className="banner container-fluid">
        <div className="banner-img"></div>
      </div>
      <div className="join-us container text-center">
        <h2 data-aos="fade-down mb-3">Join Us</h2>
        <div className="d-flex flex-wrap mt-5">
          <div data-aos="fade-down" className="col-12 col-md-6">
            <h6 className="my-3">????????????</h6>
            <p className="p-tc">????????????????????????????????????????????????</p>
            <Link to="/login">
              <button data-aos="fade-down" className="btn-soft-green mt-3">
                SIGN UP
              </button>
            </Link>
          </div>
          <div data-aos="fade-down" className="col-12 col-md-6 mt-5 mt-md-0">
            <h6 className="my-3">???????????????</h6>
            <p className="p-tc">????????????????????????????????????????????????</p>
            <Link to="/calendar">
              <button data-aos="fade-down" className="btn-soft-green mt-3">
                LET'S GO
              </button>
            </Link>
          </div>
        </div>
        <div className="index-moon-circle text-center">
          <img src="/img/Index/moon-circle01.svg" alt="" />
        </div>
      </div>
      {/* FOOTER */}
      <div className="index-footer container-fluid">
        <footer className="">
          <div className="index-footer-top row m-0 p-0 justify-content-between col-12">
            <div className="index-footer-logo my-auto col-12 col-md-2">
              <Link to="#home">
                <img
                  className="nav-logo"
                  src="/img/Index/logo-s-dark.svg"
                  alt=""
                />
              </Link>
            </div>
            <nav className="my-auto col-12 col-md-10 px-0">
              <ul className="index-footer-btn d-flex justify-content-center justify-content-md-end  my-3 my-md-0 px-auto px-md-0 col-12">
                <li>
                  <Link to="/product" className="index-footer-a ml-3">
                    PRODUCT
                  </Link>
                </li>
                <li>
                  <Link to="/article" className="index-footer-a ml-3">
                    ARTICLE
                  </Link>
                </li>
                <li>
                  <Link to="/kit" className="index-footer-a ml-3">
                    KIT
                  </Link>
                </li>
                <li>
                  <Link to="/event" className="index-footer-a ml-3">
                    EVENT
                  </Link>
                </li>
                <li>
                  <Link to="/calendar" className="index-footer-a ml-3">
                    CALCULATOR
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row m-0 mt-4 p-0 index-footer-bottom col-12 justify-content-between align-items-end">
            <div className="small text-center text-md-left p-0 mt-3 col-12 col-md-6">
              <p className="m-0 p-0">
                JSMART co.
                <br />
                ????????????????????????????????????390???2???
                <br />
                jsmart.girls@gmail.com
              </p>
            </div>
            <div className="text-center text-md-right p-0 col-12 col-md-6">
              <p className="small m-0 p-0">
                Copyright ?? JSMART All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default IndexMy
