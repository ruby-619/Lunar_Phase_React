import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import FilterBar from './components/FilterBar'
import { data } from 'jquery'



const CalendarChild2 = () => {

    const [symptom, setSymptom] = useState([])
    const [displaySymptom, setdisplaySymptom] = useState([])

    const [tags, setTags] = useState([])
    const tagTypes = ['食慾改變', '胸部脹痛', '情緒變化', '睡眠變化', '腹部痙攣','腹部脹氣']

    const [priceRange, setPriceRange] = useState('所有')
    const priceRangeTypes = ['所有', '1萬以下', '1~2萬']
    const _ = require('lodash');


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
            'Content-Type': 'appliaction/json',
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

      // 事件處理
      const handleTags = (symptom, tags) => {
        let newSymptom = [...symptom]
    
        // 處理勾選標記
        if (tags.length > 0) {
            newSymptom = [...newSymptom].filter((symptom) => {
            let isFound = false
            // 原本資料裡的tags字串轉為陣列
            const Tags = symptom.tags.split(',')
    
            for (let i = 0; i < tags.length; i++) {
              if (Tags.includes(tags[i])) {
                return true
              }
            }
    
            return isFound
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
                {displaySymptom?.map((s, i) => {
            return (
             
                <div class="ecard2 mt-5 d-flex">
                  <div class="photo2">
                    {/* <img src={`/img/Event/${v.eventImg}`} /> */}
                  </div>
                  <div class="text">
                  
                    {/* <h4 onClick={()=>{props.history.push(`/event-detail/${v.id}`)} }className="TextAlignLeft">{s.tags}</h4> */}
                
                    <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                      <div className="h6-tc d-flex align-items-center">
                        <div>
                          {/* <IoMdCalendar size="25px" /> */}
                        </div>
                        {/* 活動日期：
                        {moment(v.eventDate).format('YYYY-MM-DD')}
                        <span>({moment(v.eventDate).format('dddd')})</span> */}
                      </div>
                    </div>
                    <div class="line1 d-flex justify-content-between align-items-center mt-3 border-bottom">
                      <h3>{s.symptomArticleTitle}</h3>
                      <div className="d-flex align-items-center">
                        {/* <div>
                          {collection[i] === 1 ? (
                            <BsBookmark
                              size="22px"
                              onClick={() => {
                                const newCollection = [...collection]
                                newCollection[i] =
                                  newCollection[i] === 1 ? 0 : 1
                                setcollection(newCollection)
                              }}
                            />
                          ) : (
                            <FcBookmark
                              size="22px"
                              onClick={() => {
                                const newCollection = [...collection]
                                newCollection[i] =
                                  newCollection[i] === 1 ? 0 : 1
                                setcollection(newCollection)
                              }}
                            />
                          )}
                        </div> */}
                        <div className="add">加入收藏</div>
                      </div>
                    </div>
                    <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                      <div className="h6-tc d-flex">
                        <div>
                          {/* <GoLocation size="25px" /> */}
                        </div>
                        {/* {v.eventLocation} */}
                      </div>
                      <h6>尚有名額</h6>
                    </div>
                    <div class="line3 d-flex mt-3">
                      {/* <div className="pr-3">{v.eventCategory} </div> */}
                      <div>|</div>
                      <div className="pl-3">一人成團</div>
                    </div>
                    <div className="more">
                      <a href="#">MORE</a>
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
