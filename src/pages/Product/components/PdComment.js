import React from 'react'

function PdComment() {
  return (
    <>
      <div className="product-board container-fluid my-5">
        <div className="row flex-column mb-0">
          <h4 data-aos="fade-down">Comment</h4>
          <h6 data-aos="fade-down" className="h6-tc">
            使用者分享
          </h6>
        </div>
        <div data-aos="fade-down" className="row product-board-comment-wrap">
          <div className="row product-board-comment-block col-12">
            <div className="product-board-comment-block-p d-flex col-4">
              <div className="product-board-avatar1 text-center">
                <img src="/img/Product/user01.jpg" alt="" />
              </div>
              <h6 className="text-center">李艾咪</h6>
            </div>
            <div className="product-board-comment-area col-8 text-left">
              <div>真的薄！日常使用很服貼</div>
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
                我是敏感膚質，這款衛生棉無添加、無香味，表層很柔軟，推薦給敏弱肌的朋友
              </div>
            </div>
          </div>
          <div className="row product-board-comment-block col-12">
            <div className="product-board-comment-block-p d-flex col-4">
              <div className="product-board-avatar1 text-center">
                <img src="/img/Product/user03.jpg" alt="" />
              </div>
              <h6 className="text-center">橘子貝果</h6>
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
                透氣度還不錯，翅膀黏得很牢，又不會殘膠，推推～
                <br />
                下次想嘗試棉條:D
              </div>
            </div>
          </div>
          <div className="row product-board-comment-block col-12">
            <div className="product-board-comment-block-p d-flex col-4">
              <div className="product-board-avatar1 text-center">
                <img src="/img/Product/user05.jpg" alt="" />
              </div>
              <h6 className="text-center">瑪莉安安</h6>
            </div>
            <div className="product-board-comment-area col-8 text-left">
              <div>值得一再回購的好品質</div>
            </div>
          </div>
        </div>
        {/* <div className="row product-board-row mb-0">
          <div className="col-12 my-2 text-center">
            <div className="product-board-avatar0">img</div>
            <h6>陳嘉玲</h6>
          </div>
          <div className="col-12">
            <div class="form-group text-left">
              <textarea
                class="form-control"
                id="commentInput"
                rows="3"
                placeholder="分享體驗"
              ></textarea>
              <button className="btn-border-s mx-auto mt-2">送出</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default PdComment
