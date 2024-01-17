import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import ShowMoreText from 'react-show-more-text';

function Testmonial() {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);
  const [feedback, setFeedback] = useState([]);
  // const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios.get('https://www.earthyhues.com/home-page-feedback')
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length >= 1) {
          setFeedback(response.data);
          console.log(response.data);
        } else {
          console.error("Invalid response format or insufficient data");
        }
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  // const handleToggle = () =>{
  //   setShowMore(!showMore)
  // }

  const handleClick = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };
  const renderFullText = () => {
    if (isFullTextVisible) {
      return <div>This is the full text.</div>;
    } else {
      return null;
    }
  };
    
  return (
    <section className="testimonial-one testimonial-one--home">
    <div
      className="testimonial-one__bg"
      style={{
        backgroundImage: "url(assets/images/shapes/testimonial-1-bg-2.png)"
      }}
    ></div>
    {/* /.testimonial-one__bg */}
    <div className="container">
      <div className="sec-title text-center">
        <p className="sec-title__tagline">Testimonial</p>
        {/* /.sec-title__tagline */}
        <h2 className="sec-title__title">
          What Our Customers are
          <br /> Saying?
        </h2>
      </div>
    </div>
    <div className="container">
    
      <div
        className="testimonial-one__carousel trevlo-owl__carousel trevlo-owl__carousel--basic-nav trevlo-owl__carousel--with-shadow owl-theme owl-carousel"
        data-owl-options='{
		  "items": 3,
		  "margin": 42,
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
		  "768":{
		  "items": 2
		  },
		  "1200":{
		  "items": 3,
		  "dots": false
		  }
		  }
		  }'
      >
        <Carousel autoPlay={true} autoPlaySpeed={3000} infiniteLoop={true} showIndicators={false} showThumbs={false}>
          {feedback.map((item) => (
            <div className="item" key={item.feedback_id}>
              <div className="testimonials-card">
                <div className="testimonials-card__image">
                  <img
                    src={item.feedback_img}
                    alt="img"
                  />
                </div>
                <div className="testimonials-card__meta">
                  <h5 className="testimonials-card__meta__name">{item.customer_name}</h5>
                  <p className="testimonials-card__meta__designation">{item.customer_detail}</p>
                </div>
                <div className="testimonials-card__ratings">
                  <span className="icon-star" />
                  <span className="icon-star" />
                  <span className="icon-star" />
                  <span className="icon-star" />
                  <span className="icon-star" />
                </div>
                <div className="testimonials-card__quote">{item.feedback_detail}</div>
                <button  className="trevlo-btn trevlo-btn--base mt-3" onClick={handleClick}><span>Read More</span></button>{renderFullText()}
              </div>
            </div>
          ))}
        </Carousel>

        {/* <Carousel autoPlay={true} autoPlaySpeed={3000} infiniteLoop={true} showIndicators={false} showThumbs={false}>
          {feedback.map((item) => (
            <div className="item" key={item.feedback_id}>
               <ShowMoreText
                  lines={2} // Set the number of lines to display before "Read more" link
                  more="Read more"
                  less="Read less"
                  anchorClass="read-more-link"
                  onClick={handleToggle}
                  showMore={showMore}
                >
                  {item.feedback_detail}
                </ShowMoreText>
            </div>
          ))}
        </Carousel> */}
      </div>
      
    </div>
  </section>
  )
}

export default Testmonial
