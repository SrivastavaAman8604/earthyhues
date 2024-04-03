import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Testimonial() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get('https://www.earthyhues.com/api-testimonials')
                setData(response.data)
            }catch(error){
                console.error('Error fetching Testimonial:',error)
            }
        };
        fetchData() 
    },[])


    return (
        <div>
            <section className="page-header">
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
            </section>
            <section className='my-5 '>
                <div className="container">
                    <div className="row">
                        {data.map((index) => (
                        <div className="col-lg-4" key={index.testimonials_id}>
                           <div className="card h-100" style={{border: 'none'}}>
                           <div className="card-height">
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
                                  
                                   <a href={`/testimonial/${index.testimonials_url}`}>Read More</a>
                               </div>
                           </div>
                           </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
