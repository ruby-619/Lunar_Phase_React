import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoItemEditForm from "./TodoItemEditForm";
import { withRouter } from "react-router-dom";

function TodoList(props) {
  const {
    todos,
    handleCompleted,
    handleDelete,
    handleEdited,
    handleEditedSave,
  } = props;

  console.log(props);
  // var moment = require("moment");

  const [articlecomment, setArticlecomment] = useState({
    id: null,
    articleId: "",
    member_acoount: "",
    comment: "",
    comment_like: "",
    created_at: "1970-01-01",
    updated_at: "1970-01-01",
  });

  const [dataLoading, setDataLoading] = useState(false);

  async function getArticlecommentFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const id = props.match.params.id;
    const url = "http://localhost:4567/articlecomment/" + id;
    // const url = "http://localhost:6005/article/:id?";

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    // 設定資料
    setArticlecomment(data);
    console.log();
  }

  useEffect(() => {
    getArticlecommentFromServer();
    // const newevent = event.find((v, i) => {
    //   return props.match.params.id === v.id
    // })
    // setEvent(newevent)
  }, []);

  // 每次users資料有變動就會X秒後關掉載入指示
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataLoading(false);
  //   }, 1000);
  // }, [article]);

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );

  return (
    <>
      <ul className="list-unstyled">
        {todos.map((todoItem, i) => {
          return todoItem.edited ? (
            <TodoItemEditForm
              key={todoItem.id}
              handleEdited={handleEdited}
              todoItem={todoItem}
              handleEditedSave={handleEditedSave}
            />
          ) : (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
              handleEdited={handleEdited}
            />
          );
        })}
      </ul>
    </>
  );
}

export default withRouter(TodoList);
