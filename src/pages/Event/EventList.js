import React from 'react'
import { withRouter } from 'react-router-dom'
import Footer from '../../components/Footer'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import EventListCard from './components/EventListCard'
// import { BsBookmark } from 'react-icons/bs'
import EventNAV from './components/EventNAV'

import './Event.scss'
// import CategoryNav from '../Event/components/CategoryNav'
// import OneOfCategory from './components/OneOfCategory'

const EventList = (props) => {
  const{cartQty, bmQty}=props
  console.log(props)
  return (
    <div>
      <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty}/>

      {/* <body className="bg2 mt-5"> */}
      <EventNAV />
      {/* <Input /> */}
      <EventListCard />
      {/* </body> */}
      <Footer/>
    </div>
  )
}

export default withRouter(EventList)
