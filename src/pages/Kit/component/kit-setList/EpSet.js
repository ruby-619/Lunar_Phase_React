import React from 'react'
import SvgRibbonSet from '../svg-component/SvgRibbonSet'

function EpSet(props) {
  const { functionB, objEp,objDaily } = props
  return (
    <>
      <div className="kit-set-list-title-ep">
        <h5 className="h5-tc">{objEp.name}</h5>
        <h6 className="h6-tc">鼓勵想要嘗試的妳</h6>
      </div>
      <div className="kit-set-wrap">
        {objEp.arr.map((objEp, key) => (
          <div className="kit-set-box">
            <div
              className={
                'kit-set-img-ep ' +
                (objDaily.key !== null ? 'kit-set-img-ep-chose ' : '') +
                (objEp.click ? 'kit-set-img-ep-click ' : '')
              }
              onClick={() => {
                functionB(objEp, key)
              }}
            >
              <div
                className={
                  'kit-set-ribbon ' + (objEp.click ? 'kit-set-ribbon-show' : '')
                }
              >
                <SvgRibbonSet />
              </div>
              <div className="kit-set-text">
                <h4 className="kit-set-text h4-tc">{objEp.name}</h4>
                <div className="kit-set-text-p">{objEp.span}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default EpSet
