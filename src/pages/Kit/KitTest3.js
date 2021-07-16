import React from 'react'
import Step from './component/kit-test/Step'
import QuestionWall from './component/kit-test/QuestionWall'
// import Answer from './component/kit-test/Answer'

function KitTest3() {
  return (
    <>
      {/* <!-- kit-test --> */}
      <div className="container">
        {/* <!-- 最上方的題目進度條 --> */}
        <Step />
        {/* <!-- 題目 --> */}
        <QuestionWall />
        {/* <!-- 選項區 --> */}
        {/* <Answer /> */}
      </div>
      {/* <!-- kit-test --> */}
    </>
  )
}

export default KitTest3
