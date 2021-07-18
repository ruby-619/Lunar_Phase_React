import { useState, useEffect, useRef } from 'react'
import React from 'react'
import List from '../article/components/List.js'
import Edit from '../article/components/Edit.js'
import './PeriodRecord.css'
import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'

export const API_HOST = 'http://localhost:3333'
export const API_GET_DATA = `${API_HOST}/posts/1`

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(),
  })
}

const Home = () => {
  const [data, setData] = useState([])
  const submittingStatus = useRef(false)
  useEffect(() => {
    if (!submittingStatus.current) {
      return
    }
    fetchSetData(data).then((data) => (submittingStatus.current = false))
  }, [data])

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <>
      <LunarPhaseNavbar />

      <div className="period-record mx-auto">
        <Edit add={setData} submittingStatus={submittingStatus} />
        <List
          listData={data}
          deleteData={setData}
          submittingStatus={submittingStatus}
        />
      </div>
      <Footer />
    </>
  )
}

export default Home
