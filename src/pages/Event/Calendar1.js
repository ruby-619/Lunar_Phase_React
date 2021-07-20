import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Calendar from 'react-calendar';
// import CalendarChild2 from './CalendarChild2'
import 'react-calendar/dist/Calendar.css';
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar';
import Footer from '../../components/LunarPhaseFooter';
import CalendarChild2 from './CalendarChild2'


function Calendar1(props) {
  const{cartQty, bmQty}=props
  const [value, onChange] = useState(new Date());
  const newdate = value.getDate()
  
  console.log(value.getDate()) //這裡呢 我去看看喔 你亂跑 差點找不到你拉 笑死我 這可以！是20 today!!!!!! 所以有值?對那~~~應該傳出去要ok阿 我用newMonth皆出去r 那一頁的newMonth就nan?對喔 你是怎麼知道ㄉXD 從哪裡看  我畫面上 哈哈哈 我引入他的地方 那你引入的地方在哪~傳line給你等唷
  const [calStep, setCalStep] = useState(1) //第1頁:part1(calStep=1)、第2,3頁:CalendarChild2(calStep=2)
  const [calStepChild, setCalStepChild] = useState(1) //CalendarChild2之中: 第2頁:ChildPart1(calStepChild=1)或第3頁:ChildPart2(calStepChild=2)

  const part1 = (
    <>
    <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty}/>
      <div class="container">
        <div class="row">
          {/* <div className="CalendarArea"> */}
              <h2 className="m-1">上一次生理期的第一天？</h2>
        </div>
              <Calendar //我貼line囉 是空ㄉ 🥺 居然還可以貼emoji 可愛巴拉
                onChange={onChange}
                value={value} //值是這個 //好
                newMonth={value.getMonth()} // 這是在把月份解析出來
                newDate={value.getDate()}
                
                // 這是在把日解析出來,但傳出去貌似NaN qq 想說要先看看她會不會原本就Nan okkk         好喔  不行喔？？？？？不給con
                
              />
          {/* </div> */}
             <div className="d-flex justify-content-end m-3">
              <h5 className="SelectedDateDisplay mr-3">選擇日期：{value.getMonth()+1}月{value.getDate()}日</h5> 
            <div><br/>
            <button className="btn-soft-green col-6 ml-2 mt-3"
            onClick={()=>{setCalStep(2)}}>下一步</button>
            </div>
            </div> 
            <div>
              <h4>預計下一次月經開始日期：</h4>
            </div> 
            <div>
              <h4>預計下一次月經開始日期：{newdate +28 >=31 ?value.getMonth()+2:value.getMonth()+1}月{newdate +28 <=31 ? newdate+28: newdate+28-31}日</h4>
            </div>  
          
          {/* {newdate +28 >30 ? newdate-30: newdate} */}
              
              
         
          {/* <div>{newdate +28 <=30 ? newdate+28: newdate+28-30}日</div> */}
          {/* {showCalendarChild2? <CalendarChild2 showCalendarChild3={showCalendarChild3} setShowCalendarChild3={setShowCalendarChild3} month={newdate +28 >=30 ?value.getMonth()+2:value.getMonth()+1}
            date={newdate +28 <=30 ? newdate+28: newdate+28-30}
          />:""} */}
           
              
        </div>
        <Footer/>
    </>
  )
  
  const switchSteps = (step) =>{
    switch(step){
      case 1:
        return part1
      case 2:
        return <CalendarChild2  
        calStepChild={calStepChild} 
        setCalStepChild={setCalStepChild} 
        month={newdate +28 >=30 ? value.getMonth()+2:value.getMonth()+1}
        date={newdate +28 <=31 ? newdate+28: newdate+28-31}
      />
      // case 3: 
      //   return
      default: 
        return ""
  }
}

  return (
      <div>
      
      {switchSteps(calStep)}
      
    </div>
  );
}
export default Calendar1