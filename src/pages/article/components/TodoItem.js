import React, { useState } from "react";
import "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

function TodoItem(props) {
  const {
    todoItem,
    // 打勾的部分
    // handleCompleted,
    handleDelete,
    handleEdited,
  } = props;

  const [total, setTotal] = useState(0);

  return (
    <>
      <div className="publisher w-25 d-flex pb-4">
        <img
          src="http://localhost:3333/img/Article/Maruko.jpeg"
          className="w-25 rounded-circle"
          alt="avator"
        />
        <div className="ml-4 my-auto text-left">
          <p className="mb-0">用戶A</p>
          <small>2021-06-21</small>
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
              className="mr-3 h3"
              onClick={() => {
                handleEdited(todoItem.id);
              }}
            />
            <AiOutlineDelete
              className="h3"
              onClick={() => {
                handleDelete(todoItem.id);
              }}
            />
          </div>
        </div>
        <div className="text-left ml-5 pt-4 d-flex">
          <FcLike
            className="h5 ml-5 mr-4"
            onClick={() => {
              setTotal(total + 1);
            }}
          />
          <p>{total}</p>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
