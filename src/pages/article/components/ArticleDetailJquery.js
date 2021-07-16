import React, { useState, useEffect } from "react";
import $ from "jquery";
import { AiOutlineFontColors } from "react-icons/ai";

function ArticleDetailJquery() {
  const [data] = useState(123);
  const [didMount, setDidMount] = useState(false);

  // const buttonRef = useRef()

  // componentDidMount
  useEffect(() => {
    $(".jq-large").on("click", () => {
      // event.preventDefault(); //取消預設行為
      $("p").css("font-size", "20px").css("line-height", "40px");
    });

    $(".jq-medium").on("click", () => {
      // event.preventDefault(); //取消預設行為
      $("p").css("font-size", "18px");
    });

    $(".jq-small").on("click", () => {
      // event.preventDefault(); //取消預設行為
      $("p").css("font-size", "16px");
    });

    setDidMount(true);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    // 第一次不執行
    if (!didMount) return;

    // jquery程式碼寫在這裡, 確保dom已經出現在網頁
    // 使用id
    // 移除事件監聽
    $(".jq-large").off("click");
    $(".jq-medium").off("click");
    $(".jq-small ").off("click");

    // 加入新的事件監聽
    $(".jq-large").on("click", () => {
      // event.preventDefault(); //取消預設行為
      $("p").css("font-size", "20px").css("line-height", "40px");
    });

    $(".jq-medium").on("click", () => {
      // event.preventDefault(); //取消預設行為
      $("p").css("font-size", "18px");
    });

    $(".jq-small").on("click", () => {
      // event.preventDefault(); //取消預設行為
      $("p").css("font-size", "16px");
    });
  }, [data, didMount]);

  return (
    <>
      {/* <button className="btn btn-primary font jq-large mr-4">大</button>
            <button className="btn btn-primary font jq-medium mr-4">中</button>
            <button className="btn btn-primary font jq-small mr-4">小</button>
<hr />
            <AiOutlineFontSize className="font jq-large h1 mr-4"/>
            <AiOutlineFontSize className="font jq-medium h3 mr-4"/>
            <AiOutlineFontSize className="font jq-small h5"/>
<hr /> */}

      <AiOutlineFontColors className="font jq-large h1 mr-4" />
      <AiOutlineFontColors className="font jq-medium h3 mr-4" />
      <AiOutlineFontColors className="font jq-small h5" />
    </>
  );
}

export default ArticleDetailJquery;
