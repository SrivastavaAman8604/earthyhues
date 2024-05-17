import React, { useState , useEffect } from 'react'
import { useParams , Link} from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading'
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'justify', // Text justification
    maxWidth: '80%', // Limiting maximum width to 80% of viewport
    maxHeight: '80vh', // Limiting maximum height to 80% of viewport height
    overflowY: 'auto', // Enable vertical scrolling if content exceeds modal height
  },
};

const Passion = () => {
    const { passion_id } = useParams();
    const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const openModal = (location) => {
    setSelectedLocation(location);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedLocation(null);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.earthyhues.com/newadmin/passions/${passion_id}`);
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching Passion:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    
    fetchData();
  }, [passion_id]);

  if (loading) {
    return <Loading />; 
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${data.passion_name} | Earthy Hues`}</title>
      <meta name="description" content="React application"/>
    </Helmet>
    {/* <section className="page-header">
        <div className="page-header__bg" />
        <div className="container">
        <h2 className="page-header__title wow animated fadeInLeft" data-wow-delay="0s" data-wow-duration="1500ms">Destination Details</h2>*/}
        {/*<div className="page-header__breadcrumb-box">
            <ul className="trevlo-breadcrumb">
            <li>
                <a href="./.">Home</a>
            </li>
            <li>{data.passion_name}</li>
            </ul>
        </div>
        </div>
    </section> */}
    <section className="page-header">
        {/* <div className="page-header__bg" /> */}
        <div className="container">
        {/* <h2 className="offer-one__heading sec-title__heading " >
        
          </h2> */}
          <h3
            className="offer-one__heading sec-title__heading text-left"
            style={{
              marginTop: "-62px",
              paddingLeft: '200',
              fontSize: "25px!important",
              left: 23
            }}>
            <span className="font-bernadette-rough display-4" style={{ fontSize: 51 }}>
            {data.passion_name}
            </span>
          </h3>

          {/* <div className="page-header__breadcrumb-box">
            <ul className="trevlo-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{data.destination?.[0]?.destination_name}</li>
            </ul>
          </div> */}
        </div>
      </section>
    <section className="tour-listing-details tour-listing-details-right section-space">
        <div className="container">
        <div className="row">
            <div className="col-xl-12">
            <div className="tour-listing-details__explore">
                {/*<div
                className="wow animated fadeIn"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
                >
                 <h3 className="tour-listing-details__title tour-listing-details__explore-title main-heading-title mb-4" style={{position: 'relative'}}>
                    {data.passion_name}
                </h3> 
                </div>*/}
                {data.passion_details.split('\r\n').map((paragraph, index) => (
                    <p
                        key={index}
                        className="tour-listing-details__explore-text wow animated fadeInUp"
                        data-wow-delay="0.1s"
                        data-wow-duration="1500ms"
                    >
                        {paragraph}
                    </p>
                ))}
                
            </div>

                    
            <div className="tour-listing-details__similar container-fluid">
                <h3 className="tour-listing-details__title tour-listing-details__similar-title">
                    Our Packages
                </h3>
                <div className="row">
                {data.packages?.map((packageItem) => (
                    <div key={packageItem.package_id} className="col-md-4 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" onClick={() => openModal(packageItem)}>
                        <div className="tour-listing__card">
                        <Link
                            to={`/packages/${packageItem.package_url}`}
                            onClick={scrollToTop}
                            className="tour-listing__card-image-box">
                            <img
                            src={packageItem.package_img}
                            alt={packageItem.package_title}
                            className="tour-listing__card-image" style={{aspectRatio:'3/2'}}/>
                            <div className="tour-listing__card-image-overlay" />
                        </Link>
                        <Link
                            to={`/packages/${packageItem.package_url}`}
                            onClick={scrollToTop}
                            className="tour-listing__card-wishlist">
                            <span className="icon-heart" />
                        </Link>
                        <div className="tour-listing__card-content">
                            <div className="tour-listing__card-camera-group">
                            </div>
                            <h3 className="tour-listing__card-title">
                            <Link
                            to={`/packages/${packageItem.package_url}`} onClick={scrollToTop}>
                            {packageItem.package_title}
                            </Link>
                            </h3>
                            <p className="tour-listing__card-text text-small" style={{textAlign: 'justify'}} onClick={scrollToTop}>
                                {packageItem.package_intro.substring(0,200)}.
                            </p>
                            <Link to={`/packages/${packageItem.package_url}`} className=' trevlo-btn trevlo-btn--base text-white' style={{padding: '10px 20px'}}>
                                <span onClick={scrollToTop}>Explore More</span>
                            </Link>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={closeModal}
                          contentLabel="Location Details"
                          style={customStyles}
                        >
                          {selectedLocation && (
                            <>
                              <h2 className='text-center'>{selectedLocation.package_title}</h2>
                              <p dangerouslySetInnerHTML={{ __html: selectedLocation.package_intro}}></p>
                              <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button className='trevlo-btn trevlo-btn--base text-white' style={{padding: '10px 20px'}} onClick={closeModal}>
                                  <span>Close</span>
                                </button>
                              </div>
                            </>
                          )}
                    </Modal>
            </div>
            </div>
            {/* <div className="col-xl-4">
            <aside className="tour-listing-details__sidebar">

                <div className="row">
                    {data.package_gallery?.map((image) => (
                        <div className="col-lg-4 mb-4 mb-lg-0" key={image.package_gallery_id}>
                            <img src={image.large_image} alt={image.title} className="w-100 h-100" />
                        </div>
                    ))}
                </div>


            </aside>
            </div> */}
        </div>
        </div>
    </section>
    </>

  )
}

export default Passion
