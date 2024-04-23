import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Header() {
  // const [data, setData] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [passions, setPassions] = useState([]);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
},[]);

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.main-header.main-header--home-three');
            const scrollTop = window.scrollY;
            scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };

  useEffect(() => {
    axios.get('https://www.earthyhues.com/home-menu')
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          // setData(response.data);
          if (Array.isArray(response.data[0].destination)) {
            setDestinations(response.data[0].destination);
          } else {
            console.error("Invalid destination data format");
          }
          if (Array.isArray(response.data[0].passion)) {
            setPassions(response.data[0].passion);
          } else {
            console.error("Invalid passion data format");
          }
        } else {
          console.error("Invalid response format or insufficient data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <header className='main-header main-header--home-three sticky-header sticky-header--normal'>
        <div className="container">
      {/* <div className={`${showHeaderInner ? 'main-header__inner' : ''}`}> */}
      <div className='main-header__inner'>
          <div className="main-header__left">
            <div className="main-header__logo">
              <a href="/">
                <img
                  src="../assets/earthyhues-image/logo.png"
                  alt="Trevlo HTML"
                  width={146}
                />
              </a>
            </div>
            {/* /.main-header__logo */}
{/*             <div className="main-header__phone">
              <div className="main-header__phone-icon">
                <span className="icon-phone-1" />
              </div>
              <div className="main-header__phone-text">
                <p className="main-header__phone-title">Call Anytime</p>
                <h4 className="main-header__phone-number">
                  <a href="tel: +91 8904278007"> +91 8904278007</a>
                </h4>
              </div>
            </div> */}
            {/* /.main-header__phone */}
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className="dropdown">
                  <a href="/">Destinations</a>
                  <ul className="sub-menu des">
                    {destinations.map((destination) => (
                      <li key={destination.destination_id}>
                        <Link to={`/destinations/${destination.destination_url}`}>{destination.destination_name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="/">Passion</a>
                  <ul className="sub-menu">
                    {passions.map((item) => (
                      <li key={item.passion_id}>

                        
                        <Link to={`/passion/${item.passion_url}`}>{item.passion_name}</Link>

                      </li>
                    ))}
                  </ul>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/packages">Packages</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/testimonial">Testimonials</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/conscious-travel">Conscious Travel</Link>
                </li>
                <li onClick={scrollToTop}>
                  <Link to="/blog">Travel Blogs</Link>
                </li>
              </ul>
            </nav>
            {/* /.main-header__nav */}
          </div>
          {/* /.main-header__left */}

          <div className="main-header__right">
            <div className=''>
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
            {/* /.mobile-nav__toggler */}
            {/* <div className="main-header__right-right">
              <div className="main-header__divider" />
              <ul className="main-header__search-user">
                <li className="main-header__search-user-item">
                  <a href="/" className="main-header__search search-toggler">
                    <span className="icon-search" />
                  </a>
                </li>
              </ul>
            </div> */}
           
            {/* /.main-header__right-right */}
          {/* /.main-header__right */}
        </div>
        {/* /.main-header__inner */}
      </div>
      {/* /.container-fluid */}
    </header>
  )
}

export default Header;
