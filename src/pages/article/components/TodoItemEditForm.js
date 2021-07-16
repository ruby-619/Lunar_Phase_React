import React, { useState } from "react";

function TodoItemEditForm(props) {
  const { handleEdited, todoItem, handleEditedSave } = props;

  // 用傳入props中的todoItem.text當初始化值
  const [input, setInput] = useState(todoItem.text);

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
      <li className="text-center">
        <input
          className="form-control "
          type="text"
          rows="6"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          autoFocus
        />
        <button
          className="btn btn-success m-4"
          onClick={() => {
            // 兩個傳入參數，第一個是要修改的項目id，第二個是修改的新文字字串
            handleEditedSave(todoItem.id, input);
          }}
        >
          儲存
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleEdited(todoItem.id);
          }}
        >
          取消
        </button>
      </li>
    </>
  );
}

export default TodoItemEditForm;
