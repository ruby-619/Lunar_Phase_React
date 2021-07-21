import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import './ProductDetail.scss'

// component
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import PdBreadcrumb from './components/PdBreadcrumb'
import PdDetailBlock from './components/PdDetailBlock'
import PdInfoPad from './components/PdInfoPad'
import ArticleCard from './components/ArticleCard'
import PdAlsoLove from './components/PdAlsoLove'
import PdLinkKit from './components/PdLinkKit'
import PdComment from './components/PdComment'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProductDetail(props) {
  const { updateQty, cartQty, updateBmQty, bmQty } = props
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

    updateBmQty()
    updateQty()
  }, [itemId])

  const display = (
    <>
      {products.length > 0 &&
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
              updateBmQty={updateBmQty}
              updateQty={updateQty}
            />
          )
        })}
    </>
  )

  return (
    <>
      <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty} />
      {/* breadcrumb */}
      <PdBreadcrumb />
      {/* items */}
      {display}
      {/* <PdDetailBlock /> */}
      <PdInfoPad />
      <PdLinkKit />
      <PdAlsoLove />
      <PdComment />

      <div className="container-fluid">
        <div className="row flex-column mb-0">
          <h4 data-aos="fade-down">Learn More</h4>
          <h6 data-aos="fade-down" className="h6-tc">
            熱門話題
          </h6>
        </div>
        <ArticleCard className="mb-5" />
      </div>

      <Footer />
    </>
  )
}

export default ProductDetail
