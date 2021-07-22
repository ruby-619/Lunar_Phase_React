import React from 'react'
import BtnGoTest from './BtnGoTest'
import BtnGoSet from './BtnGoSet'
import { Link } from 'react-router-dom'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function GoTestArea() {
  return (
    <>
      <div
        className="kit-index-go-text-area"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Link
          to="/kitTest"
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
