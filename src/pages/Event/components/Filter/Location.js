import React, { useState } from 'react'

const Location = (props) => {
  const { seletedLocation, setseletedLocation } = props
  // let Location = [
  //   '台北',
  //   '新北',
  //   '桃園',
  //   '新竹',
  //   '台中',
  //   '台南',
  //   '宜蘭',
  //   '花蓮',
  //   '台東',
  // ]
  return (
    <div>
      {/* <select
        className="eSELECT p-2 bd-highlight"
        value={seletedLocation}
        onChange={(e) => {
          setseletedLocation(e.target.value)
        }}
      >
        <option value="">請選擇地點</option>
        {Location.map((v) => {
          return (
            <>
              <option value="{v}">{v}</option>
            </>
          )
        })}
      </select> */}
      <select
        className="eSELECT p-2 bd-highlight"
        value={seletedLocation}
        onChange={(e) => {
          setseletedLocation(e.target.value)
        }}
      >
        <option value="">請選擇地點</option>
        <option value="1">台北市</option>
        <option value="2">新北市</option>
        <option value="3">桃園市</option>
        <option value="4">新竹市</option>
        <option value="5">苗栗縣</option>
        <option value="6">台中市</option>
        <option value="7">彰化縣</option>
        <option value="8">南投線</option>
        <option value="9">雲林縣</option>
        <option value="10">嘉義市</option>
        <option value="11">台南市</option>
        <option value="12">高雄市</option>
        <option value="13">宜蘭縣</option>
        <option value="14">花蓮縣</option>
        <option value="15">台東縣</option>

      </select>
    </div>
  )
}

export default Location
