import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePageCard = () => {
  const [event, setEvent] = useState([])
  // -----時間格式化-------- //
  var moment = require('moment')


  async function getEventFromServer() {
    // 連接至server
    const url = 'http://localhost:4567/event'

    // header資料格式設定，json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()

    // console.log(data)
    // 設定資料
    setEvent(data)
  }
  useEffect(() => {
    getEventFromServer()
  }, [])

  
  useEffect(() => {
  }, [event])

  
  return (
    <div class="container">
      <div class="row">

{/*---------- 資料庫取得活動資料後map出資料 ---------------*/}
        {event?.data?.map((v, i) => {
          return (
            <>
              <Link to={`/event-detail/${v.id}`}>
                <div class="HomePageCard">
                  <div class="top">
                    <div class="HomePageCardDate">
                      {moment(v.eventDate).format('YYYY-MM-DD')}
                    </div>
                    <div class="HomePageCardTitle">{v.eventName}</div>
                  </div>
                  <div className="hcard">
                    <figure className="hcard__thumb">
                      <div className="HomePageCardPhoto">
                        <img src={`/img/Event/${v.eventImg}`} className="hcard__image" />
                      </div>
                      <figcaption className="hcard__caption">
                        <h5 className="hcard__snippet"></h5>
                        <h5
                          className="hcard__snippet"
                          dangerouslySetInnerHTML={{
                            __html: v.eventDescription,
                          }}
                        ></h5>
                        <a href className="hcard__button">
                          Read more
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="HomePageCardContent TextAlignCenter">
                    {v.eventSubtitle}
                  </div>
                  <div class="HomePageCardRegister">報名中</div>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default HomePageCard
