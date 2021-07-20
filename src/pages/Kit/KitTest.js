import React, { useEffect, useState } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import Step from './component/kit-test/Step'
import QuestionWall from './component/kit-test/QuestionWall'
import SvgClothPadS from './component/svg-component/SvgClothPadS'
import SvgSport from './component/svg-component/SvgSport'
import SvgTampon from './component/svg-component/SvgTampon'
import SvgSetEp from './component/svg-component/SvgSetEp'
import Swal from 'sweetalert2'

function KitTest1() {
  const [test, setTest] = useState([
    {
      qId: 1,
      click: true,
      key: null,
      qNum: 'Q1',
      icon: <SvgClothPadS />,
      questionText: '以每個月白天的平均量來說，我總是使用約多長的生理用品呢？',
      questionImg: 'test01.jpg',
      answer: [
        {
          aId: 1,
          click: false,
          aTitle: '量少型',
          aSubTitle: '18cm',
        },
        {
          aId: 2,
          click: false,
          aTitle: '量普通型',
          aSubTitle: '21cm',
        },
        {
          aId: 3,
          click: false,
          aTitle: '量多型',
          aSubTitle: '22cm以上',
        },
      ],
    },
    {
      qId: 2,
      click: false,
      key: null,
      qNum: 'Q2',
      icon: <SvgTampon />,
      questionText: '有使用棉條的經驗嗎?',
      questionImg: 'test03.jpg',
      answer: [
        {
          aId: 1,
          click: false,
          aTitle: '完全不用',
          aSubTitle: '我會怕ＱＱ',
        },
        {
          aId: 2,
          click: false,
          aTitle: '有時會',
          aSubTitle: '特定時刻使用',
        },
        {
          aId: 3,
          click: false,
          aTitle: '棉條派',
          aSubTitle: '我只用棉條',
        },
      ],
    },
    {
      qId: 3,
      click: false,
      key: null,
      qNum: 'Q3',
      icon: <SvgSport />,
      questionText: '月經來臨的期間，運動或是戶外活動的頻率？',
      questionImg: 'test02.jpg',
      answer: [
        {
          aId: 1,
          aTitle: '沒有',
          click: false,
          aSubTitle: '不喜歡戶外運動 :(',
        },
        {
          aId: 2,
          aTitle: '有時候',
          click: false,
          aSubTitle: '還是會有外出需求',
        },
        {
          aId: 3,
          aTitle: '經常',
          click: false,
          aSubTitle: '我是追風的女子！',
        },
      ],
    },
    {
      qId: 4,
      click: false,
      key: null,
      qNum: 'Q4',
      icon: <SvgSetEp />,
      questionText: '是否會想嘗試月亮杯或是月亮褲等重複利用型的生理用品呢？',
      questionImg: 'test04.jpg',
      answer: [
        {
          aId: 1,
          click: false,
          aTitle: '是的！',
          aSubTitle: '我一直都很想嘗試',
          moreChoice: [
            { cId: 4, cName: '布衛生棉', click: false },
            { cId: 5, cName: '月亮杯', click: false },
            { cId: 6, cName: '月亮褲', click: false },
          ],
        },
        {
          aId: 2,
          click: false,
          aTitle: '不了',
          aSubTitle: '下次再說吧',
        },
      ],
    },
  ])

  // 點擊換題目跟答案
  let clickAnswer = (t, i, tt, ii) => {
    // console.log('我是t', t)
    // console.log('我是i', i)
    // console.log('我是tt', tt)
    // console.log('我是ii', ii)
    let testData = test.map((e, p) => {
      console.log('我是e', e, '我是t', t)
      console.log('我是p', p, '我是i', i)
      return {
        ...e,
        click: p == i + 1 || (i == 3 && p == test.length - 1) ? true : false, //選項有沒有對到
        key: p == i ? ii : e.key, //key是第幾個answer被選
        answer:
          //先確認題目是否對，才map相對的答案選項
          p == i
            ? e.answer.map((ee, pp) => {
                return {
                  ...ee,
                  click: pp == ii ? true : false,
                }
              })
            : e.answer,
      }
    })
    console.log('testData', testData)
    setTest(testData)
  }

  let clickEp = () => {
    localStorage.setItem('kitCategoryA', 2)
    localStorage.setItem('kitCategoryB', 6)
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
      {/* <!-- kit-test --> */}
      <div className="container">
        {/* <!-- 最上方的題目進度條 --> */}
        {/* <Step /> */}
        {/* <!-- 題目+選項 --> */}
        <QuestionWall test={test} clickAnswer={clickAnswer} clickEp={clickEp} />
      </div>
      {/* <!-- kit-test --> */}
      <Footer />
    </>
  )
}

export default KitTest1
