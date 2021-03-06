import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'


const EventDetailCard = (props) => {
  const{ updateBmQty, updateQty } = props
  const [event, setEvent] = useState([])
  const [eventName, setEventname] = useState([])
  const [myevcart, setMyevcart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  const alertCheck = () => {
    Swal.fire({
      position: 'center',
      // icon: 'question',
      width: '30%',
      imageUrl: '/img/svg/1103-confetti-outline.gif',
      title: '已加入購物車',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('evcart')) || []
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      //currentCart[index].amount++
      setEventname('這個商品已經加過了')

      return
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('evcart', JSON.stringify(currentCart))

    // 設定資料
    setMyevcart(currentCart)
    console.log(currentCart)
    setEventname('活動：' + item.name + '已成功加入購物車')
    console.log(event.data)
    updateQty()
  }

  async function getEventFromServer() {
    
    const id = props.match.params.id
    const url = 'http://localhost:4567/event/' + id
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
    setEvent(data)
    console.log(data.eventImg)
    setChangeImg(data.eventImg)
  }
  useEffect(() => {
    getEventFromServer()
  }, [])

  
  useEffect(() => {
  }, [event])

  const [qty, setQty] = useState(1)
  const [changeImg, setChangeImg] = useState(event.eventImg)
  console.log(event.eventImg)

  console.log(event.eventImgGroup)

  // 多圖陣列逗點分格
  const eventImgGroupArray = event.eventImgGroup?.split(',')
  console.log(eventImgGroupArray)

  
  return (
    <>
      <div className="container-fluid">
        <div className="item-row row justify-content-between">
          <div className="item-pic-wrap d-flex col-12 col-md-6">
            <div className="item-pic-select col-2 mx-2 p-0 ">
              <button
                onClick={() => setChangeImg(event.eventImg)}
                className="item-pic-select-dot mb-3 p-0"
              >
                <img src={`/img/Event/${event.eventImg}`} alt="" />
              </button>
              {/* ----------map跑多圖------------ */}
              {eventImgGroupArray?.length &&
                eventImgGroupArray.map((v, index) => {
                  return (
                    <>
                      <button
                        onClick={() => setChangeImg(v)}
                        className="item-pic-select-dot mb-3 p-0"
                      >
                        <img src={`/img/Event/${v}`} alt="" />
                      </button>
                    </>
                  )
                })}
            </div>
            <div className="item-pic">
              <img src={`/img/Event/${changeImg}`} alt="" />
            </div>
          </div>
          <div className="item-info-wrap text-left col-12 col-md-6 mt-5 mt-md-0 pl-5">
            <div className="item-name mb-3">
              <h5 className="h5-item-l">{event.eventName}</h5>
            </div>
            <div className="item-tag d-flex"></div>
            <div className="item-price-line d-flex justify-content-between align-items-center ">
              <div className="item-price">
                <p className="p-price my-auto">$ {event.eventPrice}</p>
              </div>
            </div>
            <div className="item-detail">
              <h6>特色</h6>
              <div className="item-detail-content mb-0 pd-0">
                <p
                  className=" small"
                  dangerouslySetInnerHTML={{ __html: event.eventDescription }}
                ></p>
              </div>
            </div>
            <div className="item-style d-flex justify-content-between">
              <h6>尚有名額</h6>
              <div></div>
            </div>
            <div className="item-qty d-flex justify-content-between">
              <h6>人數</h6>
              <div className="item-qty-input input-group">
                <div className="input-group-btn">
                  <button
                    onClick={() => setQty(qty - 1)}
                    className="btn"
                    type="button"
                    id="qty-sub"
                  >
                    -
                  </button>
                </div>
                <input type="text" className="form-control" placeholder={qty} />
                <div className="input-group-btn">
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="btn"
                    type="button"
                    id="qty-add"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="add-cart col-12 pl-md-5">
              <button
                onClick={() => {
                  updateCartToLocalStorage({
                    id: event.id, //傳itemId
                    name: event.eventName,
                    amount: qty, //傳Qty
                    price: event.eventPrice,
                    image: event.eventImg,
                  })
                  alertCheck()
                  updateQty()
                }}
                className="btn-border-l"
              >
                我要報名
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="eventNameSetting">
            <div className="h4-tc mt-5 mb-5">{event.eventName}</div>
          </div>
          <div className="col-9 m-auto p-tc EventDescriptionLineHeight">
            <div
              className="col-9 m-auto p-tc  EventDescriptionLineHeight TextAlignCenter"
              dangerouslySetInnerHTML={{ __html: event.eventDescription }}
            ></div>
          </div>
        </div>
      </div>
      <div className="fluidPhoto">
      <img src={`/img/Event/${event.eventImg}`} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="paper">
            <div class="eventDetailContent">
              <h4 className="mb-5">活動詳細</h4>
              <div
                className="p-tc   "
                dangerouslySetInnerHTML={{ __html: event.eventDetail }}
              ></div>
              <div
                className="p-tc   "
                dangerouslySetInnerHTML={{ __html: event.eventNotice }}
              ></div>
              <div>
                <svg className="WaveBackground"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1441.055"
                  height="80.065"
                  viewBox="0 0 1441.055 80.065"
                >
                  <path
                    id="Path_878"
                    data-name="Path 878"
                    d="M860.9,618.985c28.56-23.532,152.83-20.141,188.436-19.11,40.945,1.186,103.98,4.447,143.646-7.179,12.869-3.771,25.324-10.049,33.124-20.529,3-4.036,4.732-9.138,3.4-13.87s-6.3-8.727-11.6-8.254-9.457,6.387-6.858,10.654a21.12,21.12,0,0,0-8.546-7.266c-3.587-1.486-8.159-1.389-11.119.987-3,2.409-3.678,6.615-2.515,10.11s3.854,6.388,6.753,8.9a60.473,60.473,0,0,0,22.028,12.032c45.583,13.754,99.961-2.554,146.5-5.875,57.049-4.071,114.376-5.452,171.613-4.162,181.009,4.079,354.344,54.079,535.224,52.614,56.824-.462,179.653-7.035,229.915-30.262"
                    transform="translate(-860.26 -549.001)"
                    fill="none"
                    stroke="#e64b4b"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(EventDetailCard)
