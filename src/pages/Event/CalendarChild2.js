import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import FilterBar from './components/FilterBar'




const CalendarChild2 = () => {

    const [symptom, setSymptom] = useState([])
    const [displaySymptom, setdisplaySymptom] = useState([])

    const [tags, setTags] = useState([])
    const tagTypes = ['食慾改變', '胸部脹痛', '情緒變化', '睡眠變化', '腹部痙攣','腹部脹氣']

    const [priceRange, setPriceRange] = useState('所有')
    const priceRangeTypes = ['所有', '1萬以下', '1~2萬']
    const _ = require('lodash');
    const [state, setstate] = useState()


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

     
    return (
        <div>
            <LunarPhaseNavbar/>
            <div className="container">
                <div className="row">
                <div>
                    <h2>症狀紀錄</h2>
                    <FilterBar
                    //   priceRangeTypes={priceRangeTypes}
                    //   priceRange={priceRange}
                    //   setPriceRange={setPriceRange}
                      tagTypes={tagTypes}
                      tags={tags}
                      setTags={setTags}
                    />
                </div>
                </div>
                {displaySymptom.length && displaySymptom.map((s, i) => {

              return (
                
                  <div class="container">
                    <div className="row">
                      <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="https://fakeimg.pl/250x100/" alt="Card image cap" />
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
            </div>
            <Footer/>
        </div>
    )
}

export default CalendarChild2
