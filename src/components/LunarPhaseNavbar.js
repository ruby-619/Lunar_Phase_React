import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// react-icon
import { FaShoppingCart, FaUser, FaBookmark } from 'react-icons/fa'

// component
import NavBookmark from './NavBookmark'

function LunarPhaseNavbar(props) {
  const { cartQty, bmQty } = props

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    // Nav scroll then sticky
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
    window.onscroll = function () {
      navbarSticky()
    }
  }, [])

  //  ------ 進行中！
  //  找出 LocalStorage 的收藏數量
  // function checkLocalStorage() {
  //   const localBookmark = localStorage.getItem('bookmark') || 0
  //   const localBookmarkArr = JSON.parse(localBookmark)
  //   const localBookmarkCount = localBookmarkArr.length
  //   console.log(localBookmarkCount)
  // }
  // 用 useEffect或 useInterval 刷新？

  // 失敗的作法，用props傳值的方式也沒有觸發刷新
  // if (!localStorage.getItem('bookmark')) {
  //   console.log(localStorage.getItem('bookmark'))
  //   const localBookmark = JSON.parse(localStorage.getItem('bookmark'))
  //   const localBookmarkNum = localBookmark.length
  //   console.log(localBookmark.length)
  // }

  // const localBookmark = JSON.parse(localStorage.getItem('bookmark'))
  // const localBookmarkNum = localBookmark.length
  // console.log(localBookmark.length)

  return (
    <>
      <nav id="navbar" className={sticky ? 'sticky' : ''}>
        <div className="nav-bar">
          <div className="nav-bar-top d-flex">
            <div className="col-4" />
            <div className="col-4 d-flex justify-content-center">
              <Link to="/">
                <h1 className="my-0">
                  <img
                    className="nav-logo"
                    src="/img/Index/logo-s-dark.svg"
                    alt="Lunar_Phase"
                  />
                </h1>
              </Link>
            </div>
            <div className="nav-member-act col-4 d-flex justify-content-end ">
              <div className="mt-2">
                <p className="small">來賓 您好</p>
              </div>
              <div className="ml-2 mt-2">
                <Link to="/login" className="mx-0">
                  <FaUser />
                </Link>
                <div />
              </div>
              <div className="ml-2 mt-2">
                <Link to="/bookmark" className="mx-0">
                  <FaBookmark />
                </Link>
                <p className="small m-0">(0)</p>
                {/* <p className="small mx-0 mb-1">({bmQty.totalQty})</p> */}
                {/* <NavBookmark /> */}
              </div>
              <div className="ml-2 mt-2">
                <Link to="/cart/item" className="mx-0">
                  <FaShoppingCart />
                </Link>
                <p className="small m-0">(0)</p>
                {/* <p className="small mx-0 mb-1">({cartQty.totalQty})</p> */}
              </div>
            </div>
          </div>
          <div className="nav-bar-bottom">
            <ul className="d-flex justify-content-around col-11 mx-auto">
              <li>
                <Link to="/product">PRODUCT</Link>
              </li>
              <li>
                <Link to="/article1">ARTICLE</Link>
              </li>
              <li>
                <Link to="/kitindex">KIT</Link>
              </li>
              <li>
                <Link to="/event">EVENT</Link>
              </li>
              <li>
                <Link to="/member">JOIN US</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-bar-mobile">
          <Navbar
            bg="bg-nav-bar-mobile"
            expand="lg"
            className="bg-nav-bar-mobile"
          >
            <Container fluid>
              <Navbar.Brand href="#home">
                <h1>
                  <img
                    className="nav-logo"
                    src="/img/Index/logo-s-dark.svg"
                    alt="Lunar_Phase"
                  />
                </h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-center">
                  <Nav.Link href="/product">PRODUCT</Nav.Link>
                  <Nav.Link href="/aarticle">ARTICLE</Nav.Link>
                  <Nav.Link href="/kit">KIT</Nav.Link>
                  <Nav.Link href="/event">EVENT</Nav.Link>
                  <Nav.Link href="/login">JOIN US</Nav.Link>
                  <NavDropdown title="會員中心" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">會員資料</NavDropdown.Item>
                    <NavDropdown.Item href="/">我的收藏</NavDropdown.Item>
                    <NavDropdown.Item href="/cart/item">
                      購物車
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">登入 / 登出</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </nav>
    </>
  )
}
export default LunarPhaseNavbar
