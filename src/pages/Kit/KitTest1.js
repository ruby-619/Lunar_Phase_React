import React from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import Step from './component/kit-test/Step'
import QuestionWall from './component/kit-test/QuestionWall'
import Answer1 from './component/kit-test/Answer1'

function KitTest1() {
  return (
    <>
      <LunarPhaseNavbar />
      {/* <!-- kit-test --> */}
      <div className="container">
        {/* <!-- 最上方的題目進度條 --> */}
        <Step />
        {/* <!-- 題目 --> */}
        <QuestionWall />
        {/* <!-- 選項區 --> */}
        <Answer1 />
      </div>
      {/* <!-- kit-test --> */}
      <Footer />
    </>
  )
}

export default KitTest1
