import React ,{ useState } from 'react'
import {Link} from 'react-router-dom'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'



export const CalendarChild = (props) => {
    const{cartQty, bmQty}=props
    const [likeList, setLikeList] = useState([])
    return (
        
        <div>
        <LunarPhaseNavbar cartQty={cartQty} bmQty={bmQty}/>
        <div class="container">
            <div class="row">
                <div className="RecordArea">
                <h2>有出現以下症狀嗎？</h2>
                    <div>
                        <input
                        type="checkbox"
                        value="食慾改變"
                        onChange={(e) => {
                          const value = e.target.value
                          // 陣列沒有包含->加入
                          // 加return中斷以下的程式碼
                          if (!likeList.includes(value)) {
                            return setLikeList([...likeList, value])
                          }
                          // 陣列有包含->移出
                          if (likeList.includes(value)) {
                            const newLikeList = likeList.filter(
                              (v) => v !== value
                            )
                            setLikeList(newLikeList)
                          }
                        }}
                        checked={likeList.includes('食慾改變')}
                              />
                        <label>食慾改變</label>
                    </div>
                    <div>
                        <input
                        type="checkbox"
                        value="胸部脹痛"
                        onChange={(e) => {
                          const value = e.target.value
                          if (!likeList.includes(value)) {
                            return setLikeList([...likeList, value])
                          }
                          if (likeList.includes(value)) {
                            const newLikeList = likeList.filter(
                              (v) => v !== value
                            )
                            setLikeList(newLikeList)
                          }
                        }}
                        checked={likeList.includes('胸部脹痛')}
                              />
                        <label>胸部脹痛</label>
                    </div>
                    
                    
                    <div>
                        <input
                        type="checkbox"
                        value="情緒變化"
                        onChange={(e) => {
                          const value = e.target.value
                          // 陣列沒有包含->加入
                          // 加return中斷以下的程式碼
                          if (!likeList.includes(value)) {
                            return setLikeList([...likeList, value])
                          }
                          // 陣列有包含->移出
                          if (likeList.includes(value)) {
                            const newLikeList = likeList.filter(
                              (v) => v !== value
                            )
                            setLikeList(newLikeList)
                          }
                        }}
                        checked={likeList.includes('情緒變化')}
                              />
                        <label>情緒變化</label>
                    </div>
                    <div>
                        <input
                        type="checkbox"
                        value="睡眠變化"
                        onChange={(e) => {
                          const value = e.target.value
                          // 陣列沒有包含->加入
                          // 加return中斷以下的程式碼
                          if (!likeList.includes(value)) {
                            return setLikeList([...likeList, value])
                          }
                          // 陣列有包含->移出
                          if (likeList.includes(value)) {
                            const newLikeList = likeList.filter(
                              (v) => v !== value
                            )
                            setLikeList(newLikeList)
                          }
                        }}
                        checked={likeList.includes('睡眠變化')}
                              />
                        <label>睡眠變化</label>
                    </div>
                    <div>
                        <div>
                            <input
                            type="checkbox"
                            value="腹部痙攣"
                            onChange={(e) => {
                              const value = e.target.value
                              if (!likeList.includes(value)) {
                                return setLikeList([...likeList, value])
                              }
                              if (likeList.includes(value)) {
                                const newLikeList = likeList.filter(
                                  (v) => v !== value
                                )
                                setLikeList(newLikeList)
                              }
                            }}
                            checked={likeList.includes('腹部痙攣')}
                                  />
                            <label>腹部痙攣</label>
                        </div>
                        <div>
                            <input
                            type="checkbox"
                            value="腹部脹氣"
                            onChange={(e) => {
                              const value = e.target.value
                              // 陣列沒有包含->加入
                              // 加return中斷以下的程式碼
                              if (!likeList.includes(value)) {
                                return setLikeList([...likeList, value])
                              }
                              // 陣列有包含->移出
                              if (likeList.includes(value)) {
                                const newLikeList = likeList.filter(
                                  (v) => v !== value
                                )
                                setLikeList(newLikeList)
                              }
                            }}
                            checked={likeList.includes('腹部脹氣')}
                                  />
                            <label>腹部脹氣</label>
                        </div>
                      {/* <button className="btn-soft-green">下一步</button> */}
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
        </div>
    )

}
export default CalendarChild