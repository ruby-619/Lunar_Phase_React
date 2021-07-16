import React from 'react'

function Answer4Ep() {
  return (
    <>
      {/* <!-- 選項 --> */}
      <div className="kit-test-answer-area d-flex">
        <div className="kit-test-answer-btn d-flex">
          <div className="kit-test-answer d-flex">
            <h4 className="h4-tc">是的！</h4>
            <div className="kit-test-answer-p">我一直都很想嘗試</div>
          </div>
        </div>
        <div className="kit-test-answer-btn-ep d-flex">
          <buttom className="btn-ep btn-border-s">布衛生棉</buttom>
          <buttom className="btn-ep btn-border-s">月亮杯</buttom>
          <buttom className="btn-ep btn-border-s">月亮褲</buttom>
        </div>
        <div className="kit-test-answer-btn d-flex">
          <div className="kit-test-answer d-flex">
            <h4 className="h4-tc">不了</h4>
            <div className="kit-test-answer-p">下次再說吧</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Answer4Ep
