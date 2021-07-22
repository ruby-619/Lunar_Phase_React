import React from 'react'
import 'react-bootstrap'
import Swal from 'sweetalert2'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew } = props

  const alertCheck = () => {
    Swal.fire({
      position: 'center',
      // icon: 'question',
      width: '30%',
      imageUrl: 'http://localhost:3333/img/Article/1103-confetti-outline.gif',
      text: '留言成功！',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <>
      <div className="publisher w-25 d-flex">
        <img
          src="http://localhost:3333/img/Article/Maruko.jpeg"
          className="w-25 rounded-circle"
          alt="avator"
        />
        <p className="my-auto ml-4">shih ching huang</p>
      </div>
      <textarea
        className="form-control mt-3"
        rows="6"
        placeholder="在此輸入文字..."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddNew(todoInput)
          }
        }}
      />
      <div className="d-flex justify-content-center">
        <button
          onClick={() => {
            handleAddNew(todoInput)
            alertCheck()
          }}
          className="my-4  text-center btn-soft-green-s"
        >
          我要留言
        </button>
      </div>
    </>
  )
}

export default TodoAddForm
