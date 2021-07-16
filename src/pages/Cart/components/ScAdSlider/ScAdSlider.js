/*
  dataArray 數據陣列
  autoplay={true} 自動撥放
  delay={10} 延遲多九
  carouselPostWidth={'50vw'} 每塊寬度
  carouselPostHeight={100} 每塊高度
  carouselPostStyle={{boxShadow:`1px 10px 15px #fff`}} 樣式
  carouselPostMargin={10}/>,document.getElementById("app")

*/

import React, { Component } from 'react'
import './ScAdSlider.scss'

function ScAdSlider() {
  let imageArray = [
    {
      image: '/img/Product/mc01-00.jpg',
      //   title: '弦月柔棉 日用薄型衛生棉 15片',
      //   time: '2019-10-26',
    },
    {
      image: '/img/Product/items002.jpg',
    },
    {
      image: '/img/Product/mc01-01.jpg',
    },
    {
      image: '/img/Product/mc01-00.jpg',
    },
    {
      image: '/img/Product/mc01-00.jpg',
    },
    {
      image: '/img/Product/mc01-01.jpg',
    },
    {
      image: '/img/Product/pd06-01.jpg',
    },
    {
      image: '/img/Product/mc-i-01.jpg',
    },
    {
      image: '/img/Product/mc01-00.jpg',
    },
    {
      image: '/img/Product/pd01-01.jpg',
    },
    {
      image: '/img/Product/mc-i-01.jpg',
    },
    {
      image: '/img/Product/pd06-01.jpg',
    },
  ]
  class Container extends React.Component {
    renderChildrenView = (item, index) => {
      return (
        <div className="contentBox" key={index}>
          <div className="cardBox">
            <img className="imageStyle" src={item.image} alt="" />
          </div>
        </div>
      )
    }
    render() {
      return (
        <React.Fragment>
          <Carousel
            dataArray={imageArray}
            autoplay={true}
            delay={10}
            carouselPostWidth={'190px'}
            carouselPostHeight={150}
            carouselPostMargin={10}
          >
            {this.renderChildrenView}
          </Carousel>
        </React.Fragment>
      )
    }
  }

  class Carousel extends React.Component {
    state = {
      nowIndex: 0,
    }
    componentDidMount() {
      if (this.props.autoplay) {
        // this.autoPlay()
      }
    }
    componentWillUnmount() {
      clearInterval(this.timer)
    }
    autoPlay = () => {
      this.timer = setInterval(() => {
        this.changeImagePosition(2)
      }, this.props.delay * 1000)
    }

    conputedLeft = () => {
      const { carouselPostWidth, carouselPostHeight, carouselPostMargin } =
        this.props
      const { nowIndex } = this.state
      console.log('nowIndex', nowIndex)
      let leftSpan = parseInt(`${-nowIndex * parseInt(carouselPostWidth)}`)
      return {
        left:
          carouselPostWidth.toString().match(/[%vw]/) != null
            ? `calc(${leftSpan}% - ${carouselPostMargin * 2 * nowIndex}px)`
            : `${leftSpan - carouselPostMargin * 2 * nowIndex}px`,
      }
    }

    changeImagePosition = (index) => {
      const { dataArray, block } = this.props
      const { nowIndex } = this.state
      // (1 + 1 + 3) % 3
      this.setState({
        nowIndex: (nowIndex + index + dataArray.length) % dataArray.length,
      })
    }

    render() {
      const {
        dataArray,
        carouselPostMargin,
        carouselPostWidth,
        carouselPostHeight,
      } = this.props
      return (
        <>
          <div className="col-10 mx-auto   pl-5 youMayLike pt-3">
            <div className="hotTag position-absolute d-flex align-items-center ">
              <div className="hotTagTitle ">HOT</div>
              <img
                className="w-100"
                src="/img/Cart/ribbon-silhouette.svg"
                alt=""
              />
            </div>
            <div className="ml-5 pl-5 h5-tc">你可能會喜歡</div>
          </div>
          <div className="carouselContainer col-10 mx-auto py-3">
            <div className="carouselArea col-10">
              <div style={this.conputedLeft()} className="carouselPosts">
                {dataArray.map((imgaeUrl, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        width: carouselPostWidth,
                        height: carouselPostHeight,
                        margin: `0px ${carouselPostMargin}px `,
                        ...this.props.carouselPostStyle,
                      }}
                      className="carouselPostBox"
                    >
                      {this.props.children(imgaeUrl, index)}
                    </div>
                  )
                })}
              </div>
            </div>

            <div
              onClick={() => this.changeImagePosition(-4)}
              className="controlLeft"
            >
              <img className="w-25" src="/img/Cart/arrowLeft.svg" alt="" />
            </div>
            <div
              onClick={() => this.changeImagePosition(4)}
              className="controlRight"
            >
              <img className="w-25" src="/img/Cart/arrowRight.svg" alt="" />
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <Container />
    </>
  )
}

export default ScAdSlider
