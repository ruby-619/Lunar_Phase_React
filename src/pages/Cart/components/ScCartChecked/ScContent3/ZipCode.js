import React from 'react'
import { countries, townships, postcodes } from '../../../../../data/townships'

function ZipCode(props) {
  const {country, setCountry, township, setTownship}=props
  console.log(countries, townships, postcodes)
  // 記錄陣列的索引值，預設值是-1，相當於"請選擇xxx"
  return (
    <>
    {/* 選單遇到一樣的問題，無法改變選擇後畫面 */}
    {/* value={`{"id":"${index}", "val":"${value}"}`} */}
      <select
        value={country}
        onChange={(e) => {
          // 將字串轉成數字
          setCountry(+e.target.value)
          // 重置township的值
          setTownship(-1)
        }}
        className="scSelect sc-contentFont mb-4"
        name="homeUserCity"
        >
        <option value="-1">選擇縣市</option>
        {countries.map((value, index) => (
          <option key={index} value={+index}>
            {value}
          </option>
        ))}
      </select>
      <select 
        value={township}
        onChange={(e) => {
          // 將字串轉成數字
          setTownship(+e.target.value)
        }}
        className="scSelect sc-contentFont mb-4" name="homeUserArea" id="">
        <option value="-1">選擇區域</option>
        {country > -1 &&
          townships[country].map((value, index) => (
            <option key={index} value={+index}>
              {value}
            </option>
          ))}
      </select>
      {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
      {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}
      {/* <h3>
        郵遞區號:
        {country > -1 && townshipId > -1 && postcodes[country][township]}
      </h3> */}
    </>
  )
}

export default ZipCode
