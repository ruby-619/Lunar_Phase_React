import React from 'react'
import BtnGoTest from './BtnGoTest'
import BtnGoSet from './BtnGoSet'
import { Link } from 'react-router-dom'

function GoTestArea() {
  return (
    <>
      <div className="kit-index-go-text-area">
        <Link
          to="/kitTest1"
          onClick={() => {
            ;<BtnGoTest />
          }}
        >
          <BtnGoTest />
        </Link>
        <Link
          to="/kitSetList"
          onClick={() => {
            ;<BtnGoSet />
          }}
        >
        <BtnGoSet />
        </Link>
      </div>
    </>
  )
}

export default GoTestArea
