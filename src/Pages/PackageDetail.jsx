import React,{useState, useEffect} from 'react'
import './PackageDetail.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PackageDetail = () => {

    const { package_id } = useParams();

    const [data, setData] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.earthyhues.com/apipackages/${package_id}`);
                setData(response.data[0]);
                // console.log(response.data);
            } catch (error) {
                console.log('Error while loading:', error.response.data);
            }
        };
        fetchData();
    }, [ package_id ]);


    return (
    <div>
            {/* <section className="page-header">
                 <div className="page-header__bg" /> 
                <div className="container">
                    <div className="page-header__breadcrumb-box">
                        <ul className="trevlo-breadcrumb">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>{data.package_title}</li>
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
                {data.package_title}
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
                {/* {data.map((item) => ( */}
                     <div className="tour-listing-details__row row">
                     <div className="col-xl-4">
                             <aside className="tour-listing-details__sidebar">
                                  <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center"
                                     data-wow-delay="0.1s" data-wow-duration="1500ms">
                                         <img src={data.package_img} alt="image" className='w-100'/>
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
                             {/* Spectacles of the Thar */}
                             {data.package_title}
                             </h3>
                         </div>
                         <p
                             className="tour-listing-details__overview-text wow animated fadeInUp"
                             data-wow-delay="0.1s"
                             data-wow-duration="1500ms"
                         >
                             {data.package_intro}
                         </p>
                         </div>
                         {/* /.tour-listing-details__explore */}
                         <div className="tour-listing-details__included">
                         {/* <h3 className="tour-listing-details__title tour-listing-details__included-title">
                             Included/Exclude
                         </h3> */}
                         <div className="row">
                             <div className="col-lg-12 col-md-12 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                <ul className="tour-listing-details__included-list-one">

                                {data && data.highlights_details && data.highlights_details.map((items) => (
                                    <li key={items.highlights_id}>
                                        <i className="fas fa-check-circle" />
                                        <p>{items.highlights_content}</p>
                                    </li>
                                ))}

                                </ul>
                            </div>
                         </div>
                         </div>
                         </div>
                         {/* /.col-xl-8 */}
                         
                     {/* /.col-xl-4 */}
                     </div>
                {/* ))} */}


                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>

            {/* TimeLine */}
            <section style={{backgroundColor: 'rgba(13, 169, 201, 1)'}}>
                <div class="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={data.itinerary_img} alt="image" className='w-100'/>
                        </div>
                        <div className="col-lg-8">
                            <div class="main-timeline-5">
                            {data && data.itinerary_daywise && data.itinerary_daywise.map((items)=>(
                                <div class="timeline-5 right-5" key={items.id}>
                                    <div class="card">
                                        <div class="card-body p-4">
                                            <div className="d-flex">
                                            <h5 style={{color: '#13a5b6'}}>Day {items.id+1} &nbsp;&nbsp;&nbsp;</h5>
                                            <h5>{items.day_head}</h5>
                                            <button class="btn ms-auto dropdown-toggle" type="button" data-bs-toggle="collapse"
                                                data-bs-target={`#collapseExample${items.id}`} aria-expanded="false"
                                                aria-controls={`#collapseExample${items.id}`}>
                                                
                                            </button>
                                            </div>
                                            <div class="collapse" id={`collapseExample${items.id}`}>
                                                <p class="mt-2">{items.day_head_details} 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TimeLine End*/}

            <section className=" mt-5">
                <div className="container">
                    <div className="tour-listing-details__row row">
                        <div className="col-xl-12">
                            <div className="tour-listing-details__amenities">
                                <h3 className="tour-listing-details__title tour-listing-details__amenities-title">
                                    Tour Activities
                                </h3>
                                <div className="tour-listing-details__amenities-row row">
                                    {data && data.included_activities && data.included_activities.map((items)=>(
                                        <div className="col-xl-3 col-lg-3 col-sm-6 wow animated fadeInUp"
                                        data-wow-delay="0.1s" data-wow-duration="1500ms" key={items.id}>
                                            <div className="tour-listing-details__amenities-content">
                                                <i className="fas fa-check-circle" />
                                                <h4 className="tour-listing-details__amenities-content-title">
                                                {items.included_activities_title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tour-listing-details__amenities">
                                <h3 className="tour-listing-details__title tour-listing-details__amenities-title">
                                Possible Extensions
                                </h3>
                                <div className="tour-listing-details__amenities-row row">
                                    {data && data.possible_extensions && data.possible_extensions.map((items)=>(
                                        <div
                                        className="col-xl-3 col-lg-3 col-sm-6 wow animated fadeInUp"
                                        data-wow-delay="0.1s"
                                        data-wow-duration="1500ms"
                                        key={items.id}
                                        >
                                        <div className="tour-listing-details__amenities-content">
                                            <i className="fas fa-check-circle" />
                                            <h4 className="tour-listing-details__amenities-content-title">
                                            {items.extended_activities_title}
                                            </h4>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tour-listing-details__amenities">
                            <h3 className="tour-listing-details__title tour-listing-details__amenities-title">
                            What’s Included
                            </h3>
                            <div className="tour-listing-details__amenities-row row">
                                {data && data.whats_included && data.whats_included.map((items)=>(
                                <div className="col-xl-4 col-lg-4 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.1s" data-wow-duration="1500ms" key={items.id}>
                                    <div className="tour-listing-details__amenities-content ">
                                        <i className={`fas fa-${items.icon}`} />
                                        
                                        <h4 className="tour-listing-details__amenities-content-title">
                                        {items.title}
                                        </h4>
                                    </div>
                                </div>
                                ))}
                                
                            </div>
                            </div>
                            <div className="tour-listing-details__amenities">
                            <h3 className="tour-listing-details__title tour-listing-details__amenities-title">Gallery</h3>
                                <div className="row">
                                {data && data.gallery && data.gallery.map((items)=>(
                                    <div className="col-lg-2 col-ms-2">
                                        <img src={items.small_image} alt={items.alt} className='w-100 h-100 '/>
                                    </div>
                                ))}
                                </div>
                                </div>
                            <div className="tour-listing-details__amenities">
                            <h3 className="tour-listing-details__title tour-listing-details__amenities-title">
                            Things to Carry
                            </h3>
                            <div className="tour-listing-details__amenities-row row">
                            {data && data.things_to_carry && data.things_to_carry.map((items)=>(
                                <div
                                className="col-xl-6 col-lg-6 col-sm-6 wow animated fadeInUp"
                                data-wow-delay="0.1s" data-wow-duration="1500ms" key={items.id}>
                                    <div className="tour-listing-details__amenities-content ">
                                        <i className="fas fa-briefcase" />
                                        <h4 className="tour-listing-details__amenities-content-title">
                                        {items.title}
                                        </h4>
                                    </div>
                                </div>
                                ))}
                                
                            </div>
                            </div>
                                <div className="product-details__reviews ">
                                    <div className="container-fluid ">
                                        <div className="product-details__reviews-comment row">
                            {data && data.testimonials && data.testimonials.map((items)=>(
                                        <div className="col-xl-4 col-lg-4 col-sm-6 wow animated fadeInUp" key={items.id}>
                                            <div className="testimonial shadow">
                                                <span className="icon fa fa-quote-left" />
                                                <p className="description">
                                                   {items.testimonials_details.substring(0,200)}...
                                                </p>
                                                <div className="testimonial-content">
                                                    <div className="pic">
                                                        <img src={items.testimonials_img} alt="" style={{borderRadius: '50%'}}/>
                                                    </div>
                                                    <h3 className="title text-black pt-3">
                                                        <a href={`/TestimonialDetail/${items.page_url}`}>
                                                            {items.customer_name}
                                                        </a>
                                                    </h3>
                                                    <span className="post">{items.customer_details}</span>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/* /.col-xl-8 */}
                        {/* <div className="col-xl-4 col-lg-4">
                            <aside className="tour-listing-details__sidebar">
                                
                                
                               
                            </aside>
                        </div> */}
                    {/* /.col-xl-4 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>

        <div className="container mt-5">
            <div className="sec-title text-center">
                <p className="sec-title__tagline">World’s best Nature Travel Experience</p>
                
                <h2 className="sec-title__title">
                Similar Packages
                </h2>
            </div>
        
    <section className="tour-type-two home_page card-deck">
      <div className="container">
        <div className="row">
        {data && data.similar_packages && data.similar_packages.map((items)=>(
            <div className="col-lg-3 col-md-6 wow fadeInUp my-5" data-wow-delay="100ms" key={items.id}> 
            <div className="tour-type-two__box">
              <div className="tour-type-two__box__flipper">
                <div className="tour-type-two__box__front">
                  <div className="tour-type-two__box__front__image">
                  <div className='testcontent'>
                    <img
                      src={items.package_img}
                      alt={items.package_url}
                    //   style={{aspectRatio: '3/2'}}
                        className='h-100 testimg'
                    />
                  </div>
                  </div>
                  <div className="tour-type-two__box__front__content py-5">
                    {/* <div className="tour-type-two__box__front__icon">
                      <span className="icon-tent-Fill" />
                    </div> */}
                    <h5 className="tour-type-two__box__front__title">
                      {items.package_title}
                    </h5>
                    <p className="tour-type-two__box__front__text" dangerouslySetInnerHTML={{__html: items.dates_of_travel}}>
                    </p>
                    {/* Explore More */}
                  </div>
                </div>
                <div className="tour-type-two__box__back">
                  <div className="tour-type-two__box__back__image">
                    <img
                      src={items.upcomingtrip_image}
                      alt="trevlo"
                    />
                  </div>
                  <div className="tour-type-two__box__back__content" style={{ WebkitTextSizeAdjust: '100%' }}>
                    <div className="tour-type-two__box__back__icon">
                      <span className="icon-tent-Fill" />
                    </div>
                    {/* <h5 className="tour-type-two__box__back__title">
                      {items.upcomingtrip_name}
                    </h5> */}
                    
                    <p className="tour-type-two__box__back__text p-2" style={{fontSize: '12px', lineHeight:'18px'}} dangerouslySetInnerHTML={{__html: items.package_intro.substring(0,250)}}>
                    </p>
                    {/* <a href='/'>Explore More</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
          </div>
      </div>
    </section>
    </div>

    </div>
  )
}

export default PackageDetail;
