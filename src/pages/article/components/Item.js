import React from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Item = ({ id, dateS, dateE, note, deleteData, submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id)
    })
  }

  return (
    <>
      <div className="period-record-item w-50 mx-auto mt-5">
        <div>
          <p>開始時間：{dateS}</p>
          <p>結束時間：{dateE}</p>
          <p>症狀或其他紀錄：{note}</p>
        </div>
        <button onClick={deleteItem} className="period-record-remove">
          刪除
        </button>
      </div>
    </>
  )
}

export default Item
