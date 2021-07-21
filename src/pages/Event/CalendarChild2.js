import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import FilterBar from './components/FilterBar'
import {BsNewspaper} from 'react-icons/bs'
import {ImHeart} from 'react-icons/im'




const CalendarChild2 = (props) => {

    const{cartQty, bmQty}=props
    const [symptom, setSymptom] = useState([])
    const [displaySymptom, setdisplaySymptom] = useState([])

    const [tags, setTags] = useState([])
    const tagTypes = ['食慾改變', '胸部脹痛', '情緒變化', '睡眠變化', '腹部痙攣','腹部脹氣']

    const [priceRange, setPriceRange] = useState('所有')
    const priceRangeTypes = ['所有', '1萬以下', '1~2萬']
    const _ = require('lodash');
    // const [state, setstate] = useState()
    // const {value, newDate, newMonth, calStepChild, setCalStepChild} = props
    const {date, month, calStepChild, setCalStepChild} = props
    console.log(date,month)

    


    async function getEventFromServer() {
        // 開啟載入指示
        // setDataLoading(true)
    
        // 連接的伺服器資料網址
    
        const url = `http://localhost:4567/symptom`
    
        // 注意header資料格式要設定，伺服器才知道是json格式
        const request = new Request(url, {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json', //這裡是application
          }),
        })
    
        const response = await fetch(request)
        const data = await response.json()
    
       
        // 設定資料
        setSymptom(data.data)
        setdisplaySymptom(data.data)
        console.log(data.data)
        console.log(symptom)
      }
      useEffect(() => {
        getEventFromServer()
      }, [])
      
      useEffect(() => {
        let newSymptom = []
        // 處理勾選標記
        newSymptom = handleTags(symptom, tags)
        setdisplaySymptom(newSymptom)
      }, [symptom,tags])
    

      // 事件處理
      const handleTags = (symptom, tags) => {
        let newSymptom = [...symptom]
    
        // 處理勾選標記
        console.log(tags)
        console.log(symptom)
        if (tags.length > 0) {
          // console.log(123)
            newSymptom = symptom.filter((symptom) => {
              console.log(symptom.tags)
            return tags.includes(symptom.tags)
          })
        }
    
        return newSymptom
      }

      const ChildPart1 = (
        <>
        <div className="row">
                <div className="d-flex">
                    <h2 className=""><BsNewspaper/> 症狀紀錄</h2>
                    <div>
                      <FilterBar
                        className="ml-3 col-3"
                      //   priceRangeTypes={priceRangeTypes}
                      //   priceRange={priceRange}
                      //   setPriceRange={setPriceRange}
                        tagTypes={tagTypes}
                        tags={tags}
                        setTags={setTags}
                      />
                    </div>
                </div>
                </div>
                <div class="row d-flex justify-content-end">
                      
                        <div className="">
                          <button className="btn-soft-green mt-auto "
                                  onClick={()=>{setCalStepChild(2)}}>下一步</button>
                        </div>
                   
                    </div>
        </>
      )

      const ChildPart2 =(
        <>
        <div class="row">
                      {/* 嗨嗨 喔你看到了 con一嚇   上面ㄇ 還這邊 應該上面就可以了 或者你可以看這頁的那個components(檢查的) prop裡面的值比較準  那你要不要直接開f12看props*/} 
                      {/* 我剛剛在樓上23行下,undefined 喔喔喔喔
                       */}
                    {/* <h2 className=""><BsNewspaper/> 血量紀錄</h2> */}
                       <h2 className="mt-5"><ImHeart color="#E64B4B"/> 您的經期可能在{month}月{date}日開始</h2> 
                    </div>
                    
                      <div class="row">
                        <h4 className>下次你會更懂得照顧自己一點點</h4>
                      </div>
                { displaySymptom.length && displaySymptom.map((s, i) => {

              return (
                
                  <div class="container">
                    <div className="row">
                      <div className="card" style={{ width: "50rem" }}>
                        <div className="symptomImgWrap"><img className="card-img-top symptomImg" src={`/img/Calendar/${s.SymptomImg}`} alt="Card image cap" /></div>
                        <div className="card-body">
                        <h6 className="card-title">#{s.tags}</h6>
                        <h5 className="card-title">{s.SymptomArticleTitle}</h5>
                        <p className="card-text">
                        {s.SymptomArticleDescription}<br/>
                        {s.SymptomArticleContent}
                        </p>
                        <a href="#" className="btn btn-primary">
                        Read more
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                
            )
          })}
          <div></div>
        </>
      )

      const switchChildSteps = (step) =>{
        switch(step){
          case 1:
            return ChildPart1
          case 2:
            return ChildPart2
          default: 
            return ""
      }
    }

     
    return (
        <div>
             <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty}/>
            <div className="container">
                {switchChildSteps(calStepChild)}
                    
            </div>
            <Footer/>
        </div>
    )
}

export default CalendarChild2
