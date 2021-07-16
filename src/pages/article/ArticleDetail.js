import React, { useState, useEffect } from "react";
import "./articleDetail.scss";
import TodoApp from "./components/TodoApp.js";
import ArticleCard from "./components/ArticleCard.js";
import ArticleDetailJquery from "./components/ArticleDetailJquery.js";
import ProgressBar from "react-scroll-progress-bar";
// https://www.npmjs.com/package/react-scroll-progress-bar
import { RiBookmarkFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import LunarPhaseNavbar from "../../components/LunarPhaseNavbar";
import Footer from "../../components/Footer";

const ArticleDetail = (props) => {
  console.log(props);
  var moment = require("moment");

  const [article, setArticle] = useState({
    id: "",
    articleId: "",
    articleName: "",
    articleContent0: "",
    articleContent1: "",
    articleContent2: "",
    articleContent3: "",
    articleAuthor: "",
    articleTagId: 0,
    articleTag: "",
    articleCategory: "",
    numberArticleCategory: "",
    article_like: 0,
    articleImg: [],
    created_at: "1970-01-01",
    updated_at: "1970-01-01",
  });

  // const [dataLoading, setDataLoading] = useState(false);

  async function getArticleFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const id = props.match.params.id;
    const url = "http://localhost:4567/article/" + id;

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
    setArticle(data);
    console.log();
  }

  useEffect(() => {
    getArticleFromServer();
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
      <div>
        <LunarPhaseNavbar />
        <ProgressBar height="15px" bgcolor="#FDD2BB" />
        <div className="title-svg">
          <div className="text-center pt-5 mt-5">
            <h3>{article.articleName}</h3>
          </div>
          <img
            src={article.articleImg}
            className="w-100"
            style={{ height: "660px", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center my-5 border-bottom pb-5">
            <div className="ml-4">
              <ArticleDetailJquery />
            </div>
            <div className="author-date">
              <p className="m-0">
                {article.articleAuthor}｜
                {moment(article.articleDate).format("YYYY-MM-DD")}
              </p>
            </div>
            <div className="mr-4">
              <RiBookmarkFill className="h4 mr-4" />
              <TiSocialFacebook className="h3 mr-4" />
              <AiOutlineInstagram className="h3 mr-4" />
            </div>
          </div>
          <div className="content">
            <p
              dangerouslySetInnerHTML={{ __html: article.articleContent0 }}
            ></p>
            <div className="highlight mx-auto text-center my-5">
              <img
                src="http://localhost:3333/img/Article/Group 1120.png"
                alt=""
              />
              <p className="">{article.articleHighlight}</p>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: article.articleContent1 }}
            ></p>
            <img
              src="http://localhost:3333/img/Article/Path 534.svg"
              className="line"
              alt=""
            />
            <p
              className="mt-5 pt-5"
              dangerouslySetInnerHTML={{ __html: article.articleContent2 }}
            ></p>
            <img
              src="http://localhost:3333/img/Article/Path 536.svg"
              className="line2"
              alt=""
            />
            <p
              dangerouslySetInnerHTML={{ __html: article.articleContent3 }}
            ></p>
          </div>
        </div>
        <div className="article-recommand container mb-5">
          <div className="container d-flex justify-content-between align-items-center border-bottom border-dark mb-5">
            <div>
              <h3>相關文章</h3>
            </div>

            <div>
              <p className="btn-more mt-3 mx-auto" href="#">
                more
              </p>
            </div>
          </div>
          <ArticleCard />
        </div>
      </div>

      <div className="container">
        <TodoApp />
      </div>
      <Footer />
    </>
  );
};

export default withRouter(ArticleDetail);
