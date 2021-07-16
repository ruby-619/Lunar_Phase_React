import React from 'react'
import EventDetailCard from './components/EventDetailCard'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import LunarPhaseFooter from '../../components/LunarPhaseFooter'
import './Event.scss'


const EventDetail = (props) => {
  const{cartQty}=props
  return (
    <div>
      <LunarPhaseNavbar cartQty={cartQty}/>
      
        <EventDetailCard />
        <LunarPhaseFooter />
      
    </div>
  )
}

export default EventDetail
