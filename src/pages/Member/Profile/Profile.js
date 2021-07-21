import React, { useState } from 'react'

import LunarPhaseNavbar from '../../../components/LunarPhaseNavbar'
import Footer from '../../../components/Footer'

import Sidebar from '../../Member/components/Sidebar'

import { Link, withRouter } from 'react-router-dom'

import swal from 'sweetalert';

function Profile(props) {
    const { cartQty, bmQty } = props
    const [userData, setUserData] = useState(props.parendUser)
    const [fields, setFields] = useState()
    const [data, setData] = useState()

    // 壞人滾出去，不准來我家
    if (!userData.success) props.history.push('/login')

	const handleSubmit = (e) => {
        e.preventDefault()
        const fromData = new FormData(e.target)
        fromData.append('email', `${userData.body.account}`)
        setFields(fromData)
        // console.log(userData.body.account)
	}

    // 修改個人檔案
    async function profileToServer() {

        const url = "http://localhost:4567/upload-profile"

        const request = new Request(url, {
            method: "POST",
            body: fields
        })

        // console.log(fields.get('avatar'))
        console.log(fields)

        const response = await fetch(request);
        // console.log(response)
        const resData = await response.json()
        setData(resData)
        // console.log(data)

        if (data.success) {
            document.getElementById("profile").addEventListener("click", function () {
                swal("新增成功","","success") 
              })
          }
          else {
            document.getElementById("profile").addEventListener("click", function() {
                swal("資料有問題","","error")
             })
          }
    }
    
    return(
        <>
            <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty} />

            <div className="member layout_wrap">

                <div className="layout_container_moana">

                    <Sidebar />

                    <div className="user_data_moana">
                        <h2 className="user_form_title h2-tc">個人檔案</h2>
                        <form className="profile_form_moana" onSubmit={handleSubmit}>
                            <div className="profile_upload_img">
                            <div className="user_img_circle_moana user_img_big_circle_moana">
                                <img className="user_img_moana" src="/img/Member/life/life1.jpg" alt="" />
                                {/* <img className="user_img_moana" src={`http://localhost:4567/img/${fields.image}`} alt="" /> */}
                            </div>
                            <div className="btn-file">
                                <p>大頭貼</p>
                                <label className="btn-border" for="fileUpload">
                                    <input 
                                        id="fileUpload"
                                        className="btn-file"
                                        type="file" 
                                        name="avatar"
                                    />
                                </label>
                                
                            </div>
                            </div>
                            <div className="input_text_group_moana">
                                <label className="h5-tc" htmlFor="name">暱稱:</label>
                                <input 
                                    className="input_field_moana input_text_moana" 
                                    type="text" 
                                    name="fullname" 
                                    maxLength="10"
                                 />
                            </div>
                            <div className="input_date_group_moana">
                                <label className="h5-tc" htmlFor="birthday">生日:</label>
                                <input 
                                    id="birthday" 
                                    className="input_field_moana input_date_moana " 
                                    type="date" 
                                    name="birthday"
                                />
                            </div>
                            <div className="input_text_group_moana">
                            <label className="h5-tc" htmlFor="phone">聯絡電話:</label>
                            <input 
                                id="phone" 
                                className="input_field_moana input_text_moana " 
                                type="text" 
                                name="phone" 
                                size="10" 
                            />
                            </div>
                            <div className="input_address_group_moana">
                                <label className="h5-tc" htmlFor="address">寄送地址:</label>
                                <input 
                                    className="input_field_moana input_text_moana" 
                                    type="text" 
                                    size="70" 
                                    name="address"
                                />
                            </div>
                            <div className="input_radio_group_moana">
                                <label className="h5-tc" htmlFor="gender">性別:</label>
                                <div>
                                    <input  
                                        className="input_radio_moana" 
                                        type="radio" 
                                        name="gender"
                                        value='0' 
                                    />女性
                                </div>
                                <div>
                                    <input  
                                        className="input_radio_moana" 
                                        type="radio" 
                                        name="gender" 
                                        value='1'
                                    />男性
                                </div>
                            </div>
                            <button 
                                id="profile" 
                                className="btn-soft-w-moana btn-soft-green h5-tc"
                                onClick={ () => {profileToServer()} }
                            >
                                確認
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default withRouter(Profile)