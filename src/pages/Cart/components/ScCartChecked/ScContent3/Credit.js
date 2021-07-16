import React from 'react'
import Cards from 'react-credit-cards'

export default class Credit extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  }
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div id="PaymentForm">
        <div className="pb-2 mb-3 mt-5 titleDivider">
          <div className="scTitle col-5">信用卡資料</div>
        </div>
        <div className="d-flex">
          <div className="col-6 d-flex align-content-center mt-5">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </div>
          <div className="col-6 d-flex flex-column">
            {/* <div className="form-group"> */}
              <label className="sc-inputLabel">信用卡號碼：</label>
              <input
                type="text"
                name="number"
                value={this.props.inputs.number}
                className={`scInput w-100 form-control ${this.props.handleInvalid('number')}`}
                placeholder="卡號"
                onChange={(e)=>{this.handleInputChange(e); this.props.onChangeForField(e)}}
                onFocus={this.handleInputFocus}
                maxLength="16"
                required
              />
              <div className="invalid-feedback">要記得填信用卡喔</div>
            {/* </div> */}
            {/* <div className="form-group"> */}
              <label className="sc-inputLabel mt-3">持卡人姓名：</label>
              <input
                  className={`scInput w-100 form-control ${this.props.handleInvalid('name')}`}
                  type="text"
                  name="name"
                  value={this.props.inputs.name}
                  placeholder="姓名"
                  onChange={(e)=>{this.handleInputChange(e); this.props.onChangeForField(e)}}
                  onFocus={this.handleInputFocus}
                  required
              />
              <div className="invalid-feedback">要記得填姓名喔</div>
            {/* </div> */}
            <div className="d-flex">
                <div className="d-flex flex-column mr-1">
                <label className="sc-inputLabel mt-3">有效日期：</label>
                <input
                    className={`scInput w-100 form-control ${this.props.handleInvalid('expiry')}`}
                    type="text"
                    name="expiry"
                    value={this.props.inputs.expiry}
                    onChange={(e)=>{this.handleInputChange(e); this.props.onChangeForField(e)}}
                    onFocus={this.handleInputFocus}
                    maxLength="5"
                    placeholder="MM/YY"
                    required
                />
                <div className="invalid-feedback">卡片上面的有效日期</div>
                </div>
                <div className="d-flex flex-column ml-1">
                <label className="sc-inputLabel mt-3">安全碼：</label>
                <input 
                  className={`scInput w-100 form-control ${this.props.handleInvalid('cvc')}`} 
                  type="text" 
                  name="cvc"
                  value={this.props.inputs.cvc}
                  onChange={(e)=>{this.handleInputChange(e); this.props.onChangeForField(e)}}
                  onFocus={this.handleInputFocus}
                  maxLength="3"
                  placeholder="卡片背後三碼"
                  required
                />
                <div className="invalid-feedback">卡片背後三碼</div>
                </div>
            </div>
          

          </div>
        </div>
      </div>
    )
  }
}
