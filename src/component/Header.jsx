import React from 'react'

function Header() {
  return (
    <header className="main-header main-header--home-three sticky-header sticky-header--normal">
      <div className="container">
        <div className="main-header__inner">
          <div className="main-header__left">
            <div className="main-header__logo">
              <a href="index.html">
                <img
                  src="assets/earthyhues-image/logo.png"
                  alt="Trevlo HTML"
                  width={146}
                />
              </a>
            </div>
            {/* /.main-header__logo */}
            <div className="main-header__phone">
              <div className="main-header__phone-icon">
                <span className="icon-phone-1" />
              </div>
              <div className="main-header__phone-text">
                <p className="main-header__phone-title">Call Anytime</p>
                <h4 className="main-header__phone-number">
                  <a href="tel: +91 8904278007"> +91 8904278007</a>
                </h4>
              </div>
            </div>
            {/* /.main-header__phone */}
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className="dropdown">
                  <a href="/">Destinations</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/">Bhutan</a>
                    </li>
                    <li>
                      <a href="/">Botswana</a>
                    </li>
                    <li>
                      <a href="/">Egypt</a>
                    </li>
                    <li>
                      <a href="/">Kenya</a>
                    </li>
                    <li>
                      <a href="/">Mauritius</a>
                    </li>
                    <li>
                      <a href="/">Meghalaya</a>
                    </li>
                    <li>
                      <a href="/">Rajasthan</a>
                    </li>
                    <li>
                      <a href="/">Rwanda</a>
                    </li>
                    <li>
                      <a href="/">Seychelles</a>
                    </li>
                    <li>
                      <a href="/">Sikkim</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="/">Passion</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/">Wildlife</a>
                    </li>
                    <li>
                      <a href="/">Big Cats</a>
                    </li>
                    <li>
                      <a href="/">Sun, Sand and Dunes</a>
                    </li>
                    <li>
                      <a href="/">Beach Chill</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Packages</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
                <li>
                  <a href="/">Conscious Travel</a>
                </li>
                <li>
                  <a href="/">Travel Blogs</a>
                </li>
              </ul>
            </nav>
            {/* /.main-header__nav */}
          </div>
          {/* /.main-header__left */}
          <div className="main-header__right">
            <div className="mobile-nav__btn mobile-nav__toggler">
              <span />
              <span />
              <span />
            </div>
            {/* /.mobile-nav__toggler */}
            <div className="main-header__right-right">
              <div className="main-header__divider" />
              <ul className="main-header__search-user">
                <li className="main-header__search-user-item">
                  <a href="/" className="main-header__search search-toggler">
                    <span className="icon-search" />
                  </a>
                </li>
                {/*<li class="main-header__search-user-item">
                        <a href="/" class="main-header__user">
                        <span class="icon-user-1"></span>
                        </a>
                     </li>*/}
              </ul>
              {/* /.main-header__search-user */}
            </div>
            {/* /.main-header__right-right */}
          </div>
          {/* /.main-header__right */}
        </div>
        {/* /.main-header__inner */}
      </div>
      {/* /.container-fluid */}
    </header>
  )
}

export default Header
