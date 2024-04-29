import React,{ useState,useEffect}  from 'react'
import axios from "axios";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typewriter from 'typewriter-effect';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FormHome from './FormHome';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    // items: 1
    items: '100%'
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
    // const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [data,setData] = useState([]);
  const [cap,setCap] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://www.earthyhues.com/home-page-banner")
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length >= 2) {
          setData(response.data[1]);console.log(response.data);
          if (Array.isArray(response.data[0].banner_caption)) {
            setCap(response.data[0].banner_caption);
            console.log(response.data.banner_caption);
          } else {
            console.error("Invalid banner caption data format");
          }
        } else {
          console.error("Invalid response format or insufficient data");
        } 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 
  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <section className="main-slider-three">
      <div className="container">
        <div className="main-slider-three__content marg">
          <h5
            className="main-slider-three__sub-title wow fadeInUp"
            data-wow-delay="200ms"
          >
            Plan Your Dream Adventure
          </h5>
          <h3
            className="main-slider-three__title wow fadeInUp"
            data-wow-delay="300ms"
          >
           Discover with Expert Guides 
          </h3>
          {/* <h5
            className="main-slider-three__sub-title wow fadeInUp"
            data-wow-delay="200ms"
          >
            Plan to Travel Everywhere
          </h5>
          <h3
            className="main-slider-three__title wow fadeInUp"
            data-wow-delay="300ms"
          >
            Let’s plan your <br />
            trip with us
          </h3> */}
          {/* <div
            className="main-slider-three__btn wow fadeInUp"
            data-wow-delay="400ms"
          >
            <a href="contact.html" className="trevlo-btn trevlo-btn--base">
              <span>Start Booking</span>
            </a>
          </div> */}
        </div>
        <FormHome/>
        
      </div>
      {/* banner-form */}

      <div
        className="main-slider-three__shape-one"
        style={{
          backgroundImage: "url(assets/images/shapes/slider-3-shape-1.png)"
        }}
      />
      {/*<div class="main-slider-three__image wow fadeInRight" data-wow-delay="200ms" style="background-image: url(assets/images/backgrounds/slider-3-1.jpg);"></div>*/}
      <div className="main-slider-three__image wow fadeInRight" data-wow-delay="200ms">
        <div
          className="main-slider-one__carousel trevlo-owl__carousel owl-carousel owl-theme"
          // data-owl-options='{
          // "items": 1,
          // "margin": 10,
          // "loop": true,
          // "smartSpeed": 700,
          // "animateOut": "fadeOut",
          // "autoplayTimeout": 5000, 
          // "nav": true,
          // "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
          // "dots": false,
          // "autoplay": true
          // }'
        >
        <div className="item">
        
    <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        arrows={false}
      >
            {data.map((item) => (
              <div className="item" key={item.banner_id}>
                <div
                  className="main-slider-one__image"
                  style={{
                    backgroundImage: `url(${item.small})`,
                    borderRadius: "0 0 0 55px",
                  
                  }}
                />
              </div>
            ))}
          </Carousel>
          

            
              <div className="container">
                <div className="main-slider-one__content">
                    {/* <Carousel autoPlay={true} autoPlaySpeed={3000} infiniteLoop={true} showIndicators={false} showThumbs={false} showArrows={false} showStatus={false}>
                      {cap.map((item) => (
                        <h3 className="main-slider-one__title" >
                          Find Your &nbsp;
                            <span className="font-bernadette-rough font-size" key={item.banner_id} >{item.banner_text}</span>
                            <img src="assets/images/shapes/slider-1-shape-2.png" alt="trevlo"/> 
                        </h3>
                      ))}
                    </Carousel> */}
                          {/* <h2 class="rw-sentence">
					
                            <h3 className="rw-words rw-words-1 main-slider-one__title">
                            Find Your &nbsp;
                            {cap.map((item) => (
                              <span className="font-bernadette-rough font-size" key={item.banner_id}>{item.banner_text}</span>
                              ))}
                            </h3>
                        </h2> */}
                        <div className="content w-100 my-5 py-5">
                          <div class="w-100">
                            
                            <div className="d-flex justify-content-center mobtxt">
                            {/* {cap.map((item) => ( 
                              <div key={item.banner_id}>*/}
                               <span className='display-4 main-slider-three__title'> Find Your&nbsp;</span>&nbsp;
                                <Typewriter 
                                  options={{
                                    strings: cap.map((item) => `<span class="font-bernadette-rough display-4">${item.banner_text}</span>`),
                                    autoStart: true,
                                    loop: true,
                                    cursor: '',
                                  }}
                                />
                             
                            </div>
                          </div>
                        </div>
              </div>
        </div>
      
          
        
        </div>
        </div>
      </div>
      </section>
  )
}

export default Banner
