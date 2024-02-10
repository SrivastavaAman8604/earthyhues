import React from 'react'

const Passion = () => {
  return (
    <>
    <section className="page-header">
        <div className="page-header__bg" />
        <div className="container">
        {/*<h2 class="page-header__title wow animated fadeInLeft" data-wow-delay="0s" data-wow-duration="1500ms">Destination Details</h2>*/}
        <div className="page-header__breadcrumb-box">
            <ul className="trevlo-breadcrumb">
            <li>
                <a href="./.">Home</a>
            </li>
            <li>Passion</li>
            </ul>
        </div>
        </div>
    </section>
    <section className="tour-listing-details tour-listing-details-right section-space">
        <div className="container">
        <div className="row">
            <div className="col-xl-8">
            {/* <div className="tour-listing-details__slider">
                <div
                className="tour-listing-details__carousel trevlo-owl__carousel trevlo-owl__carousel--basic-nav owl-theme owl-carousel"
                data-owl-options='{
                "items": 2,
                "margin": 30,
                "smartSpeed": 700,
                "loop":true,
                "autoplay": true,
                "nav":false,
                "dots":true,
                "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
                "responsive":{
                "0":{
                "items": 1
                },
                "768":{
                "items": 2
                }
                }
                }'
                >
                <div className="tour-listing-details__carousel-item item">
                    <div className="tour-listing-details__carousel-image-box">
                    <img
                        src="assets/images/tours/tour-listing-details-slide-1.jpg"
                        alt="tour-listing-details-slide"
                        className="tour-listing-details__carousel-image"
                    />
                    </div>
                </div>
                <div className="tour-listing-details__carousel-item item">
                    <div className="tour-listing-details__carousel-image-box">
                    <img
                        src="assets/images/tours/tour-listing-details-slide-2.jpg"
                        alt="tour-listing-details-slide"
                        className="tour-listing-details__carousel-image"
                    />
                    </div>
                </div>
                <div className="tour-listing-details__carousel-item item">
                    <div className="tour-listing-details__carousel-image-box">
                    <img
                        src="assets/images/tours/tour-listing-details-slide-3.jpg"
                        alt="tour-listing-details-slide"
                        className="tour-listing-details__carousel-image"
                    />
                    </div>
                </div>
                <div className="tour-listing-details__carousel-item item">
                    <div className="tour-listing-details__carousel-image-box">
                    <img
                        src="assets/images/tours/tour-listing-details-slide-4.jpg"
                        alt="tour-listing-details-slide"
                        className="tour-listing-details__carousel-image"
                    />
                    </div>
                </div>
                <div className="tour-listing-details__carousel-item item">
                    <div className="tour-listing-details__carousel-image-box">
                    <img
                        src="assets/images/tours/tour-listing-details-slide-5.jpg"
                        alt="tour-listing-details-slide"
                        className="tour-listing-details__carousel-image"
                    />
                    </div>
                </div>
                </div>
            </div> */}
            <div className="tour-listing-details__explore">
                <div
                className="wow animated fadeIn"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                <h3 className="tour-listing-details__title tour-listing-details__explore-title">
                    Wildlife
                </h3>
                </div>
                <p
                className="tour-listing-details__explore-text wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                Riding the desert safari in an open-roof SUV along the dusty
                tracks and looking out across the sun-baked Savannah teeming with
                big game is arguably one of life’s best experiences.
                </p>
                <p
                className="tour-listing-details__explore-text wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                For the wildlife devotee, Earthy Hues offers unparalleled
                opportunities to witness a staggering variety of wildlife,
                including some of the world’s most iconic mammals and birds. And a
                lifetime opportunity to indulge in one of the best wildlife
                photography experiences.
                </p>
                <p
                className="tour-listing-details__explore-text wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                Many of these animals are incredibly abundant in number and
                relatively easy to observe, guaranteeing that our Masai Mara
                safari holidays and other legendary top wildlife destinations'
                tours are full of amazing sightings.
                </p>
            </div>
            <div className="tour-listing-details__included">
                <p>
                From the Great African Savannah to the dense forests of India – we
                cover it all. Our top wildlife destinations include,
                </p>
                <div className="row">
                <div
                    className="col-lg-12 col-md-12 wow animated fadeInUp animated"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                    style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp"
                    }}
                >
                    <ul className="tour-listing-details__included-list-one">
                    <li>
                        <i className="fas fa-check-circle" />
                        <p>Masai Mara – Mecca of Wildlife</p>
                    </li>
                    <li>
                        <i className="fas fa-check-circle" />
                        <p> Tsavo – The land of legendary man-eaters of Tsavo</p>
                    </li>
                    <li>
                        <i className="fas fa-check-circle" />
                        <p>
                        Amboseli – Set on the great backdrop of Mt. Kilimanjaro
                        </p>
                    </li>
                    <li>
                        <i className="fas fa-check-circle" />
                        <p>
                        {" "}
                        Samburu- Home to the Samburu Special 5- Gerenuk, Besia
                        oryx, Grevy’s zebra, Reticulated giraffe and Somali
                        ostrich
                        </p>
                    </li>
                    <li>
                        <i className="fas fa-check-circle" />
                        <p> Kurger – The pride of South Africa</p>
                    </li>
                    </ul>
                    {/* /.tour-listing-details__included-list-one */}
                </div>
                {/* /.col-lg-6 col-md-7 */}
                </div>
                {/* /.row */}
            </div>
            <div className="tour-listing-details__similar container-fluid">
                <h3 className="tour-listing-details__title tour-listing-details__similar-title">
                Similar Tour
                </h3>
                <div className="row">
                <div
                    className="col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                >
                    <div className="tour-listing__card">
                    <a
                        href="tour-listing-details-right.html"
                        className="tour-listing__card-image-box"
                    >
                        <img
                        src="assets/images/tours/tour-3-3.jpg"
                        alt="assets/images/tours/tour-3-3.jpg"
                        className="tour-listing__card-image"
                        />
                        <div className="tour-listing__card-btn-group">
                        <div className="tour-listing__card-discount tour-listing__card-discount-hide">
                            10% Off
                        </div>
                        <div className="tour-listing__card-featured">
                            Featured
                        </div>
                        </div>
                        <div className="tour-listing__card-image-overlay" />
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="tour-listing__card-wishlist"
                    >
                        <span className="icon-heart" />
                    </a>
                    <div className="tour-listing__card-content">
                        <div className="tour-listing__card-camera-group">
                        <a
                            href="javascript:void(0);"
                            className="tour-listing__card-camera-btn trevlo-image-popup"
                            data-gallery-options='{
                        "items": [
                        {
                        "src": "assets/images/tours/tour-3-3.jpg1"
                        },
                        {
                        "src": "assets/images/tours/tour-3-3.jpg2"
                        },
                        {
                        "src": "assets/images/tours/tour-3-3.jpg3"
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
                        <h3 className="tour-listing__card-title">
                        <a href="tour-listing-details-right.html">
                            Moscow Red City Land
                        </a>
                        </h3>
                        <p className="tour-listing__card-text text-small">
                        There are many variations of passages of Lorem Ipsum
                        agtilable
                        </p>
                    </div>
                    </div>
                </div>
                {/* /.col-md-6 */}
                <div
                    className="col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-duration="1500ms"
                >
                    <div className="tour-listing__card">
                    <a
                        href="tour-listing-details-right.html"
                        className="tour-listing__card-image-box"
                    >
                        <img
                        src="assets/images/tours/tour-3-4.jpg"
                        alt="assets/images/tours/tour-3-4.jpg"
                        className="tour-listing__card-image"
                        />
                        <div className="tour-listing__card-btn-group">
                        <div className="tour-listing__card-discount">10% Off</div>
                        <div className="tour-listing__card-featured">
                            Featured
                        </div>
                        </div>
                        <div className="tour-listing__card-image-overlay" />
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="tour-listing__card-wishlist"
                    >
                        <span className="icon-heart" />
                    </a>
                    <div className="tour-listing__card-content">
                        <div className="tour-listing__card-camera-group">
                        <a
                            href="javascript:void(0);"
                            className="tour-listing__card-camera-btn trevlo-image-popup"
                            data-gallery-options='{
                        "items": [
                        {
                        "src": "assets/images/tours/tour-3-4.jpg1"
                        },
                        {
                        "src": "assets/images/tours/tour-3-4.jpg2"
                        },
                        {
                        "src": "assets/images/tours/tour-3-4.jpg3"
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
                        <h3 className="tour-listing__card-title">
                        <a href="tour-listing-details-right.html">
                            Turkey Balloons flying
                        </a>
                        </h3>
                        <p className="tour-listing__card-text text-small">
                        There are many variations of passages of Lorem Ipsum
                        agtilable
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-xl-4">
            <aside className="tour-listing-details__sidebar">
                <div
                className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                <h3 className="tour-listing-details__sidebar-title">
                    Book Tours
                </h3>
                <form
                    action="https://bracketweb.com/trevlo-html/assets/inc/sendemail.php"
                    className="tour-listing-details__sidebar-form contact-form-validated"
                >
                    <div className="tour-listing-details__sidebar-form-input">
                    <input type="text" placeholder="Where to" name="where_to" />
                    </div>
                    <div className="tour-listing-details__sidebar-form-input">
                    <input type="text" placeholder="When" name="when" />
                    </div>
                    <div className="tour-listing-details__sidebar-form-input">
                    <select
                        className="selectpicker"
                        name="wildlife"
                        aria-label="Wildlife"
                    >
                        <option selected="">Wildlife</option>
                        <option value={1}>Sightseeing</option>
                        <option value={2}>Adventure</option>
                    </select>
                    </div>
                    <div className="tour-listing-details__sidebar-form-input">
                    <input
                        type="text"
                        name="date"
                        placeholder="Select date"
                        id="datepicker"
                        className="tour-listing-details__sidebar-form-date trevlo-datepicker"
                    />
                    <i className="tour-listing-details__sidebar-form-date-arrow fas fa-angle-down" />
                    </div>
                    <div className="tour-listing-details__sidebar-form-input">
                    <select
                        className="selectpicker"
                        name="adventure"
                        aria-label="Adventure"
                    >
                        <option selected="">Adventure</option>
                        <option value={1}>Sightseeing</option>
                        <option value={2}>Wildlife</option>
                    </select>
                    </div>
                    <button
                    type="submit"
                    className="tour-listing-details__sidebar-btn trevlo-btn trevlo-btn--base"
                    >
                    <span>Book Now</span>
                    </button>
                </form>
                <div className="result" />
                </div>
                <div
                className="tour-listing-details__sidebar-post-box tour-listing-details__sidebar-single wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                <h3 className="tour-listing-details__sidebar-title tour-listing-details__sidebar-post-title">
                    Last Minute
                </h3>
                <ul className="tour-listing-sidebar-post">
                    <li className="tour-listing-sidebar-post__item">
                    <div className="tour-listing-sidebar-post__image">
                        <img
                        src="assets/images/tours/tour-listing-details-post-1.jpg"
                        alt="last-post"
                        />
                    </div>
                    <div className="tour-listing-sidebar-post__content">
                        <p className="tour-listing-sidebar-post__price">$380</p>
                        <h5 className="tour-listing-sidebar-post__link">
                        <a href="tour-listing-details-right.html">
                            The Complete Web
                        </a>
                        </h5>
                        <div className="tour-listing-sidebar-post__location">
                        <span className="icon-location-1" />
                        <p className="tour-listing-sidebar-post__location-text text-small">
                            Main Street, Brooklyn, NY
                        </p>
                        </div>
                    </div>
                    </li>
                    <li className="tour-listing-sidebar-post__item">
                    <div className="tour-listing-sidebar-post__image">
                        <img
                        src="assets/images/tours/tour-listing-details-post-2.jpg"
                        alt="last-post"
                        />
                    </div>
                    <div className="tour-listing-sidebar-post__content">
                        <p className="tour-listing-sidebar-post__price">$380</p>
                        <h5 className="tour-listing-sidebar-post__link">
                        <a href="tour-listing-details-right.html">
                            The Complete Web
                        </a>
                        </h5>
                        <div className="tour-listing-sidebar-post__location">
                        <span className="icon-location-1" />
                        <p className="tour-listing-sidebar-post__location-text text-small">
                            Main Street, Brooklyn, NY
                        </p>
                        </div>
                    </div>
                    </li>
                    <li className="tour-listing-sidebar-post__item">
                    <div className="tour-listing-sidebar-post__image">
                        <img
                        src="assets/images/tours/tour-listing-details-post-3.jpg"
                        alt="last-post"
                        />
                    </div>
                    <div className="tour-listing-sidebar-post__content">
                        <p className="tour-listing-sidebar-post__price">$380</p>
                        <h5 className="tour-listing-sidebar-post__link">
                        <a href="tour-listing-details-right.html">
                            The Complete Web
                        </a>
                        </h5>
                        <div className="tour-listing-sidebar-post__location">
                        <span className="icon-location-1" />
                        <p className="tour-listing-sidebar-post__location-text text-small">
                            Main Street, Brooklyn, NY
                        </p>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </aside>
            </div>
        </div>
        </div>
    </section>
    </>

  )
}

export default Passion
