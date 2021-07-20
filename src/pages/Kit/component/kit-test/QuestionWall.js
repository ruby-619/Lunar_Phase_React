import React from 'react'
import { Link } from 'react-router-dom'

// import BtnGreenBig from '../kit-test/BtnGreenBig'

function QuestionWall(props) {
  const { test, clickAnswer, clickEp } = props
  console.log('test', test)
  return (
    <>
      {test.map((t, i) => {
        if (t.click) {
          return (
            <div>
              <div className="kit-test-question-bg">
                <div
                  className="kit-test-question-img"
                  style={{
                    backgroundImage: `url("http://localhost:3333/img/Kit/${t.questionImg}")`,
                  }}
                >
                  <div className="kit-test-question-text-area">
                    <div className="kit-test-question-text">
                      <h3 className="h3-en">{t.qNum}</h3>
                      <h5 className="h5-tc kit-test-question-text">
                        {t.questionText}
                      </h5>
                    </div>
                    <div className="kit-test-question-icon">{t.icon}</div>
                  </div>
                </div>
              </div>
              {/* 答案 */}
              <div className="kit-test-answer-area">
                {t.answer.map((tt, ii) => (
                  <div className="d-flex">
                    <div
                      className="kit-test-answer-btn"
                      onClick={() => {
                        clickAnswer(t, i, tt, ii)
                      }}
                    >
                      <div className="kit-test-answer">
                        <h4 className="h4-tc">{tt.aTitle}</h4>
                        <div className="kit-test-answer-p">{tt.aSubTitle}</div>
                      </div>
                    </div>
                    {test[3].answer[0].click && tt.moreChoice ? (
                      <div className="kit-test-answer-btn-ep d-flex kit-link">
                        {tt.moreChoice.map((e, i) => (
                          <Link to="/kitShoppingList">
                            <buttom
                              // className="btn-ep btn-border-s"
                              onClick={() => {
                                clickEp()
                              }}
                            >
                              {e.cName}
                            </buttom>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        }
      })}
    </>
  )
}

export default QuestionWall
