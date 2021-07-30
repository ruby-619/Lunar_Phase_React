import React from 'react'
import { withRouter } from 'react-router-dom'
import Footer from '../../components/Footer'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import EventListCard from './components/EventListCard'
// import { BsBookmark } from 'react-icons/bs'
import EventNAV from './components/EventNAV'



const EventList = (props) => {
  const{cartQty, bmQty, updateBmQty}=props
  console.log(props)
  return (
    <div>
      <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty}/>
      <EventNAV />
      <EventListCard updateBmQty={updateBmQty} />
      <Footer/>
    </div>
  )
}

export default withRouter(EventList)
