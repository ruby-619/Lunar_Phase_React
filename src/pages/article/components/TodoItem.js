import React, { useState } from 'react'
import 'react-bootstrap'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import Swal from 'sweetalert2'

function TodoItem(props) {
  const {
    todoItem,
    // 打勾的部分
    // handleCompleted,
    handleDelete,
    handleEdited,
  } = props

  const [total, setTotal] = useState(0)

  const alertCheck = () => {
    Swal.fire({
      position: 'center',
      // icon: 'question',
      width: '30%',
      imageUrl: 'http://localhost:3333/img/Article/1103-confetti-outline.gif',
      text: '刪除成功！',
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
      <div className="border-bottom pb-5 mb-5">
        <div className="d-flex justify-content-between">
          <div className="my-auto">
            <li className="pl-5 ml-5">
              {/* 打勾的部分 */}
              {/* <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={() => {
            handleCompleted(todoItem.id)
          }}
        /> */}
              {todoItem.completed ? <del>{todoItem.text}</del> : todoItem.text}
            </li>
          </div>
          <div className="my-auto">
            <BiEdit
              style={{ cursor: 'pointer' }}
              className="article-message-icon  mr-3 h3"
              onClick={() => {
                handleEdited(todoItem.id)
              }}
            />
            <AiOutlineDelete
              style={{ cursor: 'pointer' }}
              className="h3 article-message-icon "
              onClick={() => {
                handleDelete(todoItem.id)
                alertCheck()
              }}
            />
          </div>
        </div>
        <div className="text-left ml-5 pt-4 d-flex">
          <FcLike
            style={{
              cursor: 'pointer',
            }}
            className="todo-like h5 ml-5 mr-4"
            onClick={() => {
              setTotal(total + 1)
            }}
          />
          <p>{total}</p>
        </div>
      </div>
    </>
  )
}

export default TodoItem
