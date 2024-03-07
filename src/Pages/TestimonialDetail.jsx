import React from 'react'

const TestimonialDetail = () => {
  return (
    <div>
        <section className="page-header">
            <div className="page-header__bg" />
            <div className="container">
                <div className="page-header__breadcrumb-box">
                    <ul className="trevlo-breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Testimonial Details</li>
                    </ul>
                </div>
            </div>
        </section>
            <section className="tour-listing-details tour-listing-details-right mt-5">
                <div className="container">
                    <div className="tour-listing-details__row row">
                    <div className="col-xl-4">
                            <aside className="tour-listing-details__sidebar">
                                 <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center"
                                    data-wow-delay="0.1s" data-wow-duration="1500ms">
                                    
                                        <img src="./assets/images/about/about-4-2.jpg" alt="image" />
                                    <div className="result" />
                                </div> 
                            </aside>
                        </div>
                    <div className="col-xl-8">
                        <div className="tour-listing-details__overview">
                        <div
                            className="wow animated fadeIn"
                            data-wow-delay="0.1s"
                            data-wow-duration="1500ms"
                        >
                            <h3 className="tour-listing-details__title tour-listing-details__overview-title">
                            Ridhi Rathi
                            </h3>
                            <h6>Avid Traveler | Writer | Entrepreneur</h6>
                        </div>
                        <p
                            className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s"
                            data-wow-duration="1500ms"
                        >
                           Our Vietnam trip was an absolute delight everything was well coordinated and the veg food arrangements were spot on!</p>
                           <p
                            className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s"
                            data-wow-duration="1500ms"
                        >
All the tours, especially the cruise to Ha long bay was fantastic and so calm, the drivers were on time, always greeting us with a smile.
Our journey to Ninh Binh went smoothly, and the entire trip was meticulously planned. We thoroughly enjoyed our accommodations and felt secure throughout, which was a major plus, especially as three female travelers. We eagerly look forward to our next vacation with Earthy Hues.</p>

<p
                            className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s"
                            data-wow-duration="1500ms"
                        >
Thank you to the entire team of Earthy Hues. Will recommend you to our friends and family and will surely book more tours from you guys
                        </p>
                        </div>
                        
                        </div>
                        </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>
            <section className="tour-listing-details tour-listing-details-right mt-5">
                <div className="container">
                    <div className="tour-listing-details__row row">
                    
                    <div className="col-xl-12">
                        <div className="tour-listing-details__overview">
                        {/* <div
                            className="wow animated fadeIn"
                            data-wow-delay="0.1s"
                            data-wow-duration="1500ms"
                        >
                            <h3 className="tour-listing-details__title tour-listing-details__overview-title">
                            Ridhi Rathi
                            </h3>
                            <h6>Avid Traveler | Writer | Entrepreneur</h6>
                        </div> */}
                        <div className="row">
                        <div className="col-lg-4">
                            <img src="./assets/images/gallery/gallery-1-1.jpg" alt="image" />
                        </div>
                        <div className="col-lg-4">
                            <img src="./assets/images/gallery/gallery-1-2.jpg" alt="image" />
                        </div>
                        <div className="col-lg-4">
                            <img src="./assets/images/gallery/gallery-1-3.jpg" alt="image" />
                        </div>
                        <div className="col-lg-4">
                            <img src="./assets/images/gallery/gallery-1-4.jpg" alt="image" />
                        </div>
                        <div className="col-lg-4">
                            <img src="./assets/images/gallery/gallery-1-5.jpg" alt="image" />
                        </div>
                        <div className="col-lg-4">
                            <img src="./assets/images/gallery/gallery-1-1.jpg" alt="image" />
                        </div>
                        </div>
                        </div>
                        
                        </div>
                        </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>
    </div>
  )
}

export default TestimonialDetail
