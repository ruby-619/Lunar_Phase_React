import React from 'react'

function BtnMonth(props) {
  const {
    clickMon,
    clickName,
    orderMonth,
    btnDropdown,
    btnHalfYear,
    btnYear,
  } = props
  return (
    <>
      <div className="kit-shopping-list-btn">
        {/* <!-- 按鈕-下拉 --> */}
        <div className="dropdown btn-margin">
          <button
            className={
              'dropdown-toggle btn-border-s ' +
              (clickMon < 6 ? 'btn-border-s-click' : '')
            }
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {clickName}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {btnDropdown.arr.map((m) => (
              <a
                className="dropdown-item kit-dropdown-text-center"
                href="javascript:;"
                onClick={() => {
                  orderMonth(m.month, m.name)
                }}
              >
                {m.name}
              </a>
            ))}
          </div>
        </div>
        <button
          className={
            'btn-border-s2 ' + (clickMon == 6 ? 'btn-border-s-click' : '')
          }
          onClick={() => {
            orderMonth(btnHalfYear.month)
          }}
        >
          半年份
        </button>
        <button
          className={
            'btn-border-s2 ' + (clickMon > 6 ? 'btn-border-s-click' : '')
          }
          onClick={() => {
            orderMonth(btnYear.month)
          }}
        >
          一年份
        </button>
      </div>
    </>
  )
}

export default BtnMonth
