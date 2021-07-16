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
      <body className="bg2">
        <EventDetailCard />
        <LunarPhaseFooter />
      </body>
    </div>
  )
}

export default EventDetail
