import React from 'react'
import EventDetailCard from './components/EventDetailCard'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import LunarPhaseFooter from '../../components/LunarPhaseFooter'
import './Event.scss'


const EventDetail = (props) => {
  const{cartQty, bmQty}=props
  return (
    <div>
       <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty}/>
      
        <EventDetailCard />
        <LunarPhaseFooter />
      
    </div>
  )
}

export default EventDetail
