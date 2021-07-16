import React, { useState, useRef } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { FcBookmark } from 'react-icons/fc'
import { IoMoon } from 'react-icons/io5'
import { RiMoonClearFill } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
const _ = require('lodash')
const Swal = require('sweetalert2')

function Form() {
  const [myInput, setMyInput] = useState('')
  const inputEl = useRef()

  function HandleClick() {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: '成功加入購物車',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  // const myAlert = ()=>(
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Your work has been saved',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // )

  // 使用經緯度去連接googlemap
  const your_lng = 121.796067
  const your_lat = 25.13967
  const showInMapClicked = () => {
    window.open('https://maps.google.com?q=' + your_lat + ',' + your_lng)
  }

  // 測試lodash
  const arr = [1, 2]
  const newArr = _.remove(arr, function (n) {
    for (let i = 0; i < arr.length; i++) {
      if (n === 2) {
        return true
      }
    }
  })

  console.log('arr', arr, 'newArr', newArr)

  // arr = _.remove(arr, ['name'])
  const [addToCollection, setAddToCollection] = useState('22px')
  const [chg, setChg] = useState(1)
  const [chgMoon, setChgMoon] = useState(true)
  // 養成習慣，先定義有哪些欄位屬性
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 每個欄位的錯誤訊息
  // 我們把錯誤訊息變成一個狀態
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 處理每個欄位的變動
  const handleFieldChange = (e) => {
    // 更新輸入欄位
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }

    setFields(updatedFields)
  }

  // 處理表單送出
  const handleSubmit = (e) => {
    // 阻擋表單送出預設行為
    e.preventDefault()

    // FormData: 沒有外觀的表單
    const data = new FormData(e.target)

    console.log(data.get('email'))
    console.log(data.get('password'))

    // 利用狀態來得到輸入的值
    console.log(fields)

    // ex. 送出表單資料到伺服器
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // })
  }

  // form有更動會觸發這個函式
  // onChange 可以偵測使用者正在更動哪個欄位
  // 代表可以先把這個欄位的錯誤訊息先清空
  const handleChange = (e) => {
    console.log('更動欄位：', e.target.name)

    // 該欄位錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(updatedFieldErrors)
  }

  // 有錯誤的訊息會觸發在這裡
  const handleInvalid = (e) => {
    e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      <div className="mt-5"></div>
      <FaTimes className=" "/>

      <div className="col-8 mx-auto">
        {chgMoon ? <IoMoon /> : <RiMoonClearFill />}

        <h5
          className="mytitlehover"
          onMouseOver={() => {
            setChgMoon(false)
          }}
          onMouseLeave={() => {
            setChgMoon(true)
          }}
        >
          測試標題
        </h5>
        <hr />
        <h5>Input內容:{myInput}</h5>
        <input
          type="text"
          value={myInput}
          // ref={inputEl}
          onChange={(e) => setMyInput(e.target.value)}
        />
        <button
          onClick={() => {
            setMyInput('123')
          }}
        >
          {' '}
          一鍵輸入{' '}
        </button>

        <hr />
        {/* 測試sweetalert2 */}
        <button onClick={HandleClick}>嗨,測試sweetalert2</button>

        <hr />
        {/* Z(比例尺) */}
        <iframe
          title="1"
          src="https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=臺北市羅斯福路二段102號&z=16&output=embed&t="
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />

        <button onClick={showInMapClicked}>連到googlemap</button>
        {/* <img src={`/img/Product/${imgName}`}  alt=""/> */}
        {/* 錯誤訊息顯示在欄位的下方，
    但錯誤訊息依然是瀏覽器的預設錯誤訊息
    ，只是統一css風格 */}
        <div>
          {chg ? (
            <BsBookmark
              size="22px"
              onMouseDown={() => {
                setChg(0)
              }}
            />
          ) : (
            <FcBookmark
              size="22px"
              onMouseDown={() => {
                setChg(1)
              }}
            />
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          onChange={handleChange}
          onInvalid={handleInvalid}
        >
          <div className="form-group">
            <label>帳號</label>
            <input
              type="text"
              name="username"
              value={fields.username}
              onChange={handleFieldChange}
              required
              placeholder="帳號"
            />
            {fieldErrors.username && (
              <small className="text-danger form-text">
                {fieldErrors.username}
              </small>
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              required
              placeholder="email信箱"
            />
            {fieldErrors.email && (
              <small className="text-danger form-text">
                {fieldErrors.email}
              </small>
            )}
          </div>

          <div className="form-group">
            <label>密碼</label>
            <input
              type="password"
              name="password"
              value={fields.password}
              onChange={handleFieldChange}
              placeholder="密碼"
              required
              minLength="6"
            />
            {fieldErrors.password && (
              <small className="text-danger form-text">
                {fieldErrors.password}
              </small>
            )}
          </div>
          <button type="submit">提交</button>
        </form>
      </div>
    </>
  )
}

export default Form
