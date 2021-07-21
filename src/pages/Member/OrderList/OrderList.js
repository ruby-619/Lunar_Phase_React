import React from 'react'

import LunarPhaseNavbar from '../../../components/LunarPhaseNavbar'
import Footer from '../../../components/Footer'

import Sidebar from '../../Member/components/Sidebar'

import { Link, withRouter} from 'react-router-dom'

import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle'

function OrderList(props) {
    const { cartQty, bmQty } = props
    const userData = props.parendUser
    // console.log(userData.success)

    // 壞人滾出去，不准來我家
    if (!userData.success) props.history.push('/login')
    
    return(
        <>
            <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty}/>

            <div className="member layout_wrap">
    
                <div className="layout_container_moana">
                    
                    <Sidebar />
                    
                    <div className="user_data_moana">
                        <h2 className="user_form_title h2-tc">訂單查詢</h2>
                        <div className="container">
                            <div className="search-box">
                            <form className="search">
                                <input className="search-input" type="text" placeholder="Search" />
                                <button className="search-button" to="#"><i className="fas fa-search"></i></button>
                            </form>
                            </div>
                            <div className="order_list_lists">
                            <div className="order_list_card">
                                <div className="order_list">
                                <div className="order_list_img_bg">
                                    <img className="user_img_moana" src="/img/Member/product/product1.jpg" alt="" />
                                </div>
                                <div className="order_list_info">
                                    <div className="order_list_id order_list_tc f_tc_22">訂單編號 <span className="f_mon_22">990263754</span></div>
                                    <div className="order_list_date f_dm_20">2021-07-03</div>
                                    <div className="order_list_detail">
                                    <div className="order_list_sub_total f_tc_22">訂單總金額 NT$<span className="f_mon_22 c">1200</span></div>
                                    <button className="btn-border" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseTwo">
                                        商品詳細
                                    </button>
                                    </div>
                                </div>
                                </div>
                                <div id="collapseOne" className="order_list_items collapse show">
                                <div className="card-body">
                                    <div className="order_list_item">
                                    <div className="order_list_img_sm">
                                        <img className="user_img_moana" src="/img/Member/product/product1.jpg" alt="" />
                                    </div>
                                    <div className="h6-tc">月亮杯</div>
                                    <div className="sub_count h6-tc">1</div>
                                    <div className="sub_total h6-tc">$ 1200</div>
                                    </div>
                                </div>
                    
                                <div className="order_items_price card-body">
                                    <div className="order_list_pd_price h6-tc">產品總金額: <span className="f_mon_20">NT 1200</span></div>
                                    <div className="order_list_delivery_price h6-tc">運費總金額: <span className="f_mon_20">NT 60</span></div>
                                    <di className="pay h6-tc">付款方式: <span className="f_mon_20 c">貨到付款</span></di>
                                    <div className="total f_tc_22">訂單總金額 NT$ <span className="f_mon_20 c">1260</span></div>
                                </div>
                                <button className="btn-border order_list_bottom" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseTwo">
                                    商品詳細
                                </button>
                                </div>
                            </div>
                            <div className="order_list_card">
                                <div className="order_list">
                                <div className="order_list_img_bg">
                                    <img className="user_img_moana" src="/img/Member/product/product2.jpg" alt="" />
                                </div>
                                <div className="order_list_info">
                                    <div className="order_list_id order_list_tc f_tc_22">訂單編號 <span className="f_mon_22">497784297</span></div>
                                    <div className="order_list_date f_dm_20">2021-07-03</div>
                                    <div className="order_list_detail">
                                    <div className="order_list_sub_total f_tc_22">訂單總金額 NT$<span className="f_mon_22 c">590</span></div>
                                    <button className="btn-border" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        商品詳細
                                    </button>
                                    </div>
                                </div>
                                </div>
                                <div id="collapseTwo" className="order_list_items collapse show">
                                <div className="card-body">
                                    <div className="order_list_item">
                                    <div className="order_list_img_sm">
                                        <img className="user_img_moana" src="/img/Member/product/product2.jpg" alt="" />
                                    </div>
                                    <div className="h6-tc">布衛生棉</div>
                                    <div className="sub_count h6-tc">3</div>
                                    <div className="sub_total h6-tc">$ 590</div>
                                    </div>
                                </div>
                    
                                <div className="order_items_price card-body">
                                    <div className="order_list_pd_price h6-tc">運費總金額: <span className="f_mon_20">NT 590</span></div>
                                    <div className="order_list_delivery_price h6-tc">運費總金額: <span className="f_mon_20">NT 60</span></div>
                                    <di className="pay h6-tc">付款方式: <span className="f_mon_20 c">貨到付款</span></di>
                                    <div className="total f_tc_22">訂單總金額 NT$ <span className="f_mon_20 c">650</span></div>
                                </div>
                                <button className="btn-border order_list_bottom" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseThree">
                                    商品詳細
                                </button>
                                </div>
                            </div>
                            <div className="order_list_card">
                                <div className="order_list">
                                <div className="order_list_img_bg">
                                    <img className="user_img_moana" src="/img/Member/product/product3.png" alt="" />
                                </div>
                                <div className="order_list_info">
                                    <div className="order_list_id order_list_tc f_tc_22">訂單編號 <span className="f_mon_22">497784297</span></div>
                                    <div className="order_list_date f_dm_20">2021-07-03</div>
                                    <div className="order_list_detail">
                                    <div className="order_list_sub_total f_tc_22">訂單總金額 NT$<span className="f_mon_22 c">390</span></div>
                                    <button className="btn-border" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
                                        商品詳細
                                    </button>
                                    </div>
                                </div>
                                </div>
                                <div id="collapseThree" className="order_list_items collapse show">
                                <div className="card-body">
                                    <div className="order_list_item">
                                    <div className="order_list_img_sm">
                                        <img className="user_img_moana" src="/img/Member/product/product3.png" alt="" />
                                    </div>
                                    <div className="h6-tc">月亮褲</div>
                                    <div className="sub_count h6-tc">1</div>
                                    <div className="sub_total h6-tc">$ 390</div>
                                    </div>
                                </div>
                    
                                <div className="order_items_price card-body">
                                    <div className="order_list_pd_price h6-tc">運費總金額: <span className="f_mon_20">NT 390</span></div>
                                    <div className="order_list_delivery_price h6-tc">運費總金額: <span className="f_mon_20">NT 60</span></div>
                                    <di className="pay h6-tc">付款方式: <span className="f_mon_20 c">貨到付款</span></di>
                                    <div className="total f_tc_22">訂單總金額 NT$ <span className="f_mon_20 c">450</span></div>
                                </div>
                                <button className="btn-border order_list_bottom" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
                                    商品詳細
                                </button>
                                </div>
                            </div>
                            </div>
                            <nav className="luna-pagination">
                                <ul className="">
                                    <li>
                                        <Link to="#">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <title>chevron-thin-left</title>
                                            <path d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="f_mon_20" to="#">prev</Link>
                                    </li>
                                    <li>
                                    <Link className="f_mon_20" to="#">1</Link>
                                    </li>
                                    <li>
                                    <Link className="f_mon_20" to="#">2</Link>
                                    </li>
                                    <li>
                                    <Link className="f_mon_20" to="#">3</Link>
                                    </li>
                                    <li>
                                        <Link className="f_mon_20" to="#">next</Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <title>chevron-thin-right</title>
                                            <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default withRouter(OrderList)