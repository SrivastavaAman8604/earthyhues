import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Loading from './Loading'
import { Helmet } from 'react-helmet';

function Testimonial() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get('https://www.earthyhues.com/newadmin/api-testimonials')
                setData(response.data)
            }catch(error){
                console.error('Error fetching Testimonial:',error)
            }finally {
                setLoading(false); // Set loading to false regardless of success or failure
              }
        };
        fetchData() 
    },[])

    if (loading) {
        return <Loading />; 
      }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Testimonials | Earthy Hues</title>
                <meta name="description" content="React application" />
            </Helmet>
            {/* <section className="page-header">
                <div className="page-header__bg" />
                <div className="container">
                <div className="page-header__breadcrumb-box">
                    <ul className="trevlo-breadcrumb">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Testimonials</li>
                    </ul>
                </div>
                </div>
            </section> */}
            <section className="page-header">
        <div className="container">
          <h3
            className="offer-one__heading sec-title__heading text-left"
            style={{
              marginTop: "-62px",
              paddingLeft: '200',
              fontSize: "25px!important",
              left: 23
            }}>
            <span className="font-bernadette-rough display-4" style={{ fontSize: 51 }}>
            Testimonials
            </span>
          </h3>
        </div>
        </section>
            <section className='section-space'>
                <div className="container">
                    <div className="row">
                        {data.map((index) => (
                        <div className="col-lg-4" key={index.testimonials_id}>
                            <Link to={`/testimonial/${index.testimonials_url}`}>
                           <div className="card h-100" style={{border: 'none'}}>
                           <div className="card-height h-100">
                                <div className='testcontent'>
                                    <img className="card-img-top testimg" src={index.testimonials_image} alt={index.testimonials_url}  />
                                </div>
                               <div className="card-body">

                                   <h4 className='blog-card__title' style={{marginBottom: '5px'}}><a href={`/testimonial/${index.testimonials_url}`}>{index.testimonials_name}</a></h4>
                                   <p style={{color:'#13a5b6'}}>{index.testimonials_customer_name}</p>
                                    <div class="post-info" style={{marginBottom: '5px', paddingTop: '0px', paddingBottom:'0px'}}>
                                        <div class="post-category"  >
                                            <div class="post-category__btn-group" style={{gap: '3px'}} >
                                            {index && index.with_package && index.with_package.map((item) => (
                                                <a href={item.package_url} className="post-category__btn trevlo-btn trevlo-btn--base" style={{padding: '6px 5px', fontSize: '12px'}}>
                                                    <span>{item.package_name}</span>
                                                </a>
                                            
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                   <p className="text-justify" dangerouslySetInnerHTML={{__html: index.testimonials_details.substring(0,200)}} style={{textAlign: 'justify'}}></p>
                                  
                                   <a class=" trevlo-btn trevlo-btn--base text-white" href={`/testimonial/${index.testimonials_url}`} style={{padding: "10px 20px"}}><span>Read More</span></a>
                               </div>
                           </div>
                           </div>
                           </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
