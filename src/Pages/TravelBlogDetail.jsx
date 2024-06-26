import React,{ useState , useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Loading from './Loading'
import { Helmet } from 'react-helmet';

const TravelBlogDetail = () => {

    const { travel_blog_id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.earthyhues.com/newadmin/api-travel-blog/${travel_blog_id}`);
                setData(response.data[0]);
                // console.log(response.data[0]);

            } catch (error) {
                console.log('Error while loading:', error.response.data);
            }finally {
                setLoading(false); // Set loading to false regardless of success or failure
              }
        };
        fetchData();
    }, [travel_blog_id]);

    if (loading) {
        return <Loading />; 
      }

    return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${data.heading_name} | Earthy Hues`}</title>
            <meta name="description" content="React application" />
        </Helmet>
        <section className="page-header">
            <div className="page-header__bg" />
            <div className="container">
                <div className="page-header__breadcrumb-box">
                    {/* <ul className="trevlo-breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>{data.heading_name}</li>
                    </ul> */}
                </div>
            </div>
        </section>
            <section className="tour-listing-details tour-listing-details-right section-space">
                <div className="container">
                    <div className="tour-listing-details__row row">
                    {/* <div className="col-xl-4">
                            <aside className="tour-listing-details__sidebar">
                                    <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center"
                                    data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <img src="./assets/images/about/about-4-2.jpg" alt="image" />
                                    <div className="result" />
                                </div> 
                            </aside>
                        </div> */}
                    <div className="col-xl-12">
                        <div className="tour-listing-details__overview">
                        <div
                            className="wow animated fadeIn"
                            data-wow-delay="0.1s"
                            data-wow-duration="1500ms"
                        >
                            <h3 className="tour-listing-details__title tour-listing-details__overview-title ">
                            {data.heading_name}
                            </h3>
                            <h5>{data.sub_heading_name}</h5>
                            <div class="post-info" style={{marginBottom: '2px'}}>
                                  <div class="post-category"  >
                                      <div class="post-category__btn-group" >
                                        {data && data.blog_tags && data.blog_tags.map((index) => (
                                            <a href={index.package_url} class="post-category__btn trevlo-btn trevlo-btn--base" key={index.blog_tag_id}>
                                                <span>{index.blog_intro}</span>
                                            </a>
                                        ))}
                                      </div>
                                  </div>
                                </div> 
                        </div>
                        <p className="tour-listing-details__overview-text wow animated fadeInUp"
                            data-wow-delay="0.1s" data-wow-duration="1500ms"  dangerouslySetInnerHTML={{__html: data.blog_intro}}>
                                {}
                        </p>  
                        </div>
                               
                        
                        </div>
                        </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>

            <section className="tour-listing-details">
                <div className="container">
                    <div className="tour-listing-details__row row">
                    
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="tour-listing-details__overview">
                            {/* <div className="wow animated fadeIn" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                <h3 className="tour-listing-details__title tour-listing-details__overview-title mb-5">
                                Top places to visit in Bhutan</h3>
                            </div> */}
                            <div className="row">
                                <div className="col-lg-12">
                                {data && data.blog_child_para && data.blog_child_para.map((index) => (
                                    <div className="tour-listing-details__reviews-comment-box blogdet" key={index.id} >
                                    <div className="col-md-4">
                                        <img src={index.blog_image} alt={index.blog_heading} className='w-100 rounded mt-5 float-left'/>
                                    </div>
                                    <div className="tour-listing-details__reviews-content wow animated fadeInUp animated"
                                        data-wow-delay="0.3s"
                                        data-wow-duration="1500ms"
                                        style={{
                                            flex: '1',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            visibility: "visible",
                                            animationDuration: "1500ms",
                                            animationDelay: "0.3s",
                                            animationName: "fadeInUp"
                                        }}>
                                            
                                        <div className="tour-listing-details__reviews-inner-content">
                                            <div className="tour-listing-details__reviews-info pt-4">
                                                <h3 className="tour-listing-details__reviews-name">{index.blog_heading}</h3>    
                                            </div>
                                        </div>
                                        <p className="tour-listing-details__reviews-text" dangerouslySetInnerHTML={{__html: index.blog_intro}}></p>
                                    </div>
                                </div>
                                
                                ))}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default TravelBlogDetail
