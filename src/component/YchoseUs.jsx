import React from 'react'

const YchoseUs = () => {
  return (
    <div>
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
                <br /> Earthy Hues?
              </h2>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}
            {/* /.sec-title */}
            <p className="why-choose-three__content__text">
            Our carefully curated experiences provide a genuine connection to the places you visit, allowing you to immerse yourself in the local culture and traditions. With our knowledgeable guides and meticulous planning, you can explore with confidence, knowing that every detail has been taken care of for a seamless and unforgettable journey.
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
                Get the best prices guaranteed for your dream vacations with Earthy Hues.{" "}
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
                Effortless booking for your travel needs.{" "}
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
                Embark on your journey with seasoned experts guiding the way.{" "}
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
    </div>
  )
}

export default YchoseUs
