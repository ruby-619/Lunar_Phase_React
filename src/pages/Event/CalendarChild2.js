import React from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'

import { FaShoppingCart } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

const CalendarChild2 = () => {
    
    return (
        <div>
            <LunarPhaseNavbar/>
            <div className="container">
                <div className="row">
                <div>
                    <h2>推薦給您</h2>

                </div>
                <div>
                    <h2>更懂得照顧自己一點點</h2>
                    
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CalendarChild2
