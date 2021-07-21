import React, { useState, useEffect } from 'react'
import './cart.scss'
import CartKitStep1 from './CartKitStep1'
import { countries, townships, postcodes } from '../../data/townships'

function CartKit(props) {
  const { cartQty, setCartQty, updateQty, bmQty, updateBmQty } = props
  const [step, setStep] = useState(1)
  const [isCon, setIsCon] = useState(false) //物流是否為便利商店
  const [shipPrice, setShipPrice] = useState(0) //運費
  const [shipType, setShipType] = useState('') //物流方式
  const [paymentWay, setPaymentWay] = useState('') //付款方式
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [selectedConAddress, setSeletedConAddress] = useState('') //超商地址
  const [scOrderId, setScOrderId] = useState(0) //訂單編號

  // 從localStorage取出購物車資訊，往子女元件傳遞
  const orderItems = localStorage.getItem('kitcart')
  const orderItemsStr = JSON.parse(orderItems)

  const [inputs, setInputs] = useState({
    scname: '', //收貨人姓名  ok
    phone: '', //收貨人電話  ok
    homeAddress: '', //收貨地址  ok
    conType: '',
    conCity: '', //超商(縣市)
    conStore: '', //超商(店家)
  })

  // 切換開始作檢查的旗標
  const [startToChecked, setStartToChecked] = useState(false)
  // 錯誤陣列，記錄有錯誤的欄位名稱
  const [errors, setErrors] = useState([])
  // 處理每個欄位的變動 //handleFieldChange
  const onChangeForField = (e) => {
    // 更新輸入欄位
    const updatedInputs = {
      ...inputs,
      [e.target.name]: e.target.value,
    }
    setInputs(updatedInputs)
  }

  // 處理表單送出
  const handleSubmit = (e) => {
    setStartToChecked(true)
    const newErrors = []
    if (inputs.scname.trim()) {
      newErrors.push('scname')
      setErrors(newErrors)
    }
    if (inputs.phone.trim()) {
      newErrors.push('phone')
      setErrors(newErrors)
    }
    if (errors.length !== 0) {
      return setStep(3)
    }
  }

  // 切換合法不合法的css與提示字詞 //fieldValidCSS
  const handleInvalid = (fieldName) => {
    if (!startToChecked) return ''

    return errors.includes(fieldName) ? 'is-invalid' : 'is-valid'
  }

  useEffect(()=>{
    updateBmQty()
    updateQty()
  },[])
  useEffect(() => {
    handleSubmit()
  }, [inputs])

  /*
   data格式:{
   "orderItems":[{購物車第1筆商品},{購物車第2筆商品},...],
   "orderInfo":{
      "orderId":1625385519035,"username":"jessica","orderPrice":2200,"paymentTypeId":5
      }
   }
  */
  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  // 計算總商品數量的函式
  const amountSum = (items) => {
    let totalAmount = 0
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].amount
    }
    return totalAmount
  }

  async function addOrderToSever(e) {
    const orderId = +new Date()
    // setInputs({...inputs,
    //   [inputs.orderIdNum]: orderId,})
    setScOrderId(orderId)
    let data = {
      orderItems: [],
    }
    for (let item of orderItemsStr) {
      const tempObj = {
        orderId: orderId,
        orderItemsId: item.id,
        checkPrice: item.price,
        checkQty: item.amount,
        checkSubtotal: item.price * item.amount,
      }
      data.orderItems.push(tempObj)
    }
    //  `orderId`, `username`, `receiverName`, `receiverPhone`, `orderPrice`, `shippingType`, `shippingPrice`, `conStore`, `conAddress`, `homeAddress`, `paymentType`, `created_at`, `updated_at`
    data.orderInfo = {
      orderId: orderId,
      // orderId: inputs.orderIdNum,
      username: 'jessica',
      receiverName: inputs.scname,
      receiverPhone: inputs.phone,
      orderPrice: sum(orderItemsStr) + shipPrice,
      shippingType: shipType,
      shippingPrice: shipPrice,
      // conStore: seletedConCity+seletedConStore,
      conStore: inputs.conType + inputs.conCity + inputs.conStore,
      conAddress: selectedConAddress,
      homeAddress:
        country > -1 &&
        township > -1 &&
        postcodes[country][township] +
          countries[country] +
          townships[country][township] +
          inputs.homeAddress,
      paymentType: paymentWay,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:4567/cart/event/order/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    // 轉成json檔傳到伺服器
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log('JSON', JSON.stringify(data))
    // console.log('JSON parse',JSON.parse(JSON.stringify(data)).orderItems)

    const response = await fetch(request)
    const dataRes = await response.json()

    console.log('伺服器回傳的json資料', dataRes)
  }

  useEffect(() => {
    console.log('step', step)
    console.log('isCon', isCon)
    console.log('shipPrice', shipPrice)
    console.log('shipType', typeof shipType, shipType, 'shipPrice', shipPrice)
    console.log('selectedConAddress', selectedConAddress)
    console.log('country', country, 'township', township)
    console.log('errors', errors)
  }, [
    step,
    isCon,
    shipPrice,
    shipType,
    selectedConAddress,
    country,
    township,
    errors,
  ])

  const switchSteps = (step) => {
    switch (step) {
      case 1:
        return (
          <CartKitStep1
            bmQty={bmQty}
            updateQty={updateQty}
            cartQty={cartQty}
            setCartQty={setCartQty}
            nextStep={() => setStep(2)}
            setStep={setStep}
          />
        )

      default:
        return ''
    }
  }
  return switchSteps(step)
}

export default CartKit
