import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

function Breadcrumb() {
  return (
    <>
      <div className="top-line container-fluid">
        <div className="d-flex justify-content-between">
          <div className="bread-box">
            <div className="bread d-flex">
              <a href>HOME</a>
              <p>&gt;</p>
              <a href>PRODUCT</a>
            </div>
          </div>
          <div className="search-box">
            <form className="search">
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
              <button className="search-button" href="#">
                <RiSearchLine />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb
