import React, { useEffect, useState } from 'react'
import PdItemBlock from './PdItemBlock'

function PdItemsAll(props) {
  const { cateIdPa, updateBmQty, updateQty } = props
  const catePa = cateIdPa
  const [products, setProducts] = useState([])
  // const [cateName, setCateName] = useState('')
  //   const [dataLoading, setDataLoading] = useState(false)
  //   const [page, setPage] = useState(1)

  async function getPoductFromServer(params = {}) {
    // 開啟載入指示
    // setDataLoading(true)

    params.catePa = cateIdPa

    // 連接的伺服器資料網址
    const url = 'http://localhost:4567/product/'
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setProducts(data)
  }

  useEffect(() => {
    getPoductFromServer({ catePa })
  }, [])

  //列出頁數陣列
  let pageArray = Array.from(Array(products.totalPages).keys())
  console.log(pageArray)

  // 找出分類名稱
  // console.log('分類號碼：', products.catePa)
  const cateNames = {
    0: '全',
    1: '衛生棉',
    2: '衛生棉條',
    3: '布衛生棉',
    4: '月亮杯',
    5: '月亮褲',
  }

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setDataLoading(false)
  //     }, 1000)
  //   }, [products])

  //   const loading = (
  //     <>
  //       <div className="d-flex justify-content-center">
  //         <div className="spinner-border" role="status">
  //           {/* <span className="sr-only">Loading...</span> */}
  //         </div>
  //       </div>
  //     </>
  //   )

  const display = (
    <>
      <div className="row product-content flex-column">
        <div className="product-category-sec text-center mx-auto">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            className="d-flex mx-auto justify-content-between py-3 mb-3"
          >
            <div className="d-flex flex-wrap text-center mx-auto">
              <h6 className="my-md-auto py-0">
                {cateNames[products.catePa]}系列
              </h6>
              <p className="my-md-auto ml-4 py-0">共 {products.total} 項商品</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          className="row product-unit-wrap"
        >
          {products.perPage > 0 &&
            products.data.map((value, index) => {
              return (
                <>
                  <PdItemBlock
                    updateQty={updateQty}
                    updateBmQty={updateBmQty}
                    itemId={value.itemId}
                    itemSize={value.itemSize}
                    itemCoverImg={value.itemCoverImg}
                    flowImg={[value.flowImg]}
                    itemName={value.itemName}
                    itemPrice={value.itemPrice}
                    optionName={value.optionName}
                  />
                </>
              )
            })}
        </div>
        {/* page switch */}
        <div className="product-unit-page mt-5">
          <div
            className="btn-group d-flex flex-wrap"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={() => {
                const page = products.page - 1
                getPoductFromServer({ page })
              }}
              type="button"
              className={1 === products.page ? 'btn disabled' : 'btn'}
            >
              &lt; PREV
            </button>
            <div>
              {pageArray.map((i) => {
                const page = i + 1
                return (
                  <>
                    <button
                      onClick={() => {
                        getPoductFromServer({ page })
                      }}
                      type="button"
                      className="btn"
                    >
                      {page}
                    </button>
                  </>
                )
              })}
            </div>

            <button
              onClick={() => {
                const page = products.page + 1
                getPoductFromServer({ page })
              }}
              type="button"
              className={
                products.totalPages === products.page ? 'btn disabled' : 'btn'
              }
            >
              NEXT &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {display}
      {/* {dataLoading ? loading : display} */}
    </>
  )
}

export default PdItemsAll
