import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import OrderDailySet from './component/kit-shoppingList/OrderDailySet'
import OrderEpSet from './component/kit-shoppingList/OrderEpSet'
import SummaryBig from './component/kit-shoppingList/SummaryBig'
import BtnGreenShopping from './component/kit-shoppingList/BtnGreenShopping'

function KitShoppingList() {
  const [dataLoading, setDataLoading] = useState(false)
  const [smallTotalD, setSmallTotalD] = useState() //日常右上方小總計
  const [smallTotalE, setSmallTotalE] = useState() //環保右上方小總計
  const [total, setTotal] = useState() //下方大總計
  const [shoppingItemDay, setShoppingItemDay] = useState([]) //日常組合商品Cat:1~3
  const [shoppingItemEp, setShoppingItemEp] = useState([]) //環保組合商品Cat:4~6
  const [catDay, setCatDay] = useState([]) //日常種類Cat:1~3
  const [catEp, setCatEp] = useState([]) //環保種類Cat:4~6
  const [handle, setHandle] = useState() //控制下方的元件叉叉
  async function getKitFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址-商品資料
    const url = 'http://localhost:4567/kitset'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const allData = await response.json()
    let kitCategoryA = localStorage.getItem('kitCategoryA')
    let kitCategoryB = localStorage.getItem('kitCategoryB')
    console.log('我是資料庫哦', allData)
    //定義上個set的localStorage == Item.kitCategory
    //相同的話就讓資料出現
    //
    //日常組合
    let kitSetItemDaily = allData.data.filter(
      (Item) => Item.kitCategory == kitCategoryA
    )
    setShoppingItemDay(kitSetItemDaily)
    console.log('filter資料庫哦', kitSetItemDaily)
    console.log('shoppingItem', shoppingItemDay)
    //
    //環保組合
    let kitSetItemEp = allData.data.filter(
      (Item) => Item.kitCategory == kitCategoryB
    )

    setShoppingItemEp(kitSetItemEp)
    // console.log('filter資料庫哦', kitSetItemEp)
    //
    //
    // 設定資料
  }
  async function getKitCatServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址-商品分類
    const url = 'http://localhost:4567/kitcat'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const allDataCat = await response.json()
    let kitCategoryA = localStorage.getItem('kitCategoryA')
    let kitCategoryB = localStorage.getItem('kitCategoryB')
    console.log('我是分類的資料庫哦', allDataCat)
    //
    //定義上個set的localStorage == Item.kitCategory
    //相同的話就讓資料出現
    //
    //日常組合
    let kitCatDaily = allDataCat.data.filter(
      (Cat) => Cat.kitCategoryId == kitCategoryA
    )
    setCatDay(kitCatDaily)
    console.log('filter分類資料庫哦', kitCatDaily)
    //
    //環保組合
    let kitCatEp = allDataCat.data.filter(
      (Cat) => Cat.kitCategoryId == kitCategoryB
    )
    setCatEp(kitCatEp)
    // console.log('filter資料庫哦', kitSetItemEp)
    // 設定資料
  }

  //渲染畫面（更動）就呼叫
  useEffect(() => {
    getKitFromServer()
    getKitCatServer()
    getSetLocalstorage()
    sumTotal()
  }, [])

  //呼叫對應上頁localStorage拿到的值，與資料庫的kitCategory比對，相等的話就叫出那組資料庫
  const getSetLocalstorage = () => {
    console.log('有出來嗎？')
    let kitCategoryA = localStorage.getItem('kitCategoryA')
    console.log('香蕉1號', kitCategoryA)
    let kitCategoryB = localStorage.getItem('kitCategoryB')
    console.log('香蕉2號///', kitCategoryB)
  }

  const sumTotal = () => {
    let allTotal = Number(smallTotalD + smallTotalE)
    setTotal(allTotal.toLocaleString('en-US'))
    console.log('總金額', allTotal)
  }

  return (
    <>
      <LunarPhaseNavbar />
      {/* <!-- kit-shoppingList --> */}
      <div className="container">
        {/* <!-- 最上區塊的TITLE語 --> */}
        <h5 className="h5-tc kit-shopping-list-title">也許你適合這樣的組合</h5>
        {/* <!-- SET 1 -->*/}
        <OrderDailySet
          shoppingItemDay={shoppingItemDay}
          setShoppingItemDay={setShoppingItemDay}
          catDay={catDay}
          setCatDay={setCatDay}
          smallTotalD={smallTotalD}
          setSmallTotalD={setSmallTotalD}
        />
        {/* <!-- SET 2 --> */}
        <OrderEpSet
          shoppingItemEp={shoppingItemEp}
          setShoppingItemEp={setShoppingItemEp}
          catEp={catEp}
          setCatEp={setCatEp}
          smallTotalE={smallTotalE}
          setSmallTotalE={setSmallTotalE}
        />
        {/* <!-- 下方總計 --> */}
        <SummaryBig
          catDay={catDay}
          catEp={catEp}
          smallTotalD={smallTotalD}
          smallTotalE={smallTotalE}
          total={total}
          setTotal={setTotal}
        />
        {/* <!-- 其他選擇＋前往購買按鈕 --> */}
        <BtnGreenShopping />
      </div>
      <Footer />
    </>
  )
}

export default KitShoppingList
