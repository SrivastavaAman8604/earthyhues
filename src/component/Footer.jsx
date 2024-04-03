import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };

  return (
      <footer className="main-footer @@extraClassName">
        <div
        className="main-footer__bg"
        style={{
            backgroundImage: "url(assets/images/backgrounds/footer-bg.png)"
        }}
        />
        {/* /.main-footer__bg */}
        <div className="container">
        <div className="row">
            {/* /.col-md-6 */}
            <div
            className="col-lg-6 col-xl-4 wow animated fadeInUp"
            data-wow-delay="0.7s"
            data-wow-duration="1500ms"
            >
            <div className="footer-widget footer-widget--newsletter">
                <h2 className="footer-widget__title">Company</h2>
                <div className="main-footer__logo-box text-center">
                <img
                    src="../assets/earthyhues-image/logo.png"
                    alt="logo-dark"
                    className="main-footer__logo"
                />
                </div>
                <ul className="main-footer__social text-center ms-5">
                    <li className="main-footer__social-item ms-2">
                        <a
                        href="https://www.facebook.com/EarthyHuesTours"
                        className="main-footer__social-link"
                        >
                        <i className="fab fa-facebook-f" />
                        </a>
                    </li>
                    <li className="main-footer__social-item ">
                        <a
                        href="https://www.linkedin.com/company/earthyhues/"
                        className="main-footer__social-link"
                        >
                        <i className="fab fa-linkedin-in" />
                        </a>
                    </li>
                    <li className="main-footer__social-item ">
                        <a
                        href="https://www.instagram.com/earthyhuestours/"
                        className="main-footer__social-link"
                        >
                        <i className="fab fa-instagram" />
                        </a>
                    </li>
                    <li className="main-footer__social-item ">
                        <a
                        href="https://www.youtube.com/channel/UCFVeeklGY_eomA5bMkrfOJw"
                        className="main-footer__social-link"
                        >
                        <i className="fab fa-youtube" />
                        </a>
                    </li>
                </ul>
                <div className="mc-form__response" />
                {/* /.mc-form__response */}
            </div>
            {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
            className="col-lg-4 col-md-4 col-sm-6 col-xl-2 wow animated fadeInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1500ms"
            >
            <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">About Us</h2>
                {/* /.footer-widget__title */}
                <ul className="footer-widget__links">
                <li onClick={scrollToTop}>
                    <Link href="/">Destinations</Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link to="/">Passion</Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link to="./PrivacyPolicy">Privacy Policy</Link>
                </li>
                <li onClick={scrollToTop}>
                <Link to="/testimonial">Testimonials</Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link to="/WBlog">Custom Tour</Link>
                </li>
                </ul>
                {/* /.footer-widget__links */}
            </div>
            {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
            className="col-lg-3 col-md-4 col-sm-6 col-xl-2 wow animated fadeInUp"
            data-wow-delay="0.3s"
            data-wow-duration="1500ms"
            >
            <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Explore</h2>
                {/* /.footer-widget__title */}
                <ul className="footer-widget__links">
                <li onClick={scrollToTop}>
                    <Link to="/">Our Story</Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link to="./Why-EarthyHues">Why Earthy Hues?</Link>
                </li>
                <li onClick={scrollToTop}>
                <Link to="/conscious-travel">Conscious Travel</Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link to="./RefundPolicy">Refund Policy</Link>
                </li>
                <li onClick={scrollToTop}>
                    <Link to="./TermsOfServices">Terms of Service</Link>
                </li>
                </ul>
                {/* /.footer-widget__links */}
            </div>
            {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
            className="col-lg-6 col-md-4 col-xl-4 wow animated fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="1500ms"
            >
            <div className="footer-widget footer-widget--contact">
                <h2 className="footer-widget__title">Contact</h2>
                {/* /.footer-widget__title */}
                <p className="footer-widget__address">
                2210, 2nd Floor,
                2nd Main Road, 6th Block,
                Jayanagar, 
                <br />
                Bangalore, Karnataka - 560070
                </p>
                <ul className="footer-widget__info">
                <li>
                    {" "}
                    <span className="icon-phone-1" />{" "}
                    <Link to="tel:+91 89042 78007">+91 89042 78007</Link>
                </li>
                <li>
                    {" "}
                    <span className="icon-envelope" />{" "}
                    <Link to="mailto:info@earthyhues.com">info@earthyhues.com</Link>
                </li>
                </ul>
                {/* /.footer-widget__info */}
            </div>
            {/* /.footer-widget */}
            </div>
        </div>
        {/* /.row */}
        </div>
        {/* /.container */}
        <div className="main-footer__bottom">
        <div className="container">
            <div className="main-footer__bottom-inner">
            <p className="main-footer__copyright">
                © Copyright <span className="dynamic-year" /> by{" "}
                <a
                href="https://www.inforbit.in"
                className="copyright-a"
                target="blank"
                >
                Semi Colon Solutions
                </a>{" "}
                All Rights Reserved.
            </p>
            </div>
            {/* /.main-footer__inner */}
        </div>
        {/* /.container */}
        </div>
        {/* /.main-footer__bottom */}
    </footer>
  )
}

export default Footer
