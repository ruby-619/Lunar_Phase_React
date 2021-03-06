
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { BsBookmark } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { IoMdCalendar } from 'react-icons/io'
import { withRouter } from 'react-router-dom'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import LunarPhaseFooter from '../../../components/LunarPhaseFooter'
import LunarPhaseNavbar from '../../../components/LunarPhaseNavbar'
const _ = require('lodash');

const EventCategoryCard = (props) => {
  const{cartQty, bmQty}=props
  console.log(props)
  const [event, setEvent] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  var moment = require('moment')

  async function getEventFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接至server
    const eCategory = props.match.params.id
    const url = 'http://localhost:4567/event/category/' + eCategory
    // 資料格式設定
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    console.log(data[0].eventCategory)

    // 設定資料
    setEvent(data)
  
  }
  useEffect(() => {
    getEventFromServer()
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [event])
  console.log(event)
  // console.log(event[0].eventCategory)
  const display = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  
  return (
    <div>
      <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty}/>
      <body className="bg2">
        <div class="container">
        <h6 className="CategoryTitle mt-3 CursorPointer" onClick={() => {
                        props.history.push(`/event-list`)
                      }}>
          <IoArrowBackCircleOutline size="22px"/>目前所在分類：{!_.isEmpty(event) &&event[0].eventCategory}</h6>
        
          {!_.isEmpty(event) &&event?.map((v, i) => {
            return (
              <div>
                <div class="ecard2 mt-5 d-flex ">
                  <div class="photo2">
                    <img src={`/img/Event/${v.eventImg}`} alt="" />
                  </div>
                  <div class="text">
                    <h4 className="TextAlignLeft">{v.eventName}</h4>
                    <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                      <div className="h6-tc d-flex align-items-center">
                        <div>
                          <IoMdCalendar size="25px" />
                        </div>
                        活動日期：
                        {moment(v.eventDate).format('YYYY-MM-DD')}
                        ({moment(v.eventDate).format('dddd')})
                      </div>
                    </div>
                    <div class="line1 d-flex justify-content-between align-items-center mt-3 border-bottom">
                      <h3>$ {v.eventPrice}</h3>
                      <div className="d-flex align-items-center">
                        <div>
                          <BsBookmark size="22px" />
                        </div>
                        <div className="add">加入收藏</div>
                      </div>
                    </div>
                    <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                      <div className="h6-tc d-flex">
                        <div>
                          <GoLocation size="25px" />
                        </div>
                        {v.eventLocation}{v.eventAddress}
                      </div>
                      <h6>尚有名額</h6>
                    </div>
                    <div class="line3 d-flex mt-3">
                      <div className="pr-3">{v.eventCategory}</div>
                      <div>|</div>
                      <div className="pl-3">一人成團</div>
                    </div>
                    <div className="more">
                      <a href="#">MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* </div> */}
        </div>
      </body>
      <LunarPhaseFooter />
    </div>
  )
}

export default withRouter(EventCategoryCard)
