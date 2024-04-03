import React ,{useState, useEffect}from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const TestimonialDetail = () => {

    const {testimonials_id} = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.earthyhues.com/api-testimonials/${testimonials_id}`);
                setData(response.data[0]);
                // console.log(response.data);
            } catch (error) {
                console.log('Error while loading:', error.response.data);
            }
        };
        fetchData();
    }, [testimonials_id]);
   
  return (
    <div>
        <section className="page-header">
            <div className="page-header__bg" />
            <div className="container">
                <div className="page-header__breadcrumb-box">
                    {/* <h2
                        className="page-header__title wow animated fadeInLeft animated"
                        data-wow-delay="0s"
                        data-wow-duration="1500ms"
                        style={{
                            visibility: "visible",
                            animationDuration: "1500ms",
                            animationDelay: "0s",
                            animationName: "fadeInLeft"
                        }}
                        >
                        Testimonial Details
                    </h2> */}
                    <div className="page-header__breadcrumb-box">
                        <ul className="trevlo-breadcrumb">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>{data.testimonials_customer_name}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* <section
  className="offer-one"
  style={{ 
    backgroundImage: 'url("assets/earthyhues-image/destinations/Bhutan-Banner-Image-1.jpg")' , 
    backgroundColor: '#5db0c4'
    }}
>
  <div className="container">
    <div className="row">
      <div className="col-xl-5 col-lg-6 my-5 py-5">
        <div className="offer-one__content sec-title my-5 py-4">
           <p className="offer-one__top-title">Special offer for you</p> */}
          {/*<h2 className="offer-one__heading sec-title__heading " >
            {data.testimonials_name}
          </h2>
            <div className="page-header__breadcrumb-box">
                        <ul className="trevlo-breadcrumb">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>{data.testimonials_customer_name}</li>
                        </ul>
            </div>
          <div
            className="offer-one__btn-box wow animated fadeInUp animated"
            data-wow-delay="0.1s"
            data-wow-duration="1500ms"
            style={{
              visibility: "visible",
              animationDuration: "1500ms",
              animationDelay: "0.1s",
              animationName: "fadeInUp"
            }}
          > */}
            {/* <a
              href="tour-listing-side-filter-right.html"
              className="offer-one__btn trevlo-btn trevlo-btn--primary"
            >
              <span>Start Booking</span>
            </a> 
          </div>
        </div>
      </div>*/}
      {/* <div
        className="col-xl-7 col-lg-6 wow animated fadeInRight animated"
        data-wow-delay="0.1s"https://github.com/SrivastavaAman8604/earthyhues
        data-wow-duration="1500ms"
        style={{
          visibility: "visible",
          animationDuration: "1500ms",
          animationDelay: "0.1s",
          animationName: "fadeInRight"
        }}
      > */}
        {/* <div className="offer-one__img-box">
          <div className="offer-one__inner-img-box">
            <img
              src="assets/images/offer/offer-1-1.jpg"
              alt="offer"
              className="offer-one__img-one"
            />
            <img
              src="assets/images/offer/offer-1-2.jpg"
              alt="offer"
              className="offer-one__img-two"
            />
            <img
              src="assets/images/offer/offer-1-3.png"
              alt="offer"
              className="offer-one__img-three"
            />
          </div>
        </div> */}
      {/* </div> */}
    {/* </div>
  </div>
  <div
    className="offer-one__shape-one trevlo-splax simple-parallax-initialized"
    data-para-options='{ "orientation": "left", "scale": 1.5, "overflow": true }'
    style={{
      backgroundImage: 'url("assets/images/shapes/offer-shape-1.png")',
      willChange: "transform",
      transform: "translate3d(45px, 0px, 0px)"
    }}
  /> */}
  {/* /.bg */}
  {/* <div
    className="offer-one__shape-two trevlo-splax simple-parallax-initialized"
    data-para-options='{ "orientation": "right", "scale": 1.5, "overflow": true }'
    style={{
      backgroundImage: 'url("assets/images/shapes/offer-shape-2.png")',
      willChange: "transform",
      transform: "translate3d(-45px, 0px, 0px)"
    }}
  /> */}
  {/* <div
    className="offer-one__bottom-bg1"
    style={{ backgroundImage: 'url("assets/images/offer/offer-1-4.png")' }}
  /> */}
  {/* /.bg */}
{/* </section> */}


            <section className="tour-listing-details tour-listing-details-right mt-5">
                <div className="container">
                    <div className="tour-listing-details__row row">
                    <div className="col-xl-4">
                            <aside className="tour-listing-details__sidebar">
                              <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center "
                                    data-wow-delay="0.1s" data-wow-duration="1500ms">
                            {data && data.testimonials_list && data.testimonials_list.map((testimonial) => (
                                <div key={testimonial.id}>
                                    
                                        <img src={testimonial.testimonial_img} alt="image" className='w-100'/>
                                      <div className="result" />
                                    </div>
                            ))}
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
                            {data.testimonials_customer_name}
                            </h3>
                            <h6>{data.testimonials_name}</h6>
                        </div>
                              <div class="post-info" >
                                  <div class="post-category"  >
                                      <div class="post-category__btn-group" >
                            {data && data.with_package && data.with_package.map((index) => (
                                        <a href={index.package_url} class="post-category__btn trevlo-btn trevlo-btn--base" key={index.package_id}>
                                          <span>{index.package_name}</span>
                                        </a>
                                      ))}
                                      </div>
                                  </div>
                              </div>
                            {data && data.testimonials_list && data.testimonials_list.map((testimonial) => (
                                <div key={testimonial.id}>
                                    
                                    <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" dangerouslySetInnerHTML={{__html: testimonial.testimonial_content}}></p>
                                </div>
                            ))}

                        
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
                        
                        <div className="row">
                        {data && data.testimonials_multiple_img && data.testimonials_multiple_img.map((index) => (
                                  <div className="col-lg-4 col-md-4 " key={index.id}>
                                      <img src={index.image} alt="image" className='w-100'/>
                                  </div>
                            ))}
                        
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

