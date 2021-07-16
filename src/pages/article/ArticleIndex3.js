import React from "react";
import "./articleIndex.scss";
import "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import App from "./components/App.js";
import ArticleCarousel from "./components/ArticleCarousel.js";
// import "../../styles/global.scss";
import LunarPhaseNavbar from "../../components/LunarPhaseNavbar";
import Footer from "../../components/Footer";

// https://react-bootstrap.github.io/components/carousel/
// https://ithelp.ithome.com.tw/articles/10227641

const ArticleIndex3 = () => {
  return (
    <>
      <LunarPhaseNavbar />
      <div className="body-article">

        <div className="index ">
          <ArticleCarousel />
          <img
            src="http://localhost:3333/img/Article/wave.svg"
            style={{
              width: "100%",
              position: "absolute",
              top: "700px",
              right: "0px",
              zIndex: "-1",
              opacity: "0.8",
            }}
            alt=""
            className="w-100  mt-5"
          />
          {/* 第二頁分類文章區塊開始 */}
          <div className="container">
            <div
              className="mx-auto"
              style={{ position: "relative", marginTop: "150px" }}
            >
              <h3 className="text-center my-5">｜分類文章｜</h3>
            </div>
            <div className="container my-5">
              <div className="w-100 border-top border-bottom border-dark ">
                <div className="m-auto w-50 text-center category d-flex justify-content-between py-3">
                  <Link to="/article1">
                    <div className="article-category-btn text-decoration-none">
                      衛教資訊
                    </div>
                  </Link>
                  <Link to="/article2">
                    <div className="article-category-btn text-decoration-none">
                      性教育
                    </div>
                  </Link>
                  <Link to="/article3">
                    <div
                      className="article-category-selected-btn text-decoration-none"
                      href
                    >
                      性別故事
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="container d-flex m-auto border-top border-dark">
              <div className="col-4 border-right border-dark  mt-3">
                <Link
                  to="article/detail/23"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="article-card-hover">
                    <img
                      className=" w-100 mb-3"
                      style={{ height: "230px", objectFit: "cover" }}
                      src="https://image1.thenewslens.com/2018/8/m9x9znxgim7vi2zgai8e9oe4smjnwq.jpg"
                      alt=""
                    />
                    <div className="title-wrap w-100">
                      <h5 className="mb-4">
                        從意外到等待：台灣不同世代女性的初經經驗
                      </h5>
                      <div className="d-flex justify-content-between w-100">
                        <p>王秀雲</p>
                        <p>2021-05-11</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-4 border-right border-dark mt-3">
                <Link
                  to="/detail/46"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="article-card-hover">
                    <img
                      className=" w-100  mb-3"
                      style={{ height: "230px", objectFit: "cover" }}
                      src="https://image1.thenewslens.com/2015/05/11058746_10205532198238492_3669878460724262130_n.jpg"
                      alt=""
                    />
                    <div className="title-wrap w-100">
                      <h5 className="mb-4">
                        有月經要多繳稅？澳洲課「棉條稅」 10萬人連署抗議
                      </h5>
                      <div className="d-flex justify-content-between w-100">
                        <p>Sid Weng</p>
                        <p>2021-07-07</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-4 mt-3">
                <Link
                  to="/article/detail/44"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="article-card-hover">
                    <img
                      className=" w-100 mb-3 "
                      style={{ height: "230px", objectFit: "cover" }}
                      src="https://image1.thenewslens.com/2014/06/P1220386.jpg"
                      alt=""
                    />
                    <div className="title-wrap w-100">
                      <h5 className="mb-4">
                        經期不再污名化，七年級女生用布衛生棉改變世界—棉樂悅事工坊創辦人
                      </h5>
                      <div className="d-flex justify-content-between w-100">
                        <p>TNL 編輯</p>
                        <p>2021-07-04</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="more">
              <Link to="/article/health">
                <img
                  src="http://localhost:3333/img/Article/more-for-category.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* 第三頁最新文章區塊開始 */}
          <div className="container">
            <div className="new mb-5">
              <h3 className="">｜最新文章｜</h3>
              <div className="mb-3 text-center">
                <img
                  className="w-75"
                  src="http://localhost:3333/img/Article/Path 549.svg"
                  alt=""
                />
              </div>
              <div className="w-100 text-center">
                <small>
                  我必須真正享受生命中的美好事物，因為這讓其他的不美好顯得無關緊要。
                </small>
              </div>
            </div>
            <div className="mb-5">
              <App />
            </div>
          </div>
          {/* 第二頁最新文章區塊結束 */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ArticleIndex3;
