// import React from 'react'
import React, { useEffect, useState } from 'react'

function NavBookmark(props) {
  //   const { localBookmarkNum } = props

  const [toShow, setToShow] = useState('0')

  // 尚未成功仍須努力
  function checkLocalStorage() {
    const localBookmark = JSON.parse(localStorage.getItem('bookmark'))
    const localBookmarkNum = localBookmark.length
    console.log(localBookmark.length)
    if (!localBookmark) {
      setToShow(localBookmarkNum)
    } else {
      setToShow('0')
    }
  }

  //   function renderDisplay() {
  //     const display = (
  //       <>
  //         <p className="small mx-0 mb-1">({localBookmarkNum})</p>
  //       </>
  //     )
  //   }

  useEffect(() => {
    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to the console.
      // console.log(localBookmarkNum)
      checkLocalStorage()
    })
  }, [])

  return (
    <>
      <p className="small mx-0 mb-1">({toShow})</p>
      {/* <p className="small mx-0 mb-1">(0)</p> */}
      {/* <p className="small mx-0 mb-1">(0)</p> */}
    </>
  )
}

export default NavBookmark
