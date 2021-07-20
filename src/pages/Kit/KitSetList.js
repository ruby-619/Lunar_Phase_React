import React, { useState } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import DailySet from './component/kit-setList/DailySet'
import EpSet from './component/kit-setList/EpSet'
import BtnGreenBig from './component/kit-setList/BtnGreenBig'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function KitSetList() {
  const [objDaily, setObjDaily] = useState({
    name: '一般組合',
    key: null,
    arr: [
      {
        name: '日常-量適中',
        span: '衛生棉＋衛生棉條',
        kitCategory: 1,
        click: false,
      },
      {
        name: '日常-量多',
        span: '衛生棉＋衛生棉條',
        kitCategory: 2,
        click: false,
      },
      {
        name: '戶外派',
        span: '衛生棉條組',
        kitCategory: 3,
        click: false,
      },
    ],
  })

  const [objEp, setObjEp] = useState({
    name: '環保組合加購區',
    //判定 objDaily 按過後才能按這邊
    canClick: false,
    key: null,
    arr: [
      {
        name: '布衛生棉',
        span: null,
        kitCategory: 4,
        click: false,
      },
      {
        name: '月亮杯',
        span: null,
        kitCategory: 5,
        click: false,
      },
      {
        name: '月亮褲',
        span: null,
        kitCategory: 6,
        click: false,
      },
    ],
  })

  //事件觸發(ex.onClick)了之後要做的動作
  const functionA = (obj, key) => {
    //obj為物件
    console.log('obj', obj)
    //obj在陣列中的索引順序
    console.log('key', key)
    //ObjDaily被改變
    setObjDaily({
      name: '一般組合',
      key: key,
      // e 為 objA.arr 裡的 1 個 {}
      arr: objDaily.arr.map((e) => {
        return {
          ...e,
          // obj到時候要放觸發函式的變數，也就是e
          // 原本的 e 裡的 kitCategory 與被觸發的 obj.kitCategory 相同時，表示被按下 click:true
          click:
            e.kitCategory === obj.kitCategory
              ? !e.click
                ? true
                : false
              : false,
        }
      }),
    })
  }

  //給環保組合用的函示
  const functionB = (obj, key) => {
    console.log('obj', obj)
    //obj在陣列中的索引順序
    console.log('key', key)
    //ObjDaily被按了objEp才能被選擇
    if (objDaily.key !== null) {
      //ObjDaily被改變
      setObjEp({
        name: '環保組合加購區',
        key: key,
        // e 為 objA.arr 裡的 1 個 {}
        arr: objEp.arr.map((e) => {
          return {
            ...e,
            // obj到時候要放觸發函式的變數，也就是e
            // 原本的 e 裡的 kitCategory 與被觸發的 obj.kitCategory 相同時，表示被按下 click:true
            click:
              //e.kitCategory === obj.kitCategory? !e.click? true:false
              e.kitCategory === obj.kitCategory
                ? !e.click
                  ? true
                  : false
                : false,
          }
        }),
      })
      // setObjEp結束
    }
    // if 結束
  }

  const goShoppingList = () => {
    // 判斷環保組合有無被選取(key)
    // some 方法為有被選取一個就得 true
    const result = objEp.arr.some((e) => e.click === true)
    console.log('result', result)
    //objDaily.key 的 key 為 functionA&B 的索引值 key
    let kitCategoryA = objDaily.arr[objDaily.key].kitCategory
    console.log('kitCategoryA', kitCategoryA)
    let kitCategoryB = ''
    //判斷鑰匙有沒有被碰過，有點擊才有紀錄
    if (objEp.key !== null) {
      kitCategoryB = objEp.arr[objEp.key].kitCategory
      console.log('kitCategoryB', kitCategoryB)
    }

    localStorage.setItem('kitCategoryA', kitCategoryA)
    // 如果 result == true 就取得 objC 的值
    if (result) {
      localStorage.setItem('kitCategoryB', kitCategoryB)
    } else {
      localStorage.removeItem('kitCategoryB')
    }
    Swal.fire({
      position: 'center',
      // icon: 'question',
      width: '30%',
      imageUrl: '/img/Kit/1103-confetti-outline.gif',
      title: '這是你的專屬優惠',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <>
      <LunarPhaseNavbar />
      {/* <!-- kit-setList --> */}
      <div className="container">
        <DailySet functionA={functionA} objDaily={objDaily} />
        <hr />
        <EpSet functionB={functionB} objEp={objEp} objDaily={objDaily} />
        <Link to="/kitShoppingList">
          <BtnGreenBig goShoppingList={goShoppingList} objDaily={objDaily} />
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default KitSetList
