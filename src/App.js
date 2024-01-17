// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Article from './component/Article';
import Testmonial from './component/Testimonial';
import About from './component/About';
import Header from './component/Header';
import Banner from './component/Banner';

function App() {
  // const[data,setData] = useState([]);
  return (
    <>
  {/* <div className="custom-cursor__cursor" />
  <div className="custom-cursor__cursor-two" /> */}
  
  <div className="page-wrapper">
    <Header/>
    {/* /.main-header */}
    {/* main-slider-start */}
    <Banner/>
    {/* main-slider-end */}
    <section className="tour-type-two home_page">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="tour-type-two__box">
              <div className="tour-type-two__box__flipper">
                <div className="tour-type-two__box__front">
                  <div className="tour-type-two__box__front__image">
                    <img
                      src="assets/earthyhues-image/270X216-1.jpg"
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__front__content">
                    <div className="tour-type-two__box__front__icon">
                      <span className="icon-tent-Fill" />
                    </div>
                    <h5 className="tour-type-two__box__front__title">
                      Tent Camping
                    </h5>
                    <p className="tour-type-two__box__front__text">
                      There are many
                      <br /> variations
                    </p>
                  </div>
                </div>
                <div className="tour-type-two__box__back">
                  <div className="tour-type-two__box__back__image">
                    <img
                      src="assets/earthyhues-image/270X326-1.jpg"
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__back__content">
                    <div className="tour-type-two__box__back__icon">
                      <span className="icon-tent-Fill" />
                    </div>
                    <h5 className="tour-type-two__box__back__title">
                      Tent Camping
                    </h5>
                    <p className="tour-type-two__box__back__text">
                      There are many
                      <br /> variations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay="150ms"
          >
            <div className="tour-type-two__box">
              <div className="tour-type-two__box__flipper">
                <div className="tour-type-two__box__front">
                  <div className="tour-type-two__box__front__image">
                    <img
                      src="assets/earthyhues-image/270X216-2.jpg"
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__front__content">
                    <div className="tour-type-two__box__front__icon">
                      <span className="icon-windsurfing-2" />
                    </div>
                    <h5 className="tour-type-two__box__front__title">
                      Windsurfing
                    </h5>
                    <p className="tour-type-two__box__front__text">
                      There are many
                      <br /> variations
                    </p>
                  </div>
                </div>
                <div className="tour-type-two__box__back">
                  <div className="tour-type-two__box__back__image">
                    <img
                      src="assets/earthyhues-image/270X326-2.jpg"
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__back__content">
                    <div className="tour-type-two__box__back__icon">
                      <span className="icon-windsurfing-2" />
                    </div>
                    <h5 className="tour-type-two__box__back__title">
                      Windsurfing
                    </h5>
                    <p className="tour-type-two__box__back__text">
                      There are many
                      <br /> variations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="tour-type-two__box">
              <div className="tour-type-two__box__flipper">
                <div className="tour-type-two__box__front">
                  <div className="tour-type-two__box__front__image">
                    <img
                      src="assets/earthyhues-image/270X216-1.jpg"
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__front__content">
                    <div className="tour-type-two__box__front__icon">
                      <span className="icon-paragliding-5" />
                    </div>
                    <h5 className="tour-type-two__box__front__title">
                      Paragliding Tours
                    </h5>
                    <p className="tour-type-two__box__front__text">
                      There are many
                      <br /> variations
                    </p>
                  </div>
                </div>
                <div className="tour-type-two__box__back">
                  <div className="tour-type-two__box__back__image">
                    <img
                      src="assets/earthyhues-image/270X326-1.jpg"
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__back__content">
                    <div className="tour-type-two__box__back__icon">
                      <span className="icon-paragliding-5" />
                    </div>
                    <h5 className="tour-type-two__box__back__title">
                      Paragliding Tours
                    </h5>
                    <p className="tour-type-two__box__back__text">
                      There are many
                      <br /> variations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay="250ms"
          >
            <div className="tour-type-two__box">
              <div className="tour-type-two__box__flipper">
                <div className="tour-type-two__box__front">
                  <div className="tour-type-two__box__front__image">
                    <img
                      src="assets/earthyhues-image/270X216-2.jpg"
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__front__content">
                    <div className="tour-type-two__box__front__icon">
                      <span className="icon-hiking-4" />
                    </div>
                    <h5 className="tour-type-two__box__front__title">
                      Adventure
                    </h5>
                    <p className="tour-type-two__box__front__text">
                      There are many
                      <br /> variations
                    </p>
                  </div>
                </div>
                <div className="tour-type-two__box__back">
                  <div className="tour-type-two__box__back__image">
                    <img
                      src="assets/earthyhues-image/270X326-2.jpg"
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__back__content">
                    <div className="tour-type-two__box__back__icon">
                      <span className="icon-hiking-4" />
                    </div>
                    <h5 className="tour-type-two__box__back__title">
                      Adventure
                    </h5>
                    <p className="tour-type-two__box__back__text">
                      There are many
                      <br /> variations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
    </section>
    {/* /.tour-type */}
  
  {/* About Start */}
    <About/>
  {/* About End */}
  {/* Tour Listing two Start */}
  <section className="tour-listing-two tour-listing-two--home-three">
    <div className="container">
      <div className="sec-title text-center">
        <p className="sec-title__tagline">Featured tours</p>
        {/* /.sec-title__tagline */}
        <h2 className="sec-title__title">Most Favorite Tour Place</h2>
        {/* /.sec-title__title */}
      </div>
      {/* /.sec-title */}
      {/* /.sec-title */}
      <div
        className="tour-listing-one__carousel trevlo-owl__carousel trevlo-owl__carousel--basic-nav trevlo-owl__carousel--with-shadow owl-theme owl-carousel"
        data-owl-options='{
            "items": 4,
            "margin": 30,
            "smartSpeed": 700,
            "loop":false,
            "autoplay": 6000,
            "nav":false,
            "dots":true,
            "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
            "responsive":{
            "0":{
            "items": 1
            },
            "500":{
            "items": 2
            },
            "1200":{
            "items": 3
            },
            "1400":{
            "items": 4
            }
            }
            }'
      >
        <div className="item">
          <div className="tour-listing-two__card tour-listing__card">
            <a href="/" className="tour-listing__card-image-box">
              <img
                src="assets/earthyhues-image/350X474-1.jpg"
                alt="assets/images/tours/tour-4-1.jpg"
                className="tour-listing__card-image"
              />
              <div className="tour-listing__card-btn-group @@extraClassName">
                <div className="tour-listing__card-discount @@innerExtraClassName">
                  10% Off
                </div>
                <div className="tour-listing__card-featured">Featured</div>
              </div>
              {/* /.tour-listing__card-btn-group */}
              <div className="tour-listing__card-image-overlay" />
              {/* /.tour-listing__card-image-overlay */}
            </a>
            {/* /.tour-listing__card-image-box */}
            <a href="/" className="tour-listing__card-wishlist">
              <span className="icon-heart" />
            </a>
            <div className="tour-listing-two__card-show-content">
              <div className="tour-listing-two__card-show-title-box">
                <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                  <a href="/">Turkey Balloons Flying</a>
                </h3>
                <div className="tour-listing__card-camera-group">
                  <a
                    href="/"
                    className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn trevlo-image-popup"
                    data-gallery-options='{
                              "items": [
                              {
                              "src": "assets/earthyhues-image/mountain-1148898.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/7.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/animal-4556647_1280.jpg"
                              }
                              ],
                              "gallery": {
                              "enabled": true
                              },
                              "type": "image"
                              }'
                  >
                    <span className="icon-photo-camera-1" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn video-popup"
                  >
                    <span className="icon-video-camera-1-1" />
                  </a>
                </div>
                {/* /.tour-listing__card-camera-group */}
              </div>
              {/* /.tour-listing-two__card-show-title-box */}
              <div className="tour-listing-two__card-show-divider" />
              {/* /.tour-listing-two__card-show-divider */}
              <div className="tour-listing__card-bottom">
                <div className="tour-listing__card-bottom-left">
                  <div className="tour-listing__card-day">
                    <span className="icon-clock-1" />
                    <p className="tour-listing-two__card-show-day-text tour-listing__card-day-text text-small">
                      3 Day
                    </p>
                  </div>
                  {/* /.tour-listing__card-day */}
                  <div className="tour-listing__card-people">
                    <span className="icon-Duration" />
                    <p className="tour-listing-two__card-show-people-text tour-listing__card-people-text text-small">
                      12+
                    </p>
                  </div>
                  {/* /.tour-listing__card-people */}
                </div>
                {/* /.tour-listing__card-bottom-left */}
                <div className="tour-listing__card-bottom-right">
                  <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                    Rs. 160
                  </h4>
                </div>
                {/* /.tour-listing__card-bottom-right */}
              </div>
              {/* /.tour-listing__card-bottom */}
            </div>
            {/* /.tour-listing__card-show-content */}
            <div className="tour-listing-two__card-hover-content tour-listing__card-content">
              <h3 className="tour-listing__card-title">
                <a href="/">Turkey Balloons Flying</a>
              </h3>
              <p className="tour-listing__card-text text-small">
                There are many variations of passages of Lorem Ipsum agtilable
              </p>
              <div className="tour-listing-two__card-info">
                <div>
                  <div className="tour-listing__card-review-box">
                    <span className="icon-star" />
                    <p className="tour-listing__card-review-text text-small">
                      4.5 (30 Reviews)
                    </p>
                  </div>
                  {/* /.tour-listing__card-review-box */}
                  <div className="tour-listing__card-location-box">
                    <span className="icon-location-1" />
                    <p className="tour-listing__card-location-text text-small">
                      Main Street, Brooklyn, NY
                    </p>
                  </div>
                  {/* /.tour-listing__card-location-box */}
                </div>
                <div className="tour-listing__card-camera-group">
                  <a
                    href="/"
                    className="tour-listing__card-camera-btn trevlo-image-popup"
                    data-gallery-options='{
                              "items": [
                              {
                              "src": "assets/earthyhues-image/mountain-1148898.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/7.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/animal-4556647_1280.jpg"
                              }
                              ],
                              "gallery": {
                              "enabled": true
                              },
                              "type": "image"
                              }'
                  >
                    <span className="icon-photo-camera-1" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="tour-listing__card-camera-btn video-popup"
                  >
                    <span className="icon-video-camera-1-1" />
                  </a>
                </div>
                {/* /.tour-listing__card-camera-group */}
              </div>
              {/* /.tour-listing-two__card-info */}
              <div className="tour-listing__card-divider" />
              {/* /.tour-listing__card-divider */}
              <div className="tour-listing__card-bottom">
                <div className="tour-listing__card-bottom-left">
                  <div className="tour-listing__card-day">
                    <span className="icon-clock-1" />
                    <p className="tour-listing__card-day-text text-small">
                      3 Day
                    </p>
                  </div>
                  {/* /.tour-listing__card-day */}
                  <div className="tour-listing__card-people">
                    <span className="icon-Duration" />
                    <p className="tour-listing__card-people-text text-small">
                      12+
                    </p>
                  </div>
                  {/* /.tour-listing__card-people */}
                </div>
                {/* /.tour-listing__card-bottom-left */}
                <div className="tour-listing__card-bottom-right">
                  <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                    Rs. 160
                  </h4>
                </div>
                {/* /.tour-listing__card-bottom-right */}
              </div>
              {/* /.tour-listing__card-bottom */}
            </div>
            {/* /.tour-listing__card-content */}
          </div>
          {/* /.tour-listing__card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div className="tour-listing-two__card tour-listing__card">
            <a href="/" className="tour-listing__card-image-box">
              <img
                src="assets/earthyhues-image/350X474-2.jpg"
                alt="assets/images/tours/tour-4-2.jpg"
                className="tour-listing__card-image"
              />
              <div className="tour-listing__card-btn-group @@extraClassName">
                <div className="tour-listing__card-discount tour-listing__card-discount-hide">
                  10% Off
                </div>
                <div className="tour-listing__card-featured">Featured</div>
              </div>
              {/* /.tour-listing__card-btn-group */}
              <div className="tour-listing__card-image-overlay" />
              {/* /.tour-listing__card-image-overlay */}
            </a>
            {/* /.tour-listing__card-image-box */}
            <a href="/" className="tour-listing__card-wishlist"
            >
              <span className="icon-heart" />
            </a>
            <div className="tour-listing-two__card-show-content">
              <div className="tour-listing-two__card-show-title-box">
                <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                  <a href="/">Travel by Boat &amp; Enjoy</a>
                </h3>
                <div className="tour-listing__card-camera-group">
                  <a
                    href="/"
                    className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn trevlo-image-popup"
                    data-gallery-options='{
                              "items": [
                              {
                              "src": "assets/earthyhues-image/mountain-1148898.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/7.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/animal-4556647_1280.jpg"
                              }
                              ],
                              "gallery": {
                              "enabled": true
                              },
                              "type": "image"
                              }'
                  >
                    <span className="icon-photo-camera-1" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn video-popup"
                  >
                    <span className="icon-video-camera-1-1" />
                  </a>
                </div>
                {/* /.tour-listing__card-camera-group */}
              </div>
              {/* /.tour-listing-two__card-show-title-box */}
              <div className="tour-listing-two__card-show-divider" />
              {/* /.tour-listing-two__card-show-divider */}
              <div className="tour-listing__card-bottom">
                <div className="tour-listing__card-bottom-left">
                  <div className="tour-listing__card-day">
                    <span className="icon-clock-1" />
                    <p className="tour-listing-two__card-show-day-text tour-listing__card-day-text text-small">
                      3 Day
                    </p>
                  </div>
                  {/* /.tour-listing__card-day */}
                  <div className="tour-listing__card-people">
                    <span className="icon-Duration" />
                    <p className="tour-listing-two__card-show-people-text tour-listing__card-people-text text-small">
                      12+
                    </p>
                  </div>
                  {/* /.tour-listing__card-people */}
                </div>
                {/* /.tour-listing__card-bottom-left */}
                <div className="tour-listing__card-bottom-right">
                  <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                    Rs. 110
                  </h4>
                </div>
                {/* /.tour-listing__card-bottom-right */}
              </div>
              {/* /.tour-listing__card-bottom */}
            </div>
            {/* /.tour-listing__card-show-content */}
            <div className="tour-listing-two__card-hover-content tour-listing__card-content">
              <h3 className="tour-listing__card-title">
                <a href="/">Travel by Boat &amp; Enjoy</a>
              </h3>
              <p className="tour-listing__card-text text-small">
                There are many variations of passages of Lorem Ipsum agtilable
              </p>
              <div className="tour-listing-two__card-info">
                <div>
                  <div className="tour-listing__card-review-box">
                    <span className="icon-star" />
                    <p className="tour-listing__card-review-text text-small">
                      4.5 (30 Reviews)
                    </p>
                  </div>
                  {/* /.tour-listing__card-review-box */}
                  <div className="tour-listing__card-location-box">
                    <span className="icon-location-1" />
                    <p className="tour-listing__card-location-text text-small">
                      Main Street, Brooklyn, NY
                    </p>
                  </div>
                  {/* /.tour-listing__card-location-box */}
                </div>
                <div className="tour-listing__card-camera-group">
                  <a
                    href="/"
                    className="tour-listing__card-camera-btn trevlo-image-popup"
                    data-gallery-options='{
                              "items": [
                              {
                              "src": "assets/earthyhues-image/mountain-1148898.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/7.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/animal-4556647_1280.jpg"
                              }
                              ],
                              "gallery": {
                              "enabled": true
                              },
                              "type": "image"
                              }'
                  >
                    <span className="icon-photo-camera-1" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="tour-listing__card-camera-btn video-popup"
                  >
                    <span className="icon-video-camera-1-1" />
                  </a>
                </div>
                {/* /.tour-listing__card-camera-group */}
              </div>
              {/* /.tour-listing-two__card-info */}
              <div className="tour-listing__card-divider" />
              {/* /.tour-listing__card-divider */}
              <div className="tour-listing__card-bottom">
                <div className="tour-listing__card-bottom-left">
                  <div className="tour-listing__card-day">
                    <span className="icon-clock-1" />
                    <p className="tour-listing__card-day-text text-small">
                      3 Day
                    </p>
                  </div>
                  {/* /.tour-listing__card-day */}
                  <div className="tour-listing__card-people">
                    <span className="icon-Duration" />
                    <p className="tour-listing__card-people-text text-small">
                      12+
                    </p>
                  </div>
                  {/* /.tour-listing__card-people */}
                </div>
                {/* /.tour-listing__card-bottom-left */}
                <div className="tour-listing__card-bottom-right">
                  <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                    Rs. 110
                  </h4>
                </div>
                {/* /.tour-listing__card-bottom-right */}
              </div>
              {/* /.tour-listing__card-bottom */}
            </div>
            {/* /.tour-listing__card-content */}
          </div>
          {/* /.tour-listing__card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div className="tour-listing-two__card tour-listing__card">
            <a href="/" className="tour-listing__card-image-box">
              <img
                src="assets/earthyhues-image/350X474-1.jpg"
                alt="assets/images/tours/tour-4-3.jpg"
                className="tour-listing__card-image"
              />
              <div className="tour-listing__card-btn-group tour-listing__card-btn-group-hide">
                <div className="tour-listing__card-discount @@innerExtraClassName">
                  10% Off
                </div>
                <div className="tour-listing__card-featured">Featured</div>
              </div>
              {/* /.tour-listing__card-btn-group */}
              <div className="tour-listing__card-image-overlay" />
              {/* /.tour-listing__card-image-overlay */}
            </a>
            {/* /.tour-listing__card-image-box */}
            <a
              href="/"
              className="tour-listing__card-wishlist"
            >
              <span className="icon-heart" />
            </a>
            <div className="tour-listing-two__card-show-content">
              <div className="tour-listing-two__card-show-title-box">
                <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                  <a href="/">Adventure in Best Mountain</a>
                </h3>
                <div className="tour-listing__card-camera-group">
                  <a
                    href="/"
                    className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn trevlo-image-popup"
                    data-gallery-options='{
                              "items": [
                              {
                              "src": "assets/earthyhues-image/mountain-1148898.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/7.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/animal-4556647_1280.jpg"
                              }
                              ],
                              "gallery": {
                              "enabled": true
                              },
                              "type": "image"
                              }'
                  >
                    <span className="icon-photo-camera-1" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn video-popup"
                  >
                    <span className="icon-video-camera-1-1" />
                  </a>
                </div>
                {/* /.tour-listing__card-camera-group */}
              </div>
              {/* /.tour-listing-two__card-show-title-box */}
              <div className="tour-listing-two__card-show-divider" />
              {/* /.tour-listing-two__card-show-divider */}
              <div className="tour-listing__card-bottom">
                <div className="tour-listing__card-bottom-left">
                  <div className="tour-listing__card-day">
                    <span className="icon-clock-1" />
                    <p className="tour-listing-two__card-show-day-text tour-listing__card-day-text text-small">
                      3 Day
                    </p>
                  </div>
                  {/* /.tour-listing__card-day */}
                  <div className="tour-listing__card-people">
                    <span className="icon-Duration" />
                    <p className="tour-listing-two__card-show-people-text tour-listing__card-people-text text-small">
                      12+
                    </p>
                  </div>
                  {/* /.tour-listing__card-people */}
                </div>
                {/* /.tour-listing__card-bottom-left */}
                <div className="tour-listing__card-bottom-right">
                  <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                    Rs. 130
                  </h4>
                </div>
                {/* /.tour-listing__card-bottom-right */}
              </div>
              {/* /.tour-listing__card-bottom */}
            </div>
            {/* /.tour-listing__card-show-content */}
            <div className="tour-listing-two__card-hover-content tour-listing__card-content">
              <h3 className="tour-listing__card-title">
                <a href="/">Adventure in Best Mountain</a>
              </h3>
              <p className="tour-listing__card-text text-small">
                There are many variations of passages of Lorem Ipsum agtilable
              </p>
              <div className="tour-listing-two__card-info">
                <div>
                  <div className="tour-listing__card-review-box">
                    <span className="icon-star" />
                    <p className="tour-listing__card-review-text text-small">
                      4.5 (30 Reviews)
                    </p>
                  </div>
                  {/* /.tour-listing__card-review-box */}
                  <div className="tour-listing__card-location-box">
                    <span className="icon-location-1" />
                    <p className="tour-listing__card-location-text text-small">
                      Main Street, Brooklyn, NY
                    </p>
                  </div>
                  {/* /.tour-listing__card-location-box */}
                </div>
                <div className="tour-listing__card-camera-group">
                  <a
                    href="/"
                    className="tour-listing__card-camera-btn trevlo-image-popup"
                    data-gallery-options='{
                              "items": [
                              {
                              "src": "assets/earthyhues-image/mountain-1148898.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/7.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/animal-4556647_1280.jpg"
                              }
                              ],
                              "gallery": {
                              "enabled": true
                              },
                              "type": "image"
                              }'
                  >
                    <span className="icon-photo-camera-1" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="tour-listing__card-camera-btn video-popup"
                  >
                    <span className="icon-video-camera-1-1" />
                  </a>
                </div>
                {/* /.tour-listing__card-camera-group */}
              </div>
              {/* /.tour-listing-two__card-info */}
              <div className="tour-listing__card-divider" />
              {/* /.tour-listing__card-divider */}
              <div className="tour-listing__card-bottom">
                <div className="tour-listing__card-bottom-left">
                  <div className="tour-listing__card-day">
                    <span className="icon-clock-1" />
                    <p className="tour-listing__card-day-text text-small">
                      3 Day
                    </p>
                  </div>
                  {/* /.tour-listing__card-day */}
                  <div className="tour-listing__card-people">
                    <span className="icon-Duration" />
                    <p className="tour-listing__card-people-text text-small">
                      12+
                    </p>
                  </div>
                  {/* /.tour-listing__card-people */}
                </div>
                {/* /.tour-listing__card-bottom-left */}
                <div className="tour-listing__card-bottom-right">
                  <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                    Rs. 130
                  </h4>
                </div>
                {/* /.tour-listing__card-bottom-right */}
              </div>
              {/* /.tour-listing__card-bottom */}
            </div>
            {/* /.tour-listing__card-content */}
          </div>
          {/* /.tour-listing__card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div className="tour-listing-two__card tour-listing__card">
            <a href="/" className="tour-listing__card-image-box">
              <img
                src="assets/earthyhues-image/350X474-2.jpg"
                alt="assets/images/tours/tour-4-4.jpg"
                className="tour-listing__card-image"
              />
              <div className="tour-listing__card-btn-group tour-listing__card-btn-group-hide">
                <div className="tour-listing__card-discount @@innerExtraClassName">
                  10% Off
                </div>
                <div className="tour-listing__card-featured">Featured</div>
              </div>
              {/* /.tour-listing__card-btn-group */}
              <div className="tour-listing__card-image-overlay" />
              {/* /.tour-listing__card-image-overlay */}
            </a>
            {/* /.tour-listing__card-image-box */}
            <a
              href="/"
              className="tour-listing__card-wishlist"
            >
              <span className="icon-heart" />
            </a>
            <div className="tour-listing-two__card-show-content">
              <div className="tour-listing-two__card-show-title-box">
                <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                  <a href="/">Windsurfing in the River</a>
                </h3>
                <div className="tour-listing__card-camera-group">
                  <a
                    href="/"
                    className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn trevlo-image-popup"
                    data-gallery-options='{
                              "items": [
                              {
                              "src": "assets/earthyhues-image/mountain-1148898.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/7.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/animal-4556647_1280.jpg"
                              }
                              ],
                              "gallery": {
                              "enabled": true
                              },
                              "type": "image"
                              }'
                  >
                    <span className="icon-photo-camera-1" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="tour-listing-two__card-show-camera-btn tour-listing__card-camera-btn video-popup"
                  >
                    <span className="icon-video-camera-1-1" />
                  </a>
                </div>
                {/* /.tour-listing__card-camera-group */}
              </div>
              {/* /.tour-listing-two__card-show-title-box */}
              <div className="tour-listing-two__card-show-divider" />
              {/* /.tour-listing-two__card-show-divider */}
              <div className="tour-listing__card-bottom">
                <div className="tour-listing__card-bottom-left">
                  <div className="tour-listing__card-day">
                    <span className="icon-clock-1" />
                    <p className="tour-listing-two__card-show-day-text tour-listing__card-day-text text-small">
                      3 Day
                    </p>
                  </div>
                  {/* /.tour-listing__card-day */}
                  <div className="tour-listing__card-people">
                    <span className="icon-Duration" />
                    <p className="tour-listing-two__card-show-people-text tour-listing__card-people-text text-small">
                      12+
                    </p>
                  </div>
                  {/* /.tour-listing__card-people */}
                </div>
                {/* /.tour-listing__card-bottom-left */}
                <div className="tour-listing__card-bottom-right">
                  <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                    Rs. 170
                  </h4>
                </div>
                {/* /.tour-listing__card-bottom-right */}
              </div>
              {/* /.tour-listing__card-bottom */}
            </div>
            {/* /.tour-listing__card-show-content */}
            <div className="tour-listing-two__card-hover-content tour-listing__card-content">
              <h3 className="tour-listing__card-title">
                <a href="/">Windsurfing in the River</a>
              </h3>
              <p className="tour-listing__card-text text-small">
                There are many variations of passages of Lorem Ipsum agtilable
              </p>
              <div className="tour-listing-two__card-info">
                <div>
                  <div className="tour-listing__card-review-box">
                    <span className="icon-star" />
                    <p className="tour-listing__card-review-text text-small">
                      4.5 (30 Reviews)
                    </p>
                  </div>
                  {/* /.tour-listing__card-review-box */}
                  <div className="tour-listing__card-location-box">
                    <span className="icon-location-1" />
                    <p className="tour-listing__card-location-text text-small">
                      Main Street, Brooklyn, NY
                    </p>
                  </div>
                  {/* /.tour-listing__card-location-box */}
                </div>
                <div className="tour-listing__card-camera-group">
                  <a
                    href="/"
                    className="tour-listing__card-camera-btn trevlo-image-popup"
                    data-gallery-options='{
                              "items": [
                              {
                              "src": "assets/earthyhues-image/mountain-1148898.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/7.jpg"
                              },
                              {
                              "src": "assets/earthyhues-image/animal-4556647_1280.jpg"
                              }
                              ],
                              "gallery": {
                              "enabled": true
                              },
                              "type": "image"
                              }'
                  >
                    <span className="icon-photo-camera-1" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="tour-listing__card-camera-btn video-popup"
                  >
                    <span className="icon-video-camera-1-1" />
                  </a>
                </div>
                {/* /.tour-listing__card-camera-group */}
              </div>
              {/* /.tour-listing-two__card-info */}
              <div className="tour-listing__card-divider" />
              {/* /.tour-listing__card-divider */}
              <div className="tour-listing__card-bottom">
                <div className="tour-listing__card-bottom-left">
                  <div className="tour-listing__card-day">
                    <span className="icon-clock-1" />
                    <p className="tour-listing__card-day-text text-small">
                      3 Day
                    </p>
                  </div>
                  {/* /.tour-listing__card-day */}
                  <div className="tour-listing__card-people">
                    <span className="icon-Duration" />
                    <p className="tour-listing__card-people-text text-small">
                      12+
                    </p>
                  </div>
                  {/* /.tour-listing__card-people */}
                </div>
                {/* /.tour-listing__card-bottom-left */}
                <div className="tour-listing__card-bottom-right">
                  <h4 className="tour-listing-two__card-show-price tour-listing__card-price">
                    Rs. 170
                  </h4>
                </div>
                {/* /.tour-listing__card-bottom-right */}
              </div>
              {/* /.tour-listing__card-bottom */}
            </div>
            {/* /.tour-listing__card-content */}
          </div>
          {/* /.tour-listing__card */}
        </div>
        {/* /.item */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  {/* Tour Listing two End */}
  {/* CTA Two Start */}
  <section className="cta-three">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 wow slideInLeft" data-wow-delay="100ms">
          <div className="cta-three__image">
            <img src="assets/images/resources/cta-3-1.jpg" alt="trevlo" />
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="cta-three__content"
            style={{
              backgroundImage: 'url("assets/images/shapes/cta-3-2.png")'
            }}
          >
            <div
              className="cta-three__content__inner wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div
                className="cta-three__content__inner__bg"
                style={{
                  backgroundImage: "url(assets/images/shapes/cta-3-3.png)"
                }}
              />
              <h2 className="cta-three__title">Singapore</h2>
              <h5 className="cta-three__sub-title">
                A Simply Perfect Place to Get Lost
              </h5>
              <a href="/" className="trevlo-btn trevlo-btn--base">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.container */}
  </section>
  {/* CTA Two End */}
  <section className="video-one">
    <div
      className="video-one__bg jarallax"
      data-jarallax=""
      data-speed="0.3"
      data-imgposition="50% -100%"
      style={{
        backgroundImage: "url(assets/images/backgrounds/video-bg-1.jpg)"
      }}
    />
    {/* /.video-one__bg */}
    <div className="container">
      <div className="video-one__content wow fadeInUp" data-wow-delay="100ms">
        <a
          href="https://www.youtube.com/watch?v=h9MbznbxlLc"
          className="video-popup"
        >
          <i className="fa fa-play" />
        </a>
        <h5 className="video-one__sub-title">Are you ready to travel?</h5>
        {/* /.video-one__sub-title */}
        <h2 className="video-one__title">
          Tevily is a World LeadingOnline
          <br /> Tour Booking Platform
        </h2>
        {/* /.video-one__title */}
      </div>
      {/* /.video-one__content */}
    </div>
    {/* /.container */}
  </section>
  {/* /.video-one */}
  <section className="tour-type">
    <div
      className="tour-type__bg"
      style={{ backgroundImage: "url(assets/images/shapes/tour-type-bg.png)" }}
    />
    {/* /.tour-type__bg */}
    <div className="container">
      <div className="sec-title text-center">
        <p className="sec-title__tagline">Testimonial</p>
        <h2 className="sec-title__title">Choose Tour Types</h2>
      </div>
      <div className="row">
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="100ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-windsurfing-2" />
            </div>
            <h3 className="tour-type__box__title">Windsurfing</h3>
          </div>
        </div>
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="150ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-paragliding-5" />
            </div>
            <h3 className="tour-type__box__title">Paragliding</h3>
          </div>
        </div>
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="200ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-hiking-4" />
            </div>
            <h3 className="tour-type__box__title">Adventure</h3>
          </div>
        </div>
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="250ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-hang-gliding-3" />
            </div>
            <h3 className="tour-type__box__title">Hang Gliding</h3>
          </div>
        </div>
        <div className="col-xl-3 wow fadeInUp" data-wow-delay="300ms">
          <div className="tour-type__box">
            <div className="tour-type__box__icon">
              <span className="icon-deer-silhouette-1" />
            </div>
            <h3 className="tour-type__box__title">Wildlife</h3>
          </div>
        </div>
      </div>
    </div> 
  </section>
  {/* /.tour-type */}
  {/* /.client-carousel */}
  {/* Counter Three Start */}
  <section className="counter-three">
    <div
      className="counter-three__bg"
      style={{ backgroundImage: "url(assets/images/shapes/counter-bg-3.png)" }}
    />
    <div className="counter-three__shape-top" />
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-md-12 wow fadeInUp" data-wow-delay="100ms">
          <div className="sec-title text-left">
            <p className="sec-title__tagline">Are you ready to travel</p>
            {/* /.sec-title__tagline */}
            <h2 className="sec-title__title">
              Choose Our Tour Types
              <br /> &amp; Enjoy Now
            </h2>
            {/* /.sec-title__title */}
          </div>
          {/* /.sec-title */}
          {/* /.sec-title */}
          <p className="counter-three__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteradution in some form by injected
            humour, some form
          </p>
        </div>
        <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="100ms">
          <div className="counter-three__box @@extraClassName">
            <div className="counter-three__box__icon">
              <span className="icon-happy-Travel" />
            </div>
            {/* /.counter-box__icon */}
            <h3 className="counter-three__box__number count-box">
              <span className="count-text" data-stop="30.3" data-speed={1500} />
              30.3k
            </h3>
            <p className="counter-three__box__title">Happy Traveller</p>
          </div>
        </div>
        {/* /.col-xl-2 col-md-4 */}
        <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="200ms">
          <div className="counter-three__box @@extraClassName">
            <div className="counter-three__box__icon">
              <span className="icon-tent-1" />
            </div>
            {/* /.counter-box__icon */}
            <h3 className="counter-three__box__number count-box">
              <span className="count-text" data-stop="40.5" data-speed={1500} />
              40.5k
            </h3>
            <p className="counter-three__box__title">Tent Sites</p>
          </div>
        </div>
        {/* /.col-xl-2 col-md-4 */}
        <div className="col-xl-2 col-md-4 wow fadeInUp" data-wow-delay="300ms">
          <div className="counter-three__box @@extraClassName">
            <div className="counter-three__box__icon">
              <span className="icon-satisfied" />
            </div>
            {/* /.counter-box__icon */}
            <h3 className="counter-three__box__number count-box">
              <span className="count-text" data-stop="88.9" data-speed={1500} />
              88.9%
            </h3>
            <p className="counter-three__box__title">Satisfaction Rate</p>
          </div>
        </div>
        {/* /.col-xl-2 col-md-4 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
    <div className="counter-three__shape-bottom" />
  </section>
  {/* Counter Three End */}
  {/* Destination Start */}
  <section className="destination-three">
    <div className="container">
      <div className="sec-title text-center">
        <p className="sec-title__tagline">Are you ready to travel</p>
        {/* /.sec-title__tagline */}
        <h2 className="sec-title__title">
          Explore the Beautiful Places
          <br /> Around the World
        </h2>
        {/* /.sec-title__title */}
      </div>
      {/* /.sec-title */}
      {/* /.sec-title */}
      <div className="row">
        <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
          <div className="destination-one__card">
            <div className="destination-one__card-img-box destination-one__card-img-box--round">
              <img
                src="assets/images/destination/destination-3-1.jpg"
                alt="destination"
                className="destination-one__card-img destination-one__card-img--round"
              />
              <div className="destination-one__card-overlay destination-one__card-overlay--round">
                <div className="destination-one__card-content destination-one__card-content--round">
                  <a
                    href="/"
                    className="destination-one__card-btn destination-one__card-btn--round trevlo-btn trevlo-btn--base trevlo-btn--base-three"
                  >
                    <span>7 TOURS</span>
                  </a>
                  <h4 className="destination-one__card-title">
                    <a href="/">Thailand</a>
                  </h4>
                </div>
                {/* /.destination-one__card-content destination-one__card-content--round */}
              </div>
              {/* /.destination-one__card-overlay destination-one__card-overlay--round */}
            </div>
            {/* /.destination-one__card-img-box */}
          </div>
          {/* /.destination-one__card */}
        </div>
        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="150ms">
          <div className="destination-one__card">
            <div className="destination-one__card-img-box destination-one__card-img-box--round">
              <img
                src="assets/images/destination/destination-3-2.jpg"
                alt="destination"
                className="destination-one__card-img destination-one__card-img--round"
              />
              <div className="destination-one__card-overlay destination-one__card-overlay--round">
                <div className="destination-one__card-content destination-one__card-content--round">
                  <a
                    href="/"
                    className="destination-one__card-btn destination-one__card-btn--round trevlo-btn trevlo-btn--base trevlo-btn--base-three"
                  >
                    <span>8 TOURS</span>
                  </a>
                  <h4 className="destination-one__card-title">
                    <a href="/">Dubai</a>
                  </h4>
                </div>
                {/* /.destination-one__card-content destination-one__card-content--round */}
              </div>
              {/* /.destination-one__card-overlay destination-one__card-overlay--round */}
            </div>
            {/* /.destination-one__card-img-box */}
          </div>
          {/* /.destination-one__card */}
        </div>
        <div className="col-xl-5 col-md-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="destination-one__card">
            <div className="destination-one__card-img-box destination-one__card-img-box--round">
              <img
                src="assets/images/destination/destination-3-3.jpg"
                alt="destination"
                className="destination-one__card-img destination-one__card-img--round"
              />
              <div className="destination-one__card-overlay destination-one__card-overlay--round">
                <div className="destination-one__card-content destination-one__card-content--round">
                  <a
                    href="/"
                    className="destination-one__card-btn destination-one__card-btn--round trevlo-btn trevlo-btn--base trevlo-btn--base-three"
                  >
                    <span>10 TOURS</span>
                  </a>
                  <h4 className="destination-one__card-title">
                    <a href="/">Australia</a>
                  </h4>
                </div>
                {/* /.destination-one__card-content destination-one__card-content--round */}
              </div>
              {/* /.destination-one__card-overlay destination-one__card-overlay--round */}
            </div>
            {/* /.destination-one__card-img-box */}
          </div>
          {/* /.destination-one__card */}
        </div>
        <div className="col-xl-5 col-md-6 wow fadeInUp" data-wow-delay="250ms">
          <div className="destination-one__card">
            <div className="destination-one__card-img-box destination-one__card-img-box--round">
              <img
                src="assets/images/destination/destination-3-4.jpg"
                alt="destination"
                className="destination-one__card-img destination-one__card-img--round"
              />
              <div className="destination-one__card-overlay destination-one__card-overlay--round">
                <div className="destination-one__card-content destination-one__card-content--round">
                  <a
                    href="/"
                    className="destination-one__card-btn destination-one__card-btn--round trevlo-btn trevlo-btn--base trevlo-btn--base-three"
                  >
                    <span>7 TOURS</span>
                  </a>
                  <h4 className="destination-one__card-title">
                    <a href="/">Italy</a>
                  </h4>
                </div>
                {/* /.destination-one__card-content destination-one__card-content--round */}
              </div>
              {/* /.destination-one__card-overlay destination-one__card-overlay--round */}
            </div>
            {/* /.destination-one__card-img-box */}
          </div>
          {/* /.destination-one__card */}
        </div>
        <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="destination-one__card">
            <div className="destination-one__card-img-box destination-one__card-img-box--round">
              <img
                src="assets/images/destination/destination-3-5.jpg"
                alt="destination"
                className="destination-one__card-img destination-one__card-img--round"
              />
              <div className="destination-one__card-overlay destination-one__card-overlay--round">
                <div className="destination-one__card-content destination-one__card-content--round">
                  <a
                    href="/"
                    className="destination-one__card-btn destination-one__card-btn--round trevlo-btn trevlo-btn--base trevlo-btn--base-three"
                  >
                    <span>10 TOURS</span>
                  </a>
                  <h4 className="destination-one__card-title">
                    <a href="/">Spain</a>
                  </h4>
                </div>
                {/* /.destination-one__card-content destination-one__card-content--round */}
              </div>
              {/* /.destination-one__card-overlay destination-one__card-overlay--round */}
            </div>
            {/* /.destination-one__card-img-box */}
          </div>
          {/* /.destination-one__card */}
        </div>
        <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="350ms">
          <div className="destination-one__card">
            <div className="destination-one__card-img-box destination-one__card-img-box--round">
              <img
                src="assets/images/destination/destination-3-6.jpg"
                alt="destination"
                className="destination-one__card-img destination-one__card-img--round"
              />
              <div className="destination-one__card-overlay destination-one__card-overlay--round">
                <div className="destination-one__card-content destination-one__card-content--round">
                  <a
                    href="/"
                    className="destination-one__card-btn destination-one__card-btn--round trevlo-btn trevlo-btn--base trevlo-btn--base-three"
                  >
                    <span>6 TOURS</span>
                  </a>
                  <h4 className="destination-one__card-title">
                    <a href="/">Pakistan</a>
                  </h4>
                </div>
                {/* /.destination-one__card-content destination-one__card-content--round */}
              </div>
              {/* /.destination-one__card-overlay destination-one__card-overlay--round */}
            </div>
            {/* /.destination-one__card-img-box */}
          </div>
          {/* /.destination-one__card */}
        </div>
      </div>
    </div>
  </section>
  {/* Destination End */}
  <section className="why-choose-three">
    <div
      className="why-choose-three__bg"
      style={{
        backgroundImage: "url(assets/images/shapes/why-choose-3-bg.png)"
      }}
    />
    {/* /.why-choose__bg */}
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="why-choose-three__content">
            <div className="sec-title text-left">
              <p className="sec-title__tagline">Our Benefits List</p>
              {/* /.sec-title__tagline */}
              <h2 className="sec-title__title">
                Why You Should Choose
                <br /> Our Trevelo?
              </h2>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}
            {/* /.sec-title */}
            <p className="why-choose-three__content__text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteradution in some form by
              injected humour, some form
            </p>
            <div className="why-choose-three__box-wrapper">
              <div
                className="why-choose-three__box wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="why-choose-three__box__icon">
                  <span className="icon-airplane-1" />
                </div>
                <h3 className="why-choose-three__box__title">
                  Best Price Guarantee
                </h3>
                <p className="why-choose-three__box__text">
                  There are many variations of passages of Lorem Ipsum{" "}
                </p>
              </div>
              {/* /.why-choose-three__box */}
              <div
                className="why-choose-three__box wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="why-choose-three__box__icon">
                  <span className="icon-ticket-1" />
                </div>
                <h3 className="why-choose-three__box__title">
                  Easy &amp; Quick Booking
                </h3>
                <p className="why-choose-three__box__text">
                  There are many variations of passages of Lorem Ipsum{" "}
                </p>
              </div>
              {/* /.why-choose-three__box */}
              <div
                className="why-choose-three__box wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="why-choose-three__box__icon">
                  <span className="icon-tour-guide-2" />
                </div>
                <h3 className="why-choose-three__box__title">
                  Experienced Guide
                </h3>
                <p className="why-choose-three__box__text">
                  There are many variations of passages of Lorem Ipsum{" "}
                </p>
              </div>
              {/* /.why-choose-three__box */}
            </div>
          </div>
        </div>
        <div className="col-xl-6 wow slideInRight" data-wow-delay="200ms">
          <div className="trevlo-stretch-element-inside-column">
            <div className="why-choose-three__image">
              <img
                src="assets/images/resources/why-choose-3.jpg"
                alt="trevlo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.container */}
  </section>
  {/* /.why-choose-three */}
  <Article/>
  {/* blog-one Start */}
  
  {/* /.blog-one */}
  
  <Testmonial/>

  {/* CTA Two Start */}
  <section className="cta-two">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 wow fadeInUp" data-wow-delay="100ms">
          <h5 className="cta-two__sub-title">Book Your Trip Now</h5>
          <h3 className="cta-two__title">
            Are You Ready to Travel &amp; Enjoy
          </h3>
        </div>
        <div
          className="col-lg-3 cta-two__btn wow fadeInUp"
          data-wow-delay="200ms"
        >
          <a href="/" className="trevlo-btn">
            <span>Start Booking</span>
          </a>
        </div>
      </div>
    </div>
    {/* /.container */}
  </section>
  {/* CTA Two End */}
  <Footer/>
  {/* /.main-footer */}
  {/* /.page-wrapper */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    {/* /.mobile-nav__overlay */}
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="fa fa-times" />
      </span>
      <div className="logo-box">
        <a href="index.html" aria-label="logo image">
          <img src="assets/images/logo-dark.png" width={155} alt="" />
        </a>
      </div>
      {/* /.logo-box */}
      <div className="mobile-nav__container" />
      {/* /.mobile-nav__container */}
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="fa fa-envelope" />
          <a href="mailto:needhelp@trevlo.com">needhelp@trevlo.com</a>
        </li>
        <li>
          <i className="fa fa-phone-alt" />
          <a href="tel:(303)5550105">(303) 555-0105</a>
        </li>
      </ul>
      {/* /.mobile-nav__contact */}
      <div className="mobile-nav__social">
        <a href="https://twitter.com/">
          <i className="fab fa-twitter" aria-hidden="true" />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="https://facebook.com/">
          <i className="fab fa-facebook" aria-hidden="true" />
          <span className="sr-only">Facebook</span>
        </a>
        <a href="https://pinterest.com/">
          <i className="fab fa-pinterest-p" aria-hidden="true" />
          <span className="sr-only">Pinterest</span>
        </a>
        <a href="https://instagram.com/">
          <i className="fab fa-instagram" aria-hidden="true" />
          <span className="sr-only">Instagram</span>
        </a>
      </div>
      {/* /.mobile-nav__social */}
    </div>
    {/* /.mobile-nav__content */}
  </div>
  {/* /.mobile-nav__wrapper */}
  <div className="search-popup">
    <div className="search-popup__overlay search-toggler" />
    {/* /.search-popup__overlay */}
    <div className="search-popup__content">
      <form
        role="search"
        method="get"
        className="search-popup__form"
        action="#"
      >
        <input type="text" id="search" placeholder="Search Here..." />
        <button
          type="submit"
          aria-label="search submit"
          className="search-popup__btn trevlo-btn trevlo-btn--base"
        >
          <span className="icon-search" />
        </button>
      </form>
    </div>
    {/* /.search-popup__content */}
  </div>
  {/* /.search-popup */}
  <a href="/" data-target="html" className="scroll-to-target scroll-to-top">
    <span className="scroll-to-top__text">back top</span>
    <span className="scroll-to-top__wrapper">
      <span className="scroll-to-top__inner" />
    </span>
  </a>
  </div>
</>

  );
}

export default App;
