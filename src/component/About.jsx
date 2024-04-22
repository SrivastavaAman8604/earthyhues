import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  
  return (
    <>
  <section className="about-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
          <div className="about-three__content">
            <div className="sec-title text-left">
              <p className="sec-title__tagline">GET TO KNOW US</p>
              <h2 className="sec-title__title">
                Experience the World with EarthyHues
              </h2>
            </div>
            {/* /.sec-title */}
            {/* /.sec-title */}
            <p className="about-three__content__text">
            Embark on a journey that transcends borders and embraces nature's vibrant palette with EarthyHues. Our travel experiences are crafted to immerse you in the beauty of our planet while preserving its essence.
            </p>
            <h5 className="about-three__content__quote">
            The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.
            </h5>
            <ul className="about-three__content__list">
              <li>
                <span className="fas fa-check-circle" />
                Immersive, diverse, connected travel experiences.
              </li>
              <li>
                <span className="fas fa-check-circle" />
                Awaken wanderlust, create timeless memories.
              </li>
            </ul>
            <Link to="/Our-story" className="trevlo-btn trevlo-btn--base fmob" onClick={scrollToTop}>
              <span>Our Story</span>
            </Link>
            <Link to="/why-Earthyhues" className="trevlo-btn trevlo-btn--base ms-3 fmob" onClick={scrollToTop}>
              <span>Why EarthyHues?</span>
            </Link>
          </div>
          {/* /.about-four__content */}
        </div>
      
        {/* /.col-xl-6 col-lg-6 */}
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
                <div className="about-three__image">
                  <div className="about-three__image__one trevlo-tilt"
                    data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 3, "speed": 700, "scale": 1 }'>
                    <img src="assets/images/resources/about-3-1.jpg" alt="trevlo" />
                  </div>
                  <div className="about-three__image__right wow fadeInUp" data-wow-delay="400ms">
                    {/* <div className="about-three__counter"
                      style={{backgroundImage: "url(assets/images/shapes/about-1-shape-4.png)"}}>
                        <div className="about-three__counter__number count-box">
                          <span className="count-text" data-stop={30} data-speed={1500}/> 70%
                          <br/>
                          <div>
                            <p className="about-three__counter__title">Discount</p>
                          </div> 
                        </div> 
                    </div>  */}
                  </div>
                  <div className="about-three__image__two">
                    <img src="assets/images/resources/about-3-2.png" alt="trevlo" />
                  </div>
                </div>
                {/* <div className="about-three__info wow fadeInUp" data-wow-delay="400ms">
                  <div className="about-three__info__icon">
                    <span className="icon-telephone-call-1" />
                  </div>
                  <h5 className="about-three__info__title">Do You Still Have Question?</h5>
                  <p className="about-three__info__text">Call Anytime</p>
                  <h4 className="about-three__info__number">
                    <a href="tel:+91 8904278007">+91 8904278007</a>
                  </h4>
                </div> */}
              </div>
        </div>
    </div>
  </section>
  </>
  )
}

export default About;
