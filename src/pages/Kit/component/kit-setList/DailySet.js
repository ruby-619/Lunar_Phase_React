import React from 'react'
import SvgRibbonSet from '../svg-component/SvgRibbonSet'

function DailySet(props) {
  const { functionA, objDaily } = props
  // const [ribbonClick, setRibbonClick] = useState(false)
  const display = (
    <>
      <SvgRibbonSet />
    </>
  )

  return (
    <>
      {/* <!-- 最上區塊的日常組合TITLE語 --> */}
      <h5 className="h5-tc kit-set-list-title-daily">{objDaily.name}</h5>
      <div className="kit-set-wrap">
        {objDaily.arr.map((objDaily, key) => (
          <div className="kit-set-box">
            {/* click變成true的話，改變classNameName */}
            <div
              className={
                'kit-set-img-day ' +
                (objDaily.click ? 'kit-set-img-day-click' : '')
              }
              // 被觸發事件(onClick)後，進行functionA
              onClick={() => {
                functionA(objDaily, key)
              }}
            >
              <div
                className={
                  'kit-set-ribbon ' +
                  (objDaily.click ? 'kit-set-ribbon-show' : '')
                }
              >
                {/* <SvgRibbonSet1 /> */}
                {objDaily.click ? display : ''}
              </div>
              <div className="kit-set-text">
                <h4 className="kit-settext h4-tc">{objDaily.name}</h4>
                <div className="kit-set-text-p">{objDaily.span}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DailySet
