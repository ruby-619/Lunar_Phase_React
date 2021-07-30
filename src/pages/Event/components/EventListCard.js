import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'
import DateSearch from './Filter/DateSearch'
import Location from './Filter/Location'
import SearchBar from './Filter/SearchBar'
import Sort from './Filter/Sort'
import { BsBookmark } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { IoMdCalendar } from 'react-icons/io'
import { FcBookmark } from 'react-icons/fc'
import Swal from 'sweetalert2'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'


const EventListCard = (props) => {
  
  const {updateBmQty} = props
  const [myBookmark, setMyBookmark] = useState(false) //收藏
  const [collection, setcollection] = useState([1, 1, 1, 1, 1, 1])
  const [event, setEvent] = useState([]) //初始資料
  const [data, setdata] = useState([]) //初始資料
  const [displayEvent, setdisplayEvent] = useState([]) //篩過之後的資料
  const [seletedLocation, setseletedLocation] = useState('') // 地點搜尋
  const [searchWord, setSearchWord] = useState('') // 關鍵字搜尋
  const [sortBy, setSortBy] = useState('')
  const [page, setPage] = useState('')
  const [dataLoading, setDataLoading] = useState(false)
  
  var moment = require('moment') // 日期格式化

  let active = ''
  let items = []
  console.log(data.totalPages)

  
  for (let number = 1; number <= data.totalPages; number++) {
    console.log(number)

    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={(e) => {
          setPage(number)
        }}
      >
        {number}
      </Pagination.Item>
    )
  }

  // console.log('我是page', page)

  const updateMarkToLocalStorage = (item) => {
    const currentMark = JSON.parse(localStorage.getItem('evbookmark')) || []
    const index = currentMark.findIndex((v) => v.id === item.id)

    if (index > -1) {
      return
    } else {
      currentMark.push(item)
    }

    localStorage.setItem('evbookmark', JSON.stringify(currentMark))

    // 設定資料
    setMyBookmark(currentMark)
  }
  const alertMark = () => {
    Swal.fire({
      position: 'center',
      width: '30%',
      imageUrl: '/img/svg/43-music-note-outline.gif',
      title: '已加入收藏',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  // 初始化資料
  async function getEventFromServer() {
  // --------連接至server -----------//
    const url = `http://localhost:4567/event?page=${page}`
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
    //--------- 設定資料 -----------//
    setdata(data)
    setEvent(data.data)
    setdisplayEvent(data.data)
  }
  useEffect(() => {
    getEventFromServer()
    updateBmQty()
  }, [])

  // 測試（抓page）
  useEffect(() => {
    if (page) {
      getEventFromServer()
    }
  }, [page])


  // AOS
  useEffect(() => {
    AOS.init({ offset: 120, duration: 800 })
  })

// -------------關鍵字篩選 ----------------- //
  const handleSearch = (event, searchWord) => {
    let newEvent = [...event]
    if (searchWord) {
      newEvent = event.filter((e) => {
        return e.eventName.includes(searchWord)
      })
    } else {
      newEvent = [...event]
    }

    //console.log(newEvent)
    return newEvent
  }
// --------------價格排序 -----------------//
  const handleSort = (event, sortBy) => {
    let newEvent = [...event]

    // 低至高
    if (sortBy === '1') {
      newEvent = [...newEvent].sort((a, b) => a.eventPrice - b.eventPrice)
    }
    // 高至低
    if (sortBy === '2') {
      newEvent = [...newEvent].sort((a, b) => b.eventPrice - a.eventPrice)
    }

    if (sortBy === '' && newEvent.length > 0) {
      newEvent = [...newEvent].sort((a, b) => a.id - b.id)
    }
    return newEvent
  }

  // ------------- 依照選擇地區 ------------------- //
  const handleLocation = (event, seletedLocation) => {
    let newEvent = [...event]
    if (seletedLocation === '1') {
      newEvent = [...newEvent].filter((e) => e.eventLocation === '台北市')
    }
    if (seletedLocation === '7') {
      newEvent = [...newEvent].filter((e) => e.eventLocation === '宜蘭縣')
    }
    // }

    return newEvent
  }

  
  useEffect(() => {
    let newEvent = [...event]
    newEvent = handleSearch(newEvent, searchWord)
    newEvent = handleSort(newEvent, sortBy)
    newEvent = handleLocation(newEvent, seletedLocation)
    
    setdisplayEvent(newEvent)
  }, [event, searchWord, sortBy, seletedLocation])

  
  return (
    <div>
        <div class="container">
          <div class="row">
            <div className="d-flex">
              <Location
                seletedLocation={seletedLocation}
                setseletedLocation={setseletedLocation}
              />
              <Sort sortBy={sortBy} setSortBy={setSortBy} />
              <SearchBar
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
            </div>
           

            {displayEvent.map((v, i) => {
              return (
                <div class="ecard2 mt-5 d-flex" data-aos="zoom-in-up">
                  <div class="photo2">
                    <img src={`/img/Event/${v.eventImg}`} />
                  </div>
                  <div class="text">
                    <h4
                      onClick={() => {
                        props.history.push(`/event-detail/${v.id}`)
                      }}
                      className="TextAlignLeft CursorPointer"
                    >
                      {v.eventName}
                    </h4>

                    <div class="line2 d-flex justify-content-between align-items-center border-bottom pb-3 pt-3">
                      <div className="h6-tc d-flex align-items-center">
                        <div>
                          <IoMdCalendar size="25px" />
                        </div>
                        活動日期：
                        {moment(v.eventDate).format('YYYY-MM-DD')}
                        <span>({moment(v.eventDate).format('dddd')})</span>
                      </div>
                    </div>
                    <div class="line1 d-flex justify-content-between align-items-center mt-3 border-bottom">
                      <h3>$ {v.eventPrice}</h3>
                      <div className="d-flex align-items-center">
                        <div>
                          {collection[i] === 1 ? (
                            <BsBookmark
                              size="22px"
                              onClick={() => {
                                const newCollection = [...collection]
                                newCollection[i] =
                                  newCollection[i] === 1 ? 0 : 1
                                setcollection(newCollection)
                                updateMarkToLocalStorage({
                                  id: v.id, 
                                  name: v.eventName,
                                  date: v.eventDate,
                                  image: `/img/Event/${v.eventImg}`,
                                })
                                alertMark()
                                updateBmQty()
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
                      <div className="pr-3">{v.eventCategory} </div>
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
            <div>{/* <Pagination>{items}</Pagination> */}</div>
          </div>
        </div>
    </div>
  )
}

export default withRouter(EventListCard)
