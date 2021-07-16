import React from 'react'
import { Link } from 'react-router-dom'

// #10 <i className=`stepCircle ${condition ? 'stepActive' : ''}` />
// #10 <i className=`stepCircle ${this.props.step === 1 ? 'stepActive' : ''}` />

function ScStepRow(props) {
  const { step, setStep } = props
  return (
    <>
      {/* 背景山 */}
      <div className="bgMountainRow container-fluid p-0">
        <div className="bgMountain position-absolute">
          <img src="/img/Cart/bgMountain.svg" alt="" />
        </div>
        <div className="moon-wrap position-absolute">
          <div className="moon"></div>
        </div>
      </div>
      {/* 購物車流程 */}
      <div className="container-fluid">
        <div className="scStepRow col-10 px-0 d-flex mx-auto justify-content-center">
          <div className="step">
            <div className="d-flex align-items-center">
              <i className={`stepCircle ${step === 1 ? 'stepActive' : ''}`} />
              <i className="stepLine" />
              <i className="stepArrow right" />
            </div>
            <div className="stepFont">
              <Link
                to="#"
                onClick={() => {
                  setStep(1)
                }}
              >
                確認購物車
              </Link>
            </div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className={`stepCircle ${step === 2 ? 'stepActive' : ''}`} />
              <i className="stepLine" />
              <i className="stepArrow right" />
            </div>
            <div className="stepFont">
              <Link
                to="#"
                onClick={() => {
                  setStep(2)
                }}
              >
                物流選擇
              </Link>
            </div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className={`stepCircle ${step === 3 ? 'stepActive' : ''}`} />
              <i className="stepLine" />
              <i className="stepArrow right" />
            </div>
            <div className="stepFont">
              <Link
                to="#"
                onClick={() => {
                  setStep(3)
                }}
              >
                填寫資料
              </Link>
            </div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className={`stepCircle ${step === 4 ? 'stepActive' : ''}`} />
            </div>
            <div className="stepFont">
              <Link to="#">完成訂購</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScStepRow
