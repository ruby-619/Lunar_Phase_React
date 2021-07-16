import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'

function ScBtn(props) {
  const {showStep1, showStep2, prevStep, nextStep } = props
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* 按鈕列 */}
      <div className="col-10 mx-auto">
        <div className="d-flex btnRow justify-content-between mb-2">
          <div className="bg-green p-4 fitContent">
          {showStep1 ? 
            <button className="btn-soft-green"
            onClick={prevStep}>上一步</button>
             :
              ""
          }    
          </div>
          <div className="bg-green p-4 fitContent">
          {showStep2 ? 
            <button 
            type="submit"
            className="btn-soft-green"
            onClick={
              nextStep
              
              }>下一步</button>
             :
              ""
          }

          {/* {showStep1 ? 
            (<Link to={prevUrl}>
              <button className="btn-soft-green">上一步</button>
            </Link>) :
              ""
          }           
          </div>
          <div className="bg-green p-4 fitContent">
          {showStep2 ? 
            (<Link to={nextUrl}>
              <button className="btn-soft-green">下一步</button>
            </Link>) :
              ""
          }   */}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ScBtn
