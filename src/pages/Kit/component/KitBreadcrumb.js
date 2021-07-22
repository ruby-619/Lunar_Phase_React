import React from 'react'
import { Link } from 'react-router-dom'
import { RiSearchLine } from 'react-icons/ri'

function KitBreadcrumb() {
  return (
    <>
      <div className="top-line container-fluid">
        <div className="d-flex justify-content-between">
          <div className="bread-box">
            <div className="bread d-flex">
              <Link to="/">HOME</Link>
              <p>&gt;</p>
              <Link to="/kitindex">KIT</Link>
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

export default KitBreadcrumb
