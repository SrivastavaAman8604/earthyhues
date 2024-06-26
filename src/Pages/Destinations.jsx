import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import Loading from './Loading'
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

const Destinations = () => {
  const { destination_id } = useParams();
  const [data, setData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(true);

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
        const response = await axios.get(`https://www.earthyhues.com/newadmin/destinations/${destination_id}`);
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching destination:', error.response.data);
      }finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    
    fetchData();
  }, [destination_id]);

  if (loading) {
    return <Loading />; 
  }
  return (
    <div>
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${data.destination?.[0]?.destination_name} | Earthy Hues`}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <section className="page-header" style={{backgroundColor: '#2D2330'}}>
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
            {data.destination?.[0]?.destination_name}
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
      <section className="destination-details section-space">
        <div className="container">
        <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="destination-details__card">
                <div className="destination-details__card-content">
                {/* <h3 className="destination-details__card-title destination-details__title main-heading-title">
                  {data.destination?.[0]?.destination_name}
                </h3> */}
                <p  className="destination-details__card-text wow animated fadeInUp" data-wow-delay="0.1s"  data-wow-duration="1500ms" dangerouslySetInnerHTML={{__html: data.destination?.[0]?.destination_content}}>
                    {}
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                  {data.location?.map((location) => (
                <div className="col-xl-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" onClick={() => openModal(location)}>
                    <div key={location.location_id} className="tour-listing__card">
                    <a onClick={() => openModal(location)} className="tour-listing__card-image-box">
                      <img src={location.location_img_small} alt="assets/images/tours/tour-3-1.jpg"  className="tour-listing__card-image" style={{aspectRatio:'3/2'}}/>
                        <div className="tour-listing__card-image-overlay" />
                    </a>
                    <a onClick={() => openModal(location)} className="tour-listing__card-wishlist">
                      <span className="icon-heart" />
                    </a>
                    <div className="tour-listing__card-content p-4">
                        <div className="tour-listing__card-camera-group">
                        {/* <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="tour-listing__card-camera-btn video-popup"
                        >
                            <span className="icon-video-camera-1-1" />
                        </a> */}
                        </div>
                        <h3 className="tour-listing__card-title">
                          <a onClick={() => openModal(location)}>
                            {/* Turkey Balloons flying */}
                            {location.location_name}
                          </a>
                        </h3>
                        <p className="tour-listing__card-text text-small" style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: location.location_details.substring(0,250)}}>
                        
                        </p>
                        <Link className='trevlo-btn trevlo-btn--base text-white' style={{padding: '10px 20px'}}>
                          <span onClick={() => openModal(location)}>Read more</span>
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
                              <h2 className='text-center'>{selectedLocation.location_name}</h2>
                              <p dangerouslySetInnerHTML={{ __html: selectedLocation.location_details}}></p>
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
            {/* /.col-xl-8 col-lg-7 */}
                  <div className="col-xl-4 col-lg-5">
                    <aside className="destination-sidebar">
                      <div className="destination-sidebar__tour destination-sidebar__single">
                        <h3 className="destination-sidebar__tour-top-title">Packages</h3>
                        <div className="destination-sidebar__tour-box">
                          {data.packages?.map((packageItem) => (
                            <div key={packageItem.package_id} className="destination-sidebar__tour-item">
                              <div className="destination-sidebar__tour-img mt-2">
                                <img src={packageItem.package_img} loading="lazy" alt="destination-tour" style={{aspectRatio: '3/2'}}/>
                              </div>
                              <div className="destination-sidebar__tour-content">
                                <h4 className="destination-sidebar__tour-title">
                                  <a href={`/${packageItem.package_url}`}>
                                    {packageItem.package_title}
                                  </a>
                                </h4>
                                <p className="destination-sidebar__tour-location-text text-small">
                                  {packageItem.package_intro.substring(0,70)}...
                                <Link to={`/packages/${packageItem.package_url}`}>Read more</Link>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
              </aside>
            </div>
        </div>
        </div>
    </section>
    </div>
  );
};

export default Destinations;
