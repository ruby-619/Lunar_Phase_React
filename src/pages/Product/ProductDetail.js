import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import './ProductDetail.scss'

// component
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import PdDetailBlock from './components/PdDetailBlock'
import PdInfoPad from './components/PdInfoPad'
import ArticleCard from './components/ArticleCard'
import PdAlsoLove from './components/PdAlsoLove'
import PdLinkKit from './components/PdLinkKit'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProductDetail(props) {
  const { cartQty } = props
  const { itemId } = useParams()
  // console.log(itemId)

  // 觀察Params 的itemId 變更
  const [itemIda, setItemIda] = useState(itemId)

  const [products, setProducts] = useState([])

  async function getPoductFromServer() {
    // 連接的伺服器資料網址
    const url = `http://localhost:4567/product/${itemId}`

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setProducts([data])
  }

  // const pageId = {props.match.params.id}

  useEffect(() => {
    getPoductFromServer()
    // 點選推薦時刷新頁面
    setTimeout(() => {
      // console.log(itemIda + 'XX' + itemId)
      if (itemIda !== itemId) {
        setItemIda(itemId)
      }
    }, 100)

    // AOS
    AOS.init({ offset: 120, duration: 800 })
  }, [itemId])

  const display = (
    <>
      {products.length &&
        products.map((value, index) => {
          return (
            <PdDetailBlock
              itemId={value.itemId}
              itemName={value.itemName}
              itemCoverImg={value.itemCoverImg}
              itemImg={value.itemImg}
              itemSize={value.itemSize}
              flowName={value.flowName}
              flowImg={value.flowImg}
              itemPrice={value.itemPrice}
              itemDescription={value.itemDescription}
              optionName={value.optionName}
            />
          )
        })}
    </>
  )

  return (
    <>
      <LunarPhaseNavbar cartQty={cartQty} />
      {/* items */}
      {display}
      {/* <PdDetailBlock /> */}
      <PdInfoPad />
      <PdLinkKit />
      <PdAlsoLove />

      <div className="product-board container-fluid">
        <div className="row flex-column mb-0">
          <h4>Comment</h4>
          <h6 className="h6-tc">使用者分享</h6>
        </div>
        {/* <div className="row product-board-row mb-0">
          <div className="col-12 my-2 text-center">
            <div className="product-board-avatar0">img</div>
            <h6>林黛玉</h6>
          </div>
          <div className="col-12">
            <div class="form-group text-left">
              <textarea
                class="form-control"
                id="commentInput"
                rows="3"
                placeholder="請輸入留言"
              ></textarea>
              <button className="">送出</button>
            </div>
          </div>
        </div> */}
        <div className="row product-board-comment-wrap">
          <div className="row product-board-comment-block col-12">
            <div className="product-board-comment-block-p d-flex col-4">
              <div className="product-board-avatar1 text-center">
                <img src="/img/Product/user01.jpg" alt="" />
              </div>
              <h6 className="text-center">李艾咪</h6>
            </div>
            <div className="product-board-comment-area col-8 text-left">
              <div>真的薄！日常使用也蠻服貼</div>
            </div>
          </div>
          <div className="row product-board-comment-block col-12">
            <div className="product-board-comment-block-p d-flex col-4">
              <div className="product-board-avatar1 text-center">
                <img src="/img/Product/user02.jpg" alt="" />
              </div>
              <h6 className="text-center">吳君君</h6>
            </div>
            <div className="product-board-comment-area col-8 text-left">
              <div>
                我是敏感膚質，目前使用都OK，無添加、無香味，推薦給敏弱肌的朋友
              </div>
            </div>
          </div>
          <div className="row product-board-comment-block col-12">
            <div className="product-board-comment-block-p d-flex col-4">
              <div className="product-board-avatar1 text-center">
                <img src="/img/Product/user03.jpg" alt="" />
              </div>
              <h6 className="text-center">小丸子</h6>
            </div>
            <div className="product-board-comment-area col-8 text-left">
              <div>瞬間大量也沒有漏，表現意外好耶！</div>
            </div>
          </div>
          <div className="row product-board-comment-block col-12">
            <div className="product-board-comment-block-p d-flex col-4">
              <div className="product-board-avatar1 text-center">
                <img src="/img/Product/user04.jpg" alt="" />
              </div>
              <h6 className="text-center">Abby</h6>
            </div>
            <div className="product-board-comment-area col-8 text-left">
              <div>
                透氣度還不錯，翅膀黏得很牢，但不會殘膠，推推～
                <br />
                下次想嘗試棉條:D
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row flex-column mb-0">
          <h4>Learn More</h4>
          <h6 className="h6-tc">熱門話題</h6>
        </div>
        <ArticleCard className="mb-5" />
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          <h4>Review</h4>
          <h6 className="h6-tc">商品評論</h6>
        </div>
      </div> */}
      <Footer />
    </>
  )
}

export default ProductDetail
