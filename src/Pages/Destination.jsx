import axios from 'axios';
import React ,{useState,useEffect} from 'react'

const Destination = ({ destination_id }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://www.earthyhues.com/destinations/${destination_id}`)
            .then((response) => {
                // Assuming response.data is an array of destinations
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching destinations:', error);
            });
    }, [destination_id]);
    
    
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
                <li>Destination Details</li>
                </ul>
            </div>
            </div>
        </section>
    <section className="destination-details section-space">
        <div className="container">
        <div className="row">
            <div className="col-xl-8 col-lg-7">
            <div className="destination-details__card">
                <div className="destination-details__card-content">
                <h3 className="destination-details__card-title destination-details__title main-heading-title">
                    Rwanda
                </h3>
                <p
                    className="destination-details__card-text wow animated fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                >
                    Known as the “Land of a Thousand Hills” Rwanda is home to
                    endless mountains and absolutely beautiful scenery. It is lush
                    green with thousands of rolling hills covered in farmlands, tea
                    plantations, rain forests, vast lakes and massive volcanoes.
                </p>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                {/*?php
                    for($i=1; $i<10; $i++){
                    ?*/}
                <div
                    className="col-xl-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                >
                    <div className="tour-listing__card">
                    <a href="#" className="tour-listing__card-image-box">
                        <img
                        src="assets/earthyhues-image/destinations/Tashichhoe Dzong.jpg"
                        alt="assets/images/tours/tour-3-1.jpg"
                        className="tour-listing__card-image"
                        />
                        {/* /.tour-listing__card-btn-group */}
                        <div className="tour-listing__card-image-overlay" />
                        {/* /.tour-listing__card-image-overlay */}
                    </a>
                    {/* /.tour-listing__card-image-box */}
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
                            "src": "assets/images/tours/tour-3-1.jpg"
                            },
                            {
                            "src": "assets/images/tours/tour-3-2.jpg"
                            },
                            {
                            "src": "assets/images/tours/tour-3-3.jpg"
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
                    {/* /.tour-listing__card-content */}
                    </div>
                    {/* /.tour-listing__card */}
                </div>
                {/*?php
                    }
                    ?*/}
                {/* /.col-xl-4 col-md-6 */}
                </div>
                {/* /.container */}
            </div>
            </div>
            {/* /.col-xl-8 col-lg-7 */}
            <div className="col-xl-4 col-lg-5">
            <aside className="destination-sidebar">
                <div
                className="destination-sidebar__tour destination-sidebar__single wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                <h3 className="destination-sidebar__tour-top-title">Packages</h3>
                <div className="destination-sidebar__tour-box">
                    {/*?php
                        for($j=1; $j<10; $j++){
                        ?*/}
                    <div className="destination-sidebar__tour-item">
                    <div className="destination-sidebar__tour-img">
                        <img
                        src="assets/images/destination/destination-tour-1.jpg"
                        alt="destination-tour"
                        />
                    </div>
                    {/* /.destination-sidebar__tour-img */}
                    <div className="destination-sidebar__tour-content">
                        <h4 className="destination-sidebar__tour-title">
                        <a href="tour-listing-details-right.html">
                            Rwanda Golden Monkey Trek
                        </a>
                        </h4>
                        <div className="destination-sidebar__tour-location">
                        <span className="destination-sidebar__tour-location-icon icon-location-1" />
                        <p className="destination-sidebar__tour-location-text text-small">
                            Golden Monkey trekking in Rwanda is another major
                        </p>
                        </div>
                    </div>
                    {/* /.destination-sidebar__tour-content */}
                    </div>
                    {/* /.destination-sidebar__tour-item */}
                    {/*?php
                        }
                        ?*/}
                </div>
                {/* /.destination-sidebar__tour */}
                </div>
            </aside>
            </div>
        </div>
        </div>
    </section>
    </>

  )
}

export default Destination
