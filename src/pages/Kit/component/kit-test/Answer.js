import React from 'react'

function Answer(props) {
  const { test } = props
  return (
    <>
      {/* <!-- 選項區 --> */}
      <div className="kit-test-answer-area">
        {test[0].answer.map((e) => (
          <div className="kit-test-answer-btn">
            <div className="kit-test-answer">
              <h4 className="h4-tc">{e.aTitle}</h4>
              <div className="kit-test-answer-p">{e.aSubTitle}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Answer
