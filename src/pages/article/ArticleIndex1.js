import React from 'react'
import './articleIndex.scss'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import ArticleCard from './components/ArticleCard.js'
import App from './components/App.js'
import ArticleCarousel from './components/ArticleCarousel.js'
import '../../styles/global.scss'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'

// https://react-bootstrap.github.io/components/carousel/
// https://ithelp.ithome.com.tw/articles/10227641

const ArticleIndex1 = () => {
  return (
    <>
      <LunarPhaseNavbar />
      <div className="article-index">
        <ArticleCarousel />
        <img
          src="http://localhost:3333/img/Article/wave.svg"
          style={{
            width: '100%',
            position: 'absolute',
            top: '700px',
            right: '0px',
            zIndex: '-1',
            opacity: '0.8',
          }}
          alt=""
          className="w-100  mt-5"
        />
        {/* 第二頁分類文章區塊開始 */}
        <div className="container">
          <div
            className="mx-auto"
            style={{ position: 'relative', marginTop: '150px' }}
          >
            <h3 className="text-center my-5">｜分類文章｜</h3>
          </div>
          <div className="container my-5">
            <div className="w-100 border-top border-bottom border-dark ">
              <div className="m-auto w-50 text-center article-index-category d-flex justify-content-between py-3">
                <Link to="/article1">
                  <div className="article-category-selected-btn text-decoration-none">
                    衛教資訊
                  </div>
                </Link>
                <Link to="/article2">
                  <div className="article-category-btn text-decoration-none">
                    性教育
                  </div>
                </Link>
                <Link to="/article3">
                  <div className="article-category-btn text-decoration-none">
                    性別故事
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <ArticleCard />

          <div className="article-index-more">
            <Link to="/article/health">
              <img
                src="http://localhost:3333/img/Article/more-for-category.svg"
                alt=""
                className="article-index-more-img"
              />
            </Link>
          </div>
        </div>

        {/* 第三頁最新文章區塊開始 */}
        <div className="container">
          <div className="article-new mb-5">
            <h3 className="article-new-h3">｜最新文章｜</h3>
            <div className="mb-3 text-center">
              <img
                className="w-75"
                src="http://localhost:3333/img/Article/Path 549.svg"
                alt=""
              />
            </div>
            <div className="w-100 text-center">
              <small className="article-new-small">
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
      <Footer />
    </>
  )
}

export default ArticleIndex1
