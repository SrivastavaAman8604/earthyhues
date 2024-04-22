import React from 'react'

const FeedBack = () => {
  return (
    <div>
      <>
  <section className="page-header">
    <div className="page-header__bg" />
    {/* /.page-header__bg */}
    <div className="container">
      <h2
        className="page-header__title wow animated fadeInLeft"
        data-wow-delay="0s"
        data-wow-duration="1500ms"
      >
        Enquiry
      </h2>
      <div className="page-header__breadcrumb-box">
        {/* <ul className="trevlo-breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Contact</li>
        </ul> */}
        {/* /.trevlo-breadcrumb */}
      </div>
      {/* /.page-header__breadcrumb-box */}
    </div>
    {/* /.container */}
  </section>
  {/* /.page-header */}
</>

      <section className="contact-page section-space-top">
  <div className="container">
    <div className="sec-title text-center">
      {/* <p className="sec-title__tagline">Contact Us</p> */}
      {/* /.sec-title__tagline */}
      <h1 className="sec-title__title">Thankyou For Your Valueable Feedback</h1>
      {/* /.sec-title__title */}
    </div>
    {/* /.sec-title */}
    {/* /.sec-title */}
    <form
      action="https://bracketweb.com/trevlo-html/assets/inc/sendemail.php"
      className="contact-page__form form-one row gutter-20 contact-form-validated"
    >
      <div
        className="col-md-6 wow animated fadeInUp"
        data-wow-delay="0s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <input
            type="text"
            name="name"
            id="form-one-name-input"
            placeholder="Your Name"
            className="form-one__input"
          />
        </div>
        {/* /.form-one__group */}
      </div>
      {/* /.col-md-6 */}
      <div
        className="col-md-6 wow animated fadeInUp"
        data-wow-delay="0.3s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <input
            type="email"
            name="email"
            id="form-one-email-input"
            placeholder="Email Address"
            className="form-one__input"
          />
        </div>
        {/* /.form-one__group */}
      </div>
      {/* /.col-md-6 */}
      <div
        className="col-md-6 wow animated fadeInUp"
        data-wow-delay="0s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <input
            type="tel"
            name="phone"
            id="form-one-phone-input"
            placeholder="Phone"
            className="form-one__input"
          />
        </div>
        {/* /.form-one__group */}
      </div>
      {/* /.col-md-6 */}
      <div
        className="col-md-6 wow animated fadeInUp"
        data-wow-delay="0.3s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <input
            type="text"
            name="subject"
            id="form-one-subject-input"
            placeholder="Subject"
            className="form-one__input"
          />
        </div>
        {/* /.form-one__group */}
      </div>
      {/* /.col-md-6 */}
      <div
        className="col-12 wow animated fadeInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <textarea
            name="message"
            id="form-one-message-input"
            cols={30}
            rows={10}
            placeholder="Write a Message"
            className="form-one__message form-one__input"
            defaultValue={""}
          />
        </div>
        {/* /.form-one__group */}
      </div>
      {/* /.col-12*/}
      <div
        className="col-12 wow animated fadeInUp"
        data-wow-delay="0.2s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__btn-box">
          <button
            type="submit"
            className="form-one__btn trevlo-btn trevlo-btn--base"
          >
            <span>Send Message</span>
          </button>
        </div>
        {/* /.form-one__btn-box */}
      </div>
      {/* /.col-12*/}
    </form>
    {/* /.row */}
    <div className="result" />
    {/* /.result */}
  </div>
  {/* /.container */}

</section>

    </div>
  )
}

export default FeedBack

