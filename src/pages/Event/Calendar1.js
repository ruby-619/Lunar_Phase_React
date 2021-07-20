import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Calendar from 'react-calendar';
// import CalendarChild2 from './CalendarChild2'
import 'react-calendar/dist/Calendar.css';
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar';
import Footer from '../../components/LunarPhaseFooter';


function Calendar1() {
  const [value, onChange] = useState(new Date());
  const newdate = value.getDate()
  
  
  return (
      <div>
      <LunarPhaseNavbar/>
      <div class="container">
        <div class="row">
          {/* <div className="CalendarArea"> */}
              <h2 className="m-1">上一次生理期的第一天？</h2>
        </div>
              <Calendar
                onChange={onChange}
                value={value}
                const newdate = {value.getDate()}
              />
          {/* </div> */}
             <div className="d-flex justify-content-end m-3">
              <h5 className="SelectedDateDisplay mr-3">選擇日期：{value.getMonth()+1}月{value.getDate()}日</h5> 
            <div><br/>
            <Link to="./calendar-child2"><button className="btn-soft-green col-6 ml-2 mt-3">下一步</button></Link>
            </div>
            </div> 
            {/* <div>
              <h4>預計下一次月經開始日期：{newdate +28 >=31 ?value.getMonth()+2:value.getMonth()+1}月{newdate +28 <=31 ? newdate+28: newdate+28-31}日</h4>
            </div>  */}
          
          {/* {newdate +28 >30 ? newdate-30: newdate} */}
              
              
         
          {/* <div>{newdate +28 <=30 ? newdate+28: newdate+28-30}日</div> */}
          {/* <CalendarChild2 month={newdate +28 >=30 ?value.getMonth()+2:value.getMonth()+1}
            date={newdate +28 <=30 ? newdate+28: newdate+28-30}
          /> */}
              
        </div>
      <Footer/>
    </div>
  );
}
export default Calendar1