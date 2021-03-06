import React, { useState } from 'react'
import Swal from 'sweetalert2'

function TodoItemEditForm(props) {
  const { handleEdited, todoItem, handleEditedSave } = props

  // 用傳入props中的todoItem.text當初始化值
  const [input, setInput] = useState(todoItem.text)

  const alertCheck = () => {
    Swal.fire({
      position: 'center',
      // icon: 'question',
      width: '30%',
      imageUrl: 'http://localhost:3333/img/Article/1103-confetti-outline.gif',
      text: '修改成功！',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <>
      <div className="publisher w-25 d-flex pb-4">
        <img
          src="http://localhost:3333/img/Article/Maruko.jpeg"
          className="w-25 rounded-circle"
          alt="avator"
        />
        <div className="ml-4 my-auto text-left">
          <p className="mb-0">shih ching huang</p>
          <small>2021-07-22</small>
        </div>
      </div>
      <li className="text-center">
        <input
          className="form-control "
          type="text"
          rows="6"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          autoFocus
        />
        <button
          className="btn-border-s m-4"
          onClick={() => {
            // 兩個傳入參數，第一個是要修改的項目id，第二個是修改的新文字字串
            handleEditedSave(todoItem.id, input)
            alertCheck()
          }}
        >
          儲存
        </button>
        <button
          className="btn-border-s "
          onClick={() => {
            handleEdited(todoItem.id)
          }}
        >
          取消
        </button>
      </li>
    </>
  )
}

export default TodoItemEditForm
