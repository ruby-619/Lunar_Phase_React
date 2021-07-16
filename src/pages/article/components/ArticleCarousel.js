import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./articleCarousel.scss";
import { Link } from "react-router-dom";

// https://react-bootstrap.github.io/components/carousel/

function ArticleCarousel() {
  return (
    <>
      {/* <div className="container"> */}
      <Carousel>
        <Carousel.Item>
          <Link to="/article/detail/2">
            <img
              className="d-block w-100"
              style={{
                transform: "scaleX(-1)",
                height: "600px",
                objectFit: "cover",
              }}
              src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg"
              alt="First slide"
            />
            <Carousel.Caption className="title">
              <h3 className="">
                女人生命中長時間相伴的「好朋友」，三種友善地球的永續生理期用品
              </h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/article/detail/39">
            <img
              className="d-block w-100"
              style={{
                height: "600px",
                objectFit: "cover",
              }}
              src="https://image1.thenewslens.com/2021/2/1hqsbc1l7jhhuid6vaq4igmc6tws00.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="title">
              <h3 className="">
                瑞典學校性平教育將強化認知「合意文化」，不把性騷擾「正常化」
              </h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/article/detail/41">
            <img
              className="d-block w-100"
              style={{
                height: "600px",
                objectFit: "cover",
              }}
              src="https://images.pexels.com/photos/6590828/pexels-photo-6590828.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption className="title">
              <h3 className="">衛生棉、棉條還是月亮杯？優缺點超級比一比！</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
      {/* </div> */}
    </>
  );
}

export default ArticleCarousel;
