import React, { useState, useEffect } from "react";
// Styles
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function User(props) {
  const [article, setArticle] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [displayArticle, setDisplayArticle] = useState([]); //篩過之後的資料

  async function getArticleFromServer() {
    // 開啟載入指示
    setDataLoading(true);

    // 連接的伺服器資料網址
    const url = `http://localhost:4567/article?orderBy=created_at-desc`;

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    // 設定資料
    setArticle(data.data);
    setDisplayArticle(data.data);
  }

  async function deleteArticleFromServer(id) {
    // 開啟載入指示
    setDataLoading(true);

    // 連接的伺服器資料網址
    const url = "http://localhost:6005/article/" + id;

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: "DELETE",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    // 設定資料
    if (!data.id) {
      const newArticle = article.filter((value, index) => {
        return value.id !== id;
      });

      setArticle(newArticle);
      alert("刪除完成");
    }
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getArticleFromServer();
  }, []);

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false);
    }, 1000);
  }, []);

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Card className="m-3">
        <Link to="/article/detail/46" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2015/05/11058746_10205532198238492_3669878460724262130_n.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              有月經要多繳稅？澳洲課「棉條稅」 10 萬人連署抗議
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between w-100 pt-4">
              <p>Sid Weng</p>
              <p>2021-07-07</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail47" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://as.chdev.tw/web/article/a/7/4/afab2dec-7523-44d5-982f-3e0c51fcc9c11582016361.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              經期有血塊、量太少？　婦產科醫師解答你的月經迷思
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between w-100 pt-4">
              <p>烏烏醫師</p>
              <p>2021-07-06</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/45" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2017/10/xwx3uzps377ntjlm9q84wugvzunxjh.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              你聽過Period Poverty（月經貧窮）嗎？財政部擬年編1.7億專款回饋女性
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>羊正鈺</p>
              <p>2021-07-05</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/44" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2014/06/P1220386.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              經期不再污名化，七年級女生用布衛生棉改變世界—棉樂悅事工坊創辦人
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>TNL 編輯</p>
              <p>2021-07-04</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/2" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2018/7/8pmoxoeljbhi38bc0yti3eh0hns3mm.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              40萬人連署後，印度將衛生棉從「奢侈品」降級成免稅的「必需品」
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>李修慧</p>
              <p>2021-07-03</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/42" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://bnextmedia.s3.hicloud.net.tw/image/album/2021-02/img-1612334375-76986@900.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              為了「逃稅」，她們把衛生棉條放進書裡賣！超狂行銷串連19
              萬人合力翻轉不平等法律
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>錢玉紘</p>
              <p>2021-07-02</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/41" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://images.pexels.com/photos/6590828/pexels-photo-6590828.jpeg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              衛生棉、棉條還是月亮杯？優缺點超級比一比！
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>林以璿</p>
              <p>2021-07-01</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/40" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2018/11/plsasr8h3vtdxno4wrtl7hpalbqsg1.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              身為性別教育工作者，我如何教孩子性教育、家內性侵和跨性別？
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>周雅淳</p>
              <p>2021-06-30</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/39" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2021/2/1hqsbc1l7jhhuid6vaq4igmc6tws00.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              瑞典學校性平教育將強化認知「合意文化」，不把性騷擾「正常化」
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>中央社</p>
              <p>2021-06-28</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/38" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2020/6/uvttq0p5yjmdz4n52b4llsev1gih0j.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              世界很亂，該和女兒談談性：做不到這點，就不可能打開通往性教育的門
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>中央社</p>
              <p>2021-06-27</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/37" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://castle.womany.net/images/content/pictures/64694/womany_mian_tiao_5_1506576980-9990-9576.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              享受棉條帶給妳的自由！別怕，九個好處讓你愛上棉條
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>Rachel</p>
              <p>2021-06-26</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/36" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://castle.womany.net/images/content/pictures/64697/womany_mian_tiao_4_1506578832-5569-2391.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              為什麼台灣女生不太敢用衛生棉條？
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>Fairy Chang</p>
              <p>2021-06-25</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/35" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://images.pexels.com/photos/3958518/pexels-photo-3958518.jpeg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              第一次使用棉條就上手！寫給妳的全方位使用教學指南
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>Audrey Ko</p>
              <p>2021-06-24</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/34" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://castle.womany.net/images/content/pictures/123009/womany_monika_kozub_bzv_zCAXgeg_unsplash_1621275110-1282110-0033-4616.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              月亮杯是什麼？經期使用「月亮杯」，優點、缺點大整理
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>Hello醫師</p>
              <p>2021-06-23</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/33" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2021/4/4or39j6jg5qnihue305zhg66h0pwf8.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              馬來西亞崩壞始於教育：校園長年「月經檢查」、師拿「強暴」開玩笑
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>關鍵評論網 ASEAN：馬六甲</p>
              <p>2021-06-22</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/48" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://images.unsplash.com/photo-1445384763658-0400939829cd"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              新種月事用品　溫柔對待你的「好朋友」
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>楊心怡</p>
              <p>2021-06-07</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/28" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://pbs.twimg.com/media/EnoBjg2W8AU_U47?format=jpg&name=large"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              讓「月經貧窮」走入歷史，蘇格蘭議會獨步全球通過「生理用品免費法案」
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>中央社</p>
              <p>2021-05-12</p>
            </div>
          </Card.Body>
        </Link>
      </Card>

      <Card className="m-3">
        <Link to="/article/detail/26" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2019/10/mlrw5bx12lnz5c3ufu632hj815l3ua.jpeg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              學校教育強化的月經污名，如何轉型為給所有人的月經教育？
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>辣台妹聊性別</p>
              <p>2021-05-11</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/25" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://castle.womany.net/images/content/pictures/123008/womany_inciclo_rYgnsKoimT8_unsplash_1621275108-1321841-0002-8431.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              關於月亮杯你一定要知道的十件事！你也來一杯
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>臉紅紅</p>
              <p>2021-05-10</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/24" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://images.unsplash.com/photo-1607185073253-44296286cd82"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              給你的寵愛身體懶人包：第一次月亮杯就上手
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>慢慢說</p>
              <p>2021-05-09</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/23" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://image1.thenewslens.com/2018/8/m9x9znxgim7vi2zgai8e9oe4smjnwq.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              從意外到等待：台灣不同世代女性的初經經驗
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>王秀雲</p>
              <p>2021-05-08</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/2" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              女人生命中長時間相伴的「好朋友」，三種友善地球的永續生理期用品
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>吳心萍、黃靖文</p>
              <p>2021-05-05</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
      <Card className="m-3">
        <Link to="/article/detail/32" style={{ textDecoration: "none" }}>
          <Card.Img
            className="w-100 "
            style={{ height: "200px", objectFit: "cover" }}
            // src={article.articleImg}
            src="https://c1.staticflickr.com/5/4183/34238230142_a2a6fdb581_b.jpg"
          />
          <Card.Body>
            <h5 className="text-left text-body">
              第一次就上手！布衛生棉超完整解惑教學
              {/* {article.articleName} */}
            </h5>
            <div className="d-flex justify-content-between pt-4 text-body">
              <p>環境資訊中心</p>
              <p>2021-05-04</p>
            </div>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
}

export default User;
