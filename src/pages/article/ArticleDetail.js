import React, { useState, useEffect } from 'react'
import './articleDetail.scss'
import TodoApp from './components/TodoApp.js'
import ArticleCard from './components/ArticleCard.js'
import ArticleDetailJquery from './components/ArticleDetailJquery.js'
import ProgressBar from 'react-scroll-progress-bar'
// https://www.npmjs.com/package/react-scroll-progress-bar
import { RiBookmarkFill } from 'react-icons/ri'
import { TiSocialFacebook } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai'
import { withRouter } from 'react-router-dom'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ArticleDetail = (props) => {
  const { updateBmQty } = props
  console.log(props)
  var moment = require('moment')

  const [article, setArticle] = useState({
    id: '',
    articleId: '',
    articleName: '',
    articleContent0: '',
    articleContent1: '',
    articleContent2: '',
    articleContent3: '',
    articleAuthor: '',
    articleTagId: 0,
    articleTag: '',
    articleCategory: '',
    numberArticleCategory: '',
    article_like: 0,
    articleImg: [],
    created_at: '1970-01-01',
    updated_at: '1970-01-01',
  })

  // const [dataLoading, setDataLoading] = useState(false);
  const [myBookmark, setMyBookmark] = useState(false)
  const updateMarkToLocalStorage = (item) => {
    const currentMark = JSON.parse(localStorage.getItem('arbookmark')) || []
    const index = currentMark.findIndex((v) => v.id === item.id)

    if (index > -1) {
      return
    } else {
      currentMark.push(item)
    }

    localStorage.setItem('arbookmark', JSON.stringify(currentMark))

    // 設定資料
    setMyBookmark(currentMark)
  }
  const alertMark = () => {
    Swal.fire({
      position: 'center',
      // icon: 'question',
      width: '30%',
      imageUrl: '/img/svg/43-music-note-outline.gif',
      title: '已加入收藏',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  async function getArticleFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const id = props.match.params.id
    const url = 'http://localhost:4567/article/' + id

    // const url = "http://localhost:6005/article/:id?";

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setArticle(data)
    console.log()
  }

  useEffect(() => {
    getArticleFromServer()
    // const newevent = event.find((v, i) => {
    //   return props.match.params.id === v.id
    // })
    // setEvent(newevent)
  }, [])

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
  )

  return (
    <>
      <LunarPhaseNavbar />

      <div>
        <div className="article-detail-title">
          <div className="text-center pt-5 mt-5">
            <h3 className="article-detail-title-h3">{article.articleName}</h3>
          </div>
          <ProgressBar
            height="110px"
            bgcolor="#FDD2BB"
            style={{ marginTop: '300px' }}
          />

          <img
            src={article.articleImg}
            className="w-100 article-detail-title-img"
            style={{ height: '660px', objectFit: 'cover', zIndex: '1000' }}
            alt=""
          />
        </div>
        <Link to="/product">
          <div
            style={{
              position: 'fixed',
              top: '400px',
              left: '30px',
              width: '120px',
              height: '120px',
              cursor: 'pointer',
              zIndex: '-1',
            }}
          >
            <img
              src="http://localhost:3333/img/Article/mc02-00.jpg"
              alt=""
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                width: '120px',
                height: '120px',
              }}
            />
            <h6
              className="text-center"
              style={{
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              - 盈月杯新上市 -<small>專為亞洲女性設計</small>
            </h6>
          </div>
        </Link>
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center my-5 border-bottom pb-5">
            <div className="ml-4">
              <ArticleDetailJquery />
            </div>
            <div className="article-detail-author-date">
              <p className="m-0">
                {article.articleAuthor}｜
                {moment(article.articleDate).format('YYYY-MM-DD')}
              </p>
            </div>
            <div className="mr-4">
              <RiBookmarkFill
                className="bookmarkfill aricle-detail-btn-hover h4 mr-4"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  updateMarkToLocalStorage({
                    id: article.articleId, //傳Id
                    name: article.articleName,
                    author: article.articleAuthor,
                    image: article.articleImg,
                  })
                  alertMark()
                  updateBmQty()
                }}
              />
              <TiSocialFacebook
                className="aricle-detail-btn-hover h3 mr-4"
                style={{ cursor: 'pointer' }}
              />
              <AiOutlineInstagram
                className="aricle-detail-btn-hover h3 mr-4"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <div className="article-detail-content">
            <p
              className="article-detail-content-p"
              dangerouslySetInnerHTML={{ __html: article.articleContent0 }}
            ></p>
            <div className="article-detail-highlight mx-auto text-center my-5">
              <img
                className="article-detail-highlight-img"
                src="http://localhost:3333/img/Article/Group 1120.png"
                alt=""
              />
              <p className="article-detail-highlight-p">
                {article.articleHighlight}
              </p>
            </div>
            <p
              className="article-detail-content-p"
              dangerouslySetInnerHTML={{ __html: article.articleContent1 }}
            ></p>
            <img
              src="http://localhost:3333/img/Article/Path 534.svg"
              className="aritcle-detail-line"
              alt=""
            />
            <p
              className="mt-5 pt-5 article-detail-content-p"
              dangerouslySetInnerHTML={{ __html: article.articleContent2 }}
            ></p>
            <img
              src="http://localhost:3333/img/Article/Path 536.svg"
              className="aritcle-detail-line2"
              alt=""
            />
            <p
              className="article-detail-content-p"
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
  )
}

export default withRouter(ArticleDetail)
