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

// import { NetworkAuthenticationRequire } from 'http-errors'
// import { data } from 'jquery'

const EventListCard = (props) => {
  const {updateBmQty} = props
  const [myBookmark, setMyBookmark] = useState(false) //收藏
  const [collection, setcollection] = useState([1, 1, 1, 1, 1, 1])
  const [event, setEvent] = useState([]) //初始資料
  const [data, setdata] = useState([]) //初始資料

  const [displayEvent, setdisplayEvent] = useState([]) //篩過之後的資料

  const [dateSearch, setdateSearch] = useState('') // 日期搜尋
  const [seletedLocation, setseletedLocation] = useState('') // 地點搜尋
  const [searchWord, setSearchWord] = useState('') // 關鍵字搜尋
  const [sortBy, setSortBy] = useState('')
  const [page, setPage] = useState('')

  const [dataLoading, setDataLoading] = useState(false)
  var moment = require('moment') //日期格式化需要引入

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

  console.log('我是page', page)

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
      // icon: 'question',
      width: '30%',
      imageUrl: '/img/svg/43-music-note-outline.gif',
      title: '已加入收藏',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  // 初始化資料
  async function getEventFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址

    const url = `http://localhost:4567/event?page=${page}`

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

    console.log(data)
    // 設定資料
    setdata(data)
    setEvent(data.data)
    setdisplayEvent(data.data)
  }
  useEffect(() => {
    getEventFromServer()
  }, [])

  // 測試（抓page）
  useEffect(() => {
    if (page) {
      getEventFromServer()
    }
  }, [page])
  // 四種篩選法
  // 1.依照關鍵字

  const handleSearch = (event, searchWord) => {
    // console.log(searchWord)
    let newEvent = [...event]

    if (searchWord) {
      newEvent = event.filter((e) => {
        // console.log(e.eventName.includes(searchWord))
        return e.eventName.includes(searchWord)
      })
    } else {
      newEvent = [...event]
    }

    //console.log(newEvent)
    return newEvent
  }
  // 2.依照價格排序
  const handleSort = (event, sortBy) => {
    let newEvent = [...event]

    // 以價格排序-由少至多
    if (sortBy === '1') {
      newEvent = [...newEvent].sort((a, b) => a.eventPrice - b.eventPrice)
    }

    if (sortBy === '2') {
      newEvent = [...newEvent].sort((a, b) => b.eventPrice - a.eventPrice)
    }

    if (sortBy === '' && newEvent.length > 0) {
      newEvent = [...newEvent].sort((a, b) => a.id - b.id)
    }

    return newEvent
  }
  // 3.地區間選項
  const handleLocation = (event, seletedLocation) => {
    let newEvent = [...event]
    if (seletedLocation === '1') {
      newEvent = [...newEvent].filter((e) => e.eventLocation === '台北市')
    }
    if (seletedLocation === '7') {
      newEvent = [...newEvent].filter((e) => e.eventLocation === '宜蘭縣')
    }

    //   case '桃園市':
    //     newEvent = [...newEvent].filter((e) => {
    //       return e.eventLocation === '桃園市'
    //     })
    //     break
    //   // 指所有的產品都出現
    //   default:
    //     break
    // }

    return newEvent
  }

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    console.log(searchWord)
    let newEvent = [...event]

    newEvent = handleSearch(newEvent, searchWord)
    console.log(newEvent)
    newEvent = handleSort(newEvent, sortBy)
    console.log(newEvent)
    newEvent = handleLocation(newEvent, seletedLocation)
    console.log(newEvent)
    setdisplayEvent(newEvent)

    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [event, searchWord, sortBy, seletedLocation])

  const loading = (
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
      <body className="bg2">
        <div class="container">
          <div class="row">
            {/* <div class="row"> */}
            <div className="d-flex">
              {/* <DateSearch
                dateSearch={dateSearch}
                setdateSearch={setdateSearch}
              /> */}
              <Location
                seletedLocation={seletedLocation}
                setseletedLocation={setseletedLocation}
              />
              <Sort sortBy={sortBy} setSortBy={setSortBy} />
              <SearchBar
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                className=""
              />
            </div>
            {/* </div> */}

            {displayEvent.map((v, i) => {
              return (
                <div class="ecard2 mt-5 d-flex">
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
                                  id: v.id, //傳Id
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
      </body>
    </div>
  )
}

export default withRouter(EventListCard)
