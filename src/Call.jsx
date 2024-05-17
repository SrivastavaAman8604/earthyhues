import React from 'react'

const Call = () => {
  return (
    <div 
    style={{
    //     position: 'fixed',
    //     bottom: '5%',
    //     right: '5%',
        zIndex: 99999,
    //     background: 'black',
    float: 'right',
        display: 'flex'}}
        >
      <div className="main-header__phone-icon">
                <span className="icon-phone-1" />
              </div> 
              <div className="main-header__phone-text">
                <p className="main-header__phone-title">Call Anytime</p>
                <h4 className="main-header__phone-number text-white">
                  <a href="tel: +918904278007"> +91 8904278007</a>
                </h4>
              </div>
    </div>
  )
}

export default Call
