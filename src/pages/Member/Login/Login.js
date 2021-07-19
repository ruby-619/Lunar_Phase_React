import React, {useState, useEffect} from 'react'

import LunarPhaseNavbar from '../../../components/LunarPhaseNavbar'
import Footer from '../../../components/Footer'

import { Link, withRouter } from 'react-router-dom'

import $, { css, data } from 'jquery'
import swal from 'sweetalert';

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

function Login(props) {
    const [dataLoading, setDataLoading] = useState(false)

    let [move_ad, setMove_ad] = useState(false)

    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')

    const [userData, setUserData] = useState()

      
    // 登入
    async function loginToSever() {
      // 開啟載入指示
      //setDataLoading(true);

      const newData = { account, password };

      // 連接的伺服器資料網址
      const url = "http://localhost:4567/login";

      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: "POST",
        body: JSON.stringify(newData),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      });
      
      // console.log(JSON.stringify(newData));

      // console.log(request)
      const response = await fetch(request);
      const data = await response.json();

      // 給nav登出用，清除使用者資料
      setUserData(data)
      // console.log(userData)

      // 所有頁面共用使用者資料
      props.setParendUser(userData)

      // console.log("伺服器回傳的json資料", data);

      // 要等驗証過，再設定資料(簡單的直接設定)
      // if (data.success) alert("登入成功");
      // else alert("登入失敗");

      if (data.success) {
        // 沒有按照順序
        // await setTimeout(() => {
        //   document.getElementById("login").addEventListener("click", function() {
        //     swal("登入成功", "", "success")
        //   })
        // }, 500)
        // await setTimeout(() => {
            // props.history.push('/member/profile')
        // }, 2000)

        // 登入扭按兩次
        document.getElementById("login").addEventListener("click", function() {
          swal({
            title: "登入成功",
            text: "2秒後自動關閉",
            timer: 2000,
            showConfirmButton: false
          })
          setTimeout(() => {
            props.history.push('/member/profile')
          }, 2500)
        })
      }
      else {
        document.getElementById("login").addEventListener("click", function() {
          swal("登入失敗", "", "error")
        })
      }

    //   //直接在一段x秒關掉指示器
    //   setTimeout(() => {
    //     setDataLoading(false);
    //     //alert('儲存完成')
    //     //props.history.push('/')
    //  }, 500);
    }
      // 註冊
      async function registToServer() {

        const newData = { account, password, confirm_password}

        const url = "http://localhost:4567/register"

        const request = new Request(url, {
          method: "POST",
          body: JSON.stringify(newData),
          headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json"
          })
        })
        console.log(request)
        const response = await fetch(request)
        const data = await response.json()
        console.log(response)

        console.log("伺服器回傳的json資料", data)
        if (data.success) {
          document.getElementById("register").addEventListener("click", function () {
            swal("註冊成功", "歡迎加入，成為我們的一員","success")
          })
        }
        else {
          document.getElementById("register").addEventListener("click", function() {
            swal("註冊失敗", "這組帳號已經存在", "error")
          })
        }
      }

      // 會員登入與註冊指示
      useEffect(() => {
        // jquery程式碼寫在這裡, 確保dom已經出現在網頁
        // 使用id
        $('#move').on('click', () => { 
          if (move_ad == false) {
            $('.ad_col_moana').css('transition','0.8s').css('transform', `translateX(-600px)`)
            $('.ad_col_moana').find('h3').html('還不是會員嗎?')
            $('.ad_col_moana').find('p').html('加入我們會員這天，我們的商品一律85折!!!<br>期盼未來有機會繼續提供您更優質的服務。')
            setMove_ad(true)
          } else {
            $('.ad_col_moana').css('transition','0.8s').css('transform', `translateX(1px)`)
            $('.ad_col_moana').find('h3').html('歡迎蒞臨')
            $('.ad_col_moana').find('p').html('請填寫您的帳號密碼，歡迎加入我們，<br>我們將誠摯的邀請你成為我們的一員')
            setMove_ad(false)
          }
        })
      }, [move_ad])

      // 一鍵輸入
      // 登入
      useEffect(() => {
        $('#loginKey').on('click', () => {
          $('#email-login').val('moana@gmail.com')
          $('#pwd-login').val('moana999')
        })
      })


      // 註冊
      useEffect(() => {
        $('#registerKey').on('click', () => {
          $('#email-register').val('allPass@gmail.com')
          $('#pwd-register').val('passToday141')
          $('#con-pwd-register').val('passToday141')
        })
      })
        
    return (
      <>
        {/* <button onClick={() => { swal(123) }}>showAlert</button> */}
        {/* 測試:傳遞資料到App */}
        {/* <Link to="/member/profile">profile</Link> */}

        {/* <LunarPhaseNavbar {...props} /> */}

        <LunarPhaseNavbar userData={userData} setUserData={setUserData} />

        <div className="member layout_wrap">
          <div className="layout_container_moana">
            <div className="login_col_moana">
              <div className="login_wrap">
                <h2 className="h2-tc">登入</h2>
                <form onSubmit={(e) => {e.preventDefault()}}>
                  <div className="inner-icons">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>mail3</title>
                      <path d="M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM5.707 27.707l-2.414-2.414 8-8 0.914 0.914-6.5 9.5zM4.793 6.207l0.914-0.914 10.293 8.293 10.293-8.293 0.914 0.914-11.207 13.207-11.207-13.207zM26.293 27.707l-6.5-9.5 0.914-0.914 8 8-2.414 2.414z"></path>
                    </svg>
                    <input
                      id='email-login'
                      className="input_field_moana input_text_moana"
                      type="text"
                      size="25"
                      placeholder="電子信箱"
                      value=""
                      value={account}
                      onChange={(e) => {
                        setAccount(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="inner-icons">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>key</title>
                      <path d="M22 0c-5.523 0-10 4.477-10 10 0 0.626 0.058 1.238 0.168 1.832l-12.168 12.168v6c0 1.105 0.895 2 2 2h2v-2h4v-4h4v-4h4l2.595-2.595c1.063 0.385 2.209 0.595 3.405 0.595 5.523 0 10-4.477 10-10s-4.477-10-10-10zM24.996 10.004c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                    <input
                      id="pwd-login"
                      className="input_field_moana input_text_moana"
                      type="text"
                      size="25"
                      placeholder="密碼設定"
                      value=""
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <button id="login" className="btn-soft-pink p-tc" onClick={() => {loginToSever();}}>
                    登入
                  </button>
                </form>
                <div className="login_regist_links_moana">
                  <Link className="h5-tc" to="#">
                    忘記密碼
                  </Link>
                  <Link id="loginKey" className="h5-tc">
                    一鍵登入
                  </Link>
                </div>
              </div>
            </div>

            <div className="regist_col_moana">
              <div className="login_wrap">
                <Link id="registerKey">
                  <h2 className="h2-tc">註冊</h2>
                </Link>
                <form onSubmit={(e) => {e.preventDefault()}}>
                  <div className="inner-icons">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>mail3</title>
                      <path d="M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM5.707 27.707l-2.414-2.414 8-8 0.914 0.914-6.5 9.5zM4.793 6.207l0.914-0.914 10.293 8.293 10.293-8.293 0.914 0.914-11.207 13.207-11.207-13.207zM26.293 27.707l-6.5-9.5 0.914-0.914 8 8-2.414 2.414z"></path>
                    </svg>
                    <input
                      id="email-register"
                      className="input_field_moana input_text_moana"
                      type="text"
                      size="25"
                      placeholder="電子信箱"
                      value={account}
                      onChange={(e) => {
                        setAccount(e.target.value)
                      }}
                      required
                    />
                  </div>
                  <div className="inner-icons">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>key</title>
                      <path d="M22 0c-5.523 0-10 4.477-10 10 0 0.626 0.058 1.238 0.168 1.832l-12.168 12.168v6c0 1.105 0.895 2 2 2h2v-2h4v-4h4v-4h4l2.595-2.595c1.063 0.385 2.209 0.595 3.405 0.595 5.523 0 10-4.477 10-10s-4.477-10-10-10zM24.996 10.004c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                    <input
                      id="pwd-register"
                      className="input_field_moana input_text_moana"
                      type="password"
                      size="25"
                      placeholder="密碼設定"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      required
                    />
                  </div>
                  <div className="inner-icons">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>key</title>
                      <path d="M22 0c-5.523 0-10 4.477-10 10 0 0.626 0.058 1.238 0.168 1.832l-12.168 12.168v6c0 1.105 0.895 2 2 2h2v-2h4v-4h4v-4h4l2.595-2.595c1.063 0.385 2.209 0.595 3.405 0.595 5.523 0 10-4.477 10-10s-4.477-10-10-10zM24.996 10.004c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                    </svg>
                    <input
                      id="con-pwd-register"
                      className="input_field_moana input_text_moana"
                      type="password"
                      size="25"
                      placeholder="密碼確認"
                      value={confirm_password}
                      onChange={(e) => {
                        setConfirm_password(e.target.value)
                      }}
                      required
                    />
                  </div>
                  <div className="button-bg">
                    <div className="button_shadow"></div>
                    <button id="register" className="btn-soft-pink p-tc" onClick={() => {registToServer()}}>註冊</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="ad_col_moana">
                <h3 class="h3-tc">歡迎光臨</h3>
                <p class="h5-tc p-tc">
                請填寫您的帳號密碼，歡迎加入我們，<br />
                很高興您能成為我們的一員
                </p>
                <button id="move" class="btn-soft-pink p-tc">註冊</button>
            </div>
        </div>
        </div>

        <Footer />
      </>
    );
}
  
export default withRouter(Login)