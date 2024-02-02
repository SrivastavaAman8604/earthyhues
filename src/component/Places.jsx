import React from 'react'

const Places = () => {
  return (
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
  )
}

export default Places
