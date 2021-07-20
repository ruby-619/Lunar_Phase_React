import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import OrderDailySet from './component/kit-shoppingList/OrderDailySet'
import OrderEpSet from './component/kit-shoppingList/OrderEpSet'
import SummaryBig from './component/kit-shoppingList/SummaryBig'
import BtnGreenShopping from './component/kit-shoppingList/BtnGreenShopping'
import SvgClothPad from './component/svg-component/SvgClothPad'
import SvgCup from './component/svg-component/SvgCup'
import SvgPanty from './component/svg-component/SvgPanty'
import { TiPlus } from 'react-icons/ti'
import { HiOutlineShoppingBag } from 'react-icons/hi'

function KitShoppingList() {
  const [dataLoading, setDataLoading] = useState(false)
  const [smallTotalD, setSmallTotalD] = useState() //日常右上方小總計
  const [smallPriceD, setSmallPriceD] = useState() //未經月份加成的價格
  const [smallTotalE, setSmallTotalE] = useState() //環保右上方小總計
  const [total, setTotal] = useState(0) //下方大總計
  const [shoppingItemDay, setShoppingItemDay] = useState([]) //日常組合商品Cat:1~3
  const [shoppingItemEp, setShoppingItemEp] = useState([]) //環保組合商品Cat:4~6
  const [catDay, setCatDay] = useState([]) //日常種類Cat:1~3
  const [catEp, setCatEp] = useState({}) //環保種類Cat:4~6
  const [handle, setHandle] = useState(true) //控制下方的元件叉叉
  const [cuteBtn, setCuteBtn] = useState({
    clickKey: 0, //判斷是誰被點
    arr: [
      {
        kitCategoryName: '環保組合-布衛生棉',
        cat: 4,
        icon: <SvgClothPad className="btn-cloth-pad" />,
        click: true,
      },
      {
        kitCategoryName: '環保組合-月亮杯',
        cat: 5,
        icon: <SvgCup className="btn-cup" />,
        click: false,
      },
      {
        kitCategoryName: '環保組合-月亮褲',
        cat: 6,
        icon: <SvgCup className="btn-cup" />,
        click: false,
      },
    ],
  }) //環保組合 右3小按鈕

  //++++++++++++++++++++++++++++
  // 設定資料(分類的資料庫)
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

    let kitCategoryA = localStorage.getItem('kitCategoryA') //localStorage選了日常幾號
    let kitCategoryB = localStorage.getItem('kitCategoryB') //localStorage選了環保幾號
    console.log('我是資料庫哦', allData)
    //定義上個set的localStorage == Item.kitCategory
    //相同的話就讓資料出現
    //
    //資料物件-日常
    let kitSetItemDaily = allData.data.filter(
      (Item) => Item.kitCategory == kitCategoryA
    )
    setShoppingItemDay(kitSetItemDaily)

    // console.log('filter資料庫哦', kitSetItemDaily)
    // console.log('shoppingItem', shoppingItemDay)
    //

    // //資料物件-環保
    if (kitCategoryB) {
      let kitSetItemEp = allData.data.filter(
        (Item) => Item.kitCategory == kitCategoryB
      )
      setShoppingItemEp(kitSetItemEp)
    } else {
      let kitSetItemEp = allData.data.filter((Item) => Item.kitCategory == 4)

      setShoppingItemEp(kitSetItemEp)
    }

    // console.log('filter資料庫哦', kitSetItemEp)
    //++++++++++++++++++++++++++++
    //旁邊三個小可愛按鈕的物件內容
    let arrthreeBtn = [] //拿到的其中一個按鈕的內容

    let threeBtn = {
      clickKey: 0, //判斷是誰被點
      arr: [
        {
          kitCategoryName: '環保組合-布衛生棉',
          cat: 4,
          icon: <SvgClothPad className="btn-cloth-pad" />,
          click: true,
        },
        {
          kitCategoryName: '環保組合-月亮杯',
          cat: 5,
          icon: <SvgCup className="btn-cup" />,
          click: false,
        },
        {
          kitCategoryName: '環保組合-月亮褲',
          cat: 6,
          icon: <SvgPanty className="btn-panty" />,
          click: false,
        },
      ],
    }

    threeBtn.arr = threeBtn.arr.map((e) => {
      return {
        ...e,
        //在 map 出來的陣列物件中加上新的欄位 -> item:{從資料庫篩出的環保物件}
        items: allData.data.filter((ee) => {
          return ee.kitCategory == e.cat
        }),
      }
    })
    console.log('threeBtn.arr', threeBtn.arr)
    // 如果localEP有值的話
    if (kitCategoryB) {
      console.log('kitCategory有東西', kitCategoryB)
      // threeBtn.show = true
      //判斷是誰被點
      threeBtn.clickKey = threeBtn.arr
        .map((e, k) => {
          // console.log('e.cat',e.cat)
          return e.cat
        })
        // 因為 e.cat == threeBtn.clickKey
        // .indexOf()判斷符合條件的物件是陣列中的第幾個，()內必須是數字才能做判斷
        .indexOf(Number(kitCategoryB))
      // console.log('threeBtn.clickKey', threeBtn.clickKey)
      console.log('threeBtnu有什麼', threeBtn)

      threeBtn.arr = threeBtn.arr.map((e) => {
        return { ...e, click: true ? false : false }
      })

      threeBtn.arr[threeBtn.clickKey].click = true
      // console.log('threeBtn.clickKey拿到什麼', threeBtn.clickKey)
      arrthreeBtn = threeBtn.arr[threeBtn.clickKey]
      console.log('arrthreeBtn', arrthreeBtn)
    } else {
      // threeBtn.show = false
      let dleteBB = false
      setHandle(dleteBB)
    }
    setCuteBtn(threeBtn)
    // console.log('這邊///', cuteBtn)
    setCatEp(arrthreeBtn)
  }
  //偵測點擊3小可愛事件函式
  const threeClick = (obj, k) => {
    setCuteBtn({
      // show: true,
      // 判斷是誰被點
      clickKey: k,
      arr: cuteBtn.arr.map((e) => {
        return {
          ...e,
          // obj到時候要放觸發函式的變數，也就是e
          // 原本的 e 裡的 kitCategory 與被觸發的 obj.kitCategory 相同時，表示被按下 click:true
          click:
            //e.kitCategory === obj.kitCategory? !e.click? true:false
            e.cat === obj.cat ? true : false,
        }
      }),
    })
    let control = cuteBtn.arr[k].items
    let newCatEp = cuteBtn.arr[k]
    console.log('control', control)
    // console.log('newCatEp', newCatEp)
    setShoppingItemEp(control)
    setCatEp(newCatEp)
    // console.log('catEp', catEp)
  }

  //++++++++++++++++++++++++++++
  //叉叉按鈕事件
  const deleteFunction = (e) => {
    //判斷是否有點擊事件
    //e為點擊事件
    if (e) {
      let btnDlete = cuteBtn
      if (handle) {
        let dleteBB = false
        setHandle(dleteBB)
      } else {
        let dleteAA = true
        setHandle(dleteAA)
      }
      console.log('刪除用的cuteBtn', cuteBtn)
      //需要有監聽到動作就再次判斷handle狀態
      setCuteBtn(btnDlete)
      sumEpSmall()
      sumTotal(handle)
    }
  }

  //++++++++++++++++++++++++++++

  // 設定資料(分類的資料庫)
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
    // console.log('我是分類的資料庫哦', allDataCat)
    //
    //定義上個set的localStorage == Item.kitCategory
    //相同的話就讓資料出現
    //
    //日常組合
    let kitCatDaily = allDataCat.data.filter(
      (Cat) => Cat.kitCategoryId == kitCategoryA
    )
    setCatDay(kitCatDaily)
  }
  //++++++++++++++++++++++++++++
  //呼叫對應上頁localStorage拿到的值，與資料庫的kitCategory比對，相等的話就叫出那組資料庫
  const getSetLocalstorage = () => {
    let kitCategoryA = localStorage.getItem('kitCategoryA')
    console.log('Localstorage日常', kitCategoryA)
    let kitCategoryB = localStorage.getItem('kitCategoryB')
    console.log('Localstorage環保', kitCategoryB)
  }
  //++++++++++++++++++++++++++++
  //渲染畫面（更動）就呼叫

  useEffect(() => {
    deleteFunction()
  }, [cuteBtn])

  useEffect(() => {
    getKitFromServer()
    getKitCatServer()
    getSetLocalstorage()
    sumDaySmall()
    sumEpSmall()
    // console.log('DidUpdate', smallTotalD)
  }, [])

  useEffect(() => {
    sumTotal()
    // console.log('DidUpdate', smallTotalD)
  }, [smallTotalD, smallTotalE])

  //++++++++++++++++++++++++++++
  //小區塊的總計需要的狀態
  const [clickMon, setClickMon] = useState(1) //紀錄是哪個數字(月份按鈕)被按
  const [clickName, setClickName] = useState('一個月') //紀錄是哪個月份名稱
  const btnDropdown = {
    click: '一個月',
    arr: [
      {
        name: '一個月',
        month: 1,
      },
      {
        name: '二個月',
        month: 2,
      },
      {
        name: '三個月',
        month: 3,
      },
      {
        name: '四個月',
        month: 4,
      },
      {
        name: '五個月',
        month: 5,
      },
    ],
  } //按鈕下拉選單
  const btnHalfYear = { name: '半年', month: 6 } //按鈕半年
  const btnYear = { name: 'ㄧ年', month: 12 } //按鈕一年
  //紀錄誰被按然後送出倍率
  const orderMonth = (o, s) => {
    //函式變數可以自定義有幾種類型 o=obj a=array
    //函式會自己判斷然後算出來
    if (s !== undefined) {
      setClickName(s)
    }
    setClickMon(o)

    // console.log('辛酸淚滴', o, s)
  }
  // console.log('我就看你是啥', btnDropdown.arr[0].month)
  //++++++++++++++++++++++++++++
  //日常右上小總計
  const sumDaySmall = (Item) => {
    let total = 0
    let total2 = 0
    //本人(true為存在所以要大於0)＋本人的長度
    if (Item && Item.length > 0) {
      for (let i = 0; i < Item.length; i++) {
        total += Item[i].itemPrice * clickMon
        total2 += Item[i].itemPrice
      }
      setSmallPriceD(total2 * 0.8)
      setSmallTotalD((total * 0.8).toLocaleString('en-US'))
      return total.toLocaleString('en-US')
    }
  }
  console.log('YOOOOO', smallTotalD)

  //環保右上小總計
  const sumEpSmall = (Item) => {
    let total = 0
    //本人(true為存在所以要大於0)＋本人的長度
    if (handle) {
      if (Item && Item.length > 0) {
        for (let i = 0; i < Item.length; i++) {
          total += Item[i].itemPrice
        }
        setSmallTotalE((total * 0.8).toLocaleString('en-US'))
        return total.toLocaleString('en-US')
      }
    } else {
      let nototal = false
      setSmallTotalE(nototal)
    }
  }

  //下方大總計
  const sumTotal = (h) => {
    console.log('大總計振作點')
    // console.log('測試', sumEpSmall(shoppingItemEp))
    // 先把千位符的','去掉，然後轉數字Number()
    console.log('判斷是什麼', smallTotalD, smallTotalE)
    if (smallTotalD) {
      console.log('handle', h)
      if (smallTotalE) {
        let moneyD = smallTotalD.replace(/,/g, '')
        let moneyE = 0
        if (h !== undefined) {
          if (h) {
            moneyE = 0
          } else {
            moneyE = smallTotalE.replace(/,/g, '')
          }
        } else {
          moneyE = smallTotalE.replace(/,/g, '')
        }
        let allTotal = Number(moneyD) + Number(moneyE)
        setTotal(allTotal.toLocaleString('en-US'))
      } else {
        let moneyD = smallTotalD.replace(/,/g, '')
        let allTotal2 = Number(moneyD)
        console.log('有多少', allTotal2)
        setTotal(allTotal2.toLocaleString('en-US'))
      }
    }
  }

  //++++++++++++++++++++++++++++
  // 前往結帳紀錄localStorage
  // localStorage傳的資料:
  // id: itemId, //傳itemId
  // name: itemName,
  // amount: qty, //傳Qty
  // price: itemPrice, //傳單價
  // image: itemImg, //傳img

  const sentLocal = () => {
    console.log('catDay', catDay)
    let moneyD = smallPriceD.replace(/,/g, '')
    let moneyE = smallTotalE.replace(/,/g, '')

    let kitcartD = {
      id: '1',
      name: catDay[0].kitCategoryName,
      amount: clickMon,
      price: Number(moneyD),
      itemImg: `/img/Kit/${shoppingItemDay[0].kitImg}`,
    }
    let kitcartDE = [
      {
        id: '1',
        name: catDay[0].kitCategoryName,
        amount: clickMon,
        price: Number(moneyD),
        itemImg: `/img/Kit/${shoppingItemDay[0].kitImg}`,
      },
      {
        id: '2',
        name: catEp.kitCategoryName,
        amount: 1,
        price: Number(moneyE),
        itemImg: `/img/Kit/${shoppingItemEp[0].kitImg}`,
      },
    ]
    localStorage.setItem('kitcart', JSON.stringify(kitcartD))
    if (handle) {
      localStorage.setItem('kitcart', JSON.stringify(kitcartDE))
    }
  }

  //++++++++++++++++++++++++++++
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
          catDay={catDay}
          sumDaySmall={sumDaySmall}
          smallTotalD={smallTotalD}
          orderMonth={orderMonth}
          clickMon={clickMon}
          clickName={clickName}
          btnDropdown={btnDropdown}
          btnHalfYear={btnHalfYear}
          btnYear={btnYear}
        />
        {/* <!-- SET 2 --> */}
        {handle ? (
          <OrderEpSet
            shoppingItemEp={shoppingItemEp}
            catEp={catEp}
            handel={handle}
            sumEpSmall={sumEpSmall}
            smallTotalE={smallTotalE}
            cuteBtn={cuteBtn}
            setCuteBtn={setCuteBtn}
            threeClick={threeClick}
            deleteFunction={deleteFunction}
          />
        ) : (
          <div>
            <TiPlus className="TiPlus-r" size="100px" />
            <div
              className="add-EPitem-wrap"
              onClick={() => {
                deleteFunction(true)
              }}
            >
              <div className="add-EPitem">
                <div className="add-EPitem-box">
                  <h2 className="h2-tc ">點我</h2>
                  <HiOutlineShoppingBag className="ShoppingBag" size="50px" />
                </div>
                <h5 className="h5-tc">加購環保生理用品</h5>
              </div>
            </div>
          </div>
        )}
        {/* <!-- 下方總計 --> */}
        <SummaryBig
          catDay={catDay}
          catEp={catEp}
          handle={handle}
          smallTotalD={smallTotalD}
          smallTotalE={smallTotalE}
          total={total}
        />
        {/* <!-- 其他選擇＋前往購買按鈕 --> */}
        <BtnGreenShopping sentLocal={sentLocal} />
      </div>
      <Footer />
    </>
  )
}

export default KitShoppingList
