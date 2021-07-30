// import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { GiCampingTent, GiBookCover, GiHamburgerMenu } from 'react-icons/gi'
import { FaPaintBrush, FaHandPaper } from 'react-icons/fa'
import {IoIosWine} from 'react-icons/io'


const EventNAV = (props) => {
  // const url = props.match.url
  // const path = props.match.path
  return (
    <div class="container">
      <div class="row">
      <h2 className="m-auto EventListHead">EVENT</h2>
        <div class="Enav mt-3">
          <ul class="d-flex justify-content-around">
            <li>
              <Link to="/category/1" className="EventNavLink"><GiCampingTent/> 戶外</Link>
            </li>
            <li>
              <Link to="/category/2" className="EventNavLink"><FaPaintBrush/> 藝文</Link>
            </li>
            <li>
              <Link to="/category/3" className="EventNavLink"><GiBookCover/> 講座</Link>
            </li>
            <li>
              <Link to="/category/4" className="EventNavLink"><FaHandPaper/> 手作</Link>
            </li>
            <li>
              <Link to="/category/5" className="EventNavLink"><IoIosWine size="22px"/>品味</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withRouter(EventNAV)
