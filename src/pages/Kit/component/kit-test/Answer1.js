import React from 'react'

function Answer1() {
  return (
    <>
      {/* <!-- 選項區 --> */}
      <div className="kit-test-answer-area">
        <div className="kit-test-answer-btn">
          <div className="kit-test-answer">
          {/* onClick={()=>{
          }} */}
            <h4 className="h4-tc">量少型</h4>
            <div className="kit-test-answer-p">18cm</div>
          </div>
        </div>
        <div className="kit-test-answer-btn">
          <div className="kit-test-answer">
            <h4 className="h4-tc">量普通型</h4>
            <div className="kit-test-answer-p">21cm</div>
          </div>
        </div>
        <div className="kit-test-answer-btn">
          <div className="kit-test-answer">
            <h4 className="h4-tc">量多型</h4>
            <div className="kit-test-answer-p">25cm</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Answer1
