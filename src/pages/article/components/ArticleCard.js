import React from "react";
import "react-bootstrap";
import "./articleCarousel.scss";
import { Link } from "react-router-dom";

const ArticleCard = () => {
  return (
    <>
      <div className="container d-flex m-auto border-top border-dark">
        <div className="col-4  border-right border-dark  mt-3">
          <Link
            to="/article/detail/35"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="article-card-hover">
              <img
                className=" w-100 mb-3"
                style={{ height: "230px", objectFit: "cover" }}
                src="https://images.pexels.com/photos/3958518/pexels-photo-3958518.jpeg"
                alt=""
              />
              <div className="title-wrap w-100">
                <h5 className="mb-4">
                  第一次使用棉條就上手！寫給妳的全方位使用教學指南
                </h5>
                <div className="d-flex justify-content-between w-100">
                  <p>Audrey Ko</p>
                  <p>2021-02-03</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-4 border-right border-dark mt-3">
          <Link
            to="/article/detail/24"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="article-card-hover">
              <img
                className=" w-100  mb-3"
                style={{ height: "230px", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1607185073253-44296286cd82"
                alt=""
              />
              <div className="title-wrap w-100">
                <h5 className="mb-4">
                  給你的寵愛身體懶人包：第一次月亮杯就上手
                </h5>
                <div className="d-flex justify-content-between w-100">
                  <p>慢慢說</p>
                  <p>2021-02-03</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-4 mt-3">
          <Link
            to="/article/detail/48"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="article-card-hover">
              <img
                className=" w-100 mb-3 "
                style={{ height: "230px", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1445384763658-0400939829cd"
                alt=""
              />
              <div className="title-wrap w-100">
                <h5 className="mb-4">新種月事用品　溫柔對待你的「好朋友」</h5>
                <div className="d-flex justify-content-between w-100">
                  <p>林以璿</p>
                  <p>2021-06-07</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ArticleCard;
