import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from './Loading'
import { Helmet } from 'react-helmet';

function Blog() {
    const [data, setData] = useState([]);
    const [selectedBlogId, setSelectedBlogId] = useState(null);
    const [loading, setLoading] = useState(true);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };

    useEffect(()=>{
        const fetchData = async ()=>{
          try{
            const response = await axios.get('https://www.earthyhues.com/newadmin/api-travel-blog')
            setData(response.data)
          }catch(error){
            console.error('Error fetching data:',error)
          }  finally {
            setLoading(false); // Set loading to false regardless of success or failure
          }
        }
        fetchData()
    },[])

    const handleBlogClick = (blogId) => {
      setSelectedBlogId(blogId);
    };

    if (loading) {
      return <Loading />; 
    }
    
    return (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Travel Blog | Earthy Hues</title>
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
                        <li>Travel Blog</li>
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
            Travel Blog
            </span>
          </h3>
        </div>
      </section>
            <section className="tour-listing-details tour-listing-details-right section-space">
           
  <div className="blog-details-page section-space-top">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <div className="sidebar-blog sidebar-blog--left">
            <aside className="widget-area">
              {/* <div
                className="sidebar-blog__single sidebar-blog__single--search wow animated fadeInUp"
                data-wow-delay="0s"
                data-wow-duration="1500ms"
              >
                <form action="#" className="sidebar-blog__search">
                  <button type="submit" aria-label="search submit">
                    <span className="icon-search" />
                  </button>
                  <input type="text" placeholder="Type Here" />
                </form>
              </div> */}
              <div
                className="sidebar-blog__single sidebar-blog__single--posts wow animated fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1500ms"
              >
                <h4 className="sidebar-blog__title">Latest posts</h4>
                <ul className="sidebar-blog__posts ">
                  {data.map((item)=>(
                  <li className="sidebar-blog__posts-item" key={item.blog_id}>
                    <div className="sidebar-blog__posts-image">
                      <img
                        src={item.blog_image}
                        alt="latest-post"
                        style={{width:'60px',height:'60px'}} />
                    </div>
                    <div className="sidebar-blog__posts-content">
                      <h4 className="sidebar-blog__posts-title" onClick={() => handleBlogClick(item.blog_id)}>
                        <a href={`#blog-${item.blog_id}`}>
                          {item.blog_head_name}
                        </a>
                      </h4>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
              <div
                className="sidebar-blog__single sidebar-blog__single--tags wow animated fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="1500ms"
              >
                <h4 className="sidebar-blog__title">Tags</h4>
                {/* /.sidebar-blog__title */}
                <div className="sidebar-blog__tags">
                  <a
                    href="blog-details-right.html"
                    className="trevlo-btn trevlo-btn--white-two"
                  >
                    <span>Travel</span>
                  </a>
                  <a
                    href="blog-details-right.html"
                    className="trevlo-btn trevlo-btn--white-two"
                  >
                    <span>Travel guide</span>
                  </a>
                  <a
                    href="blog-details-right.html"
                    className="trevlo-btn trevlo-btn--white-two"
                  >
                    <span>Travel vibes</span>
                  </a>
                  <a
                    href="blog-details-right.html"
                    className="trevlo-btn trevlo-btn--white-two"
                  >
                    <span>Tourism</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
        
        <div className="col-xl-8 col-lg-7">
            {data.map((item)=>(
            <div id={`blog-${item.blog_id}`} className="sidebar-blog__single--search mb-5" key={item.blog_id}>
              <Link to={`/blog/${item.blog_url}`} onClick={scrollToTop}>
            <div className="blog-details">
                <div className="blog-card-three">
                    <div className="blog__card">
                        <div className="blog__card-img wow animated fadeInUp" data-wow-delay="0s" data-wow-duration="1500ms">
                    <img src={item.blog_image} alt={item.blog_head_name}/>
                    {/* <div className="blog__card-date">
                        <h4 className="blog__card-date-number">31</h4>
                        <p className="blog__card-date-month">July 2023</p>
                    </div> */}
                  {/* /.blog__card-date */}
                </div>
                {/* /.blog__card-img */}
                <div
                  className="blog__card-content wow animated fadeInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <ul className="blog__card-meta">
                    {/* <li>
                      <span className="blog__card-meta-icon icon-user" />
                      <span className="blog__card-meta-author">By Admin</span>
                    </li>
                    <li>
                      <span className="blog__card-meta-icon icon-bubble-chat-1" />
                      <span className="blog__card-meta-author">2 Comment</span>
                    </li> */}
                  </ul>
                  {/* /.blog__card-meta */}

                  

                  <h3 className="blog__card-title">
                   <Link to={`/blog/${item.blog_url}`}>
                   {item.blog_head_name}
                   </Link>

                  </h3>
                  <p className="blog__card-text" dangerouslySetInnerHTML={{__html: item.blog_intro}}>
                    {}
                  </p>
                </div>
                {/* /.blog-details__card-content */}
              </div>
              {/* /.blog-details__card */}
            </div>
            {/* /.blog-card-three */}
          </div>
          {/* /.blog-details */}
          <div className="post-info">
            <div className="post-category">
              <h3 className="post-category__title">Tags:</h3>
              <div className="post-category__btn-group">
              {item.blog_tags.map((tag) => (
                  <a key={tag.blog_nid} className="post-category__btn trevlo-btn trevlo-btn--base">
                    <span>{tag.blog_tag}</span>
                  </a>
                ))}
              </div>
              {/* /.post-category__btn-group */}
            </div>
            {/* /.post-category */}
            <div className="post-tag">
              <h3 className="post-tag__title">Category:</h3>
              <div className="post-tag__text-box">
                <a href="blog-list-left.html" className="post-tag__text">
                  {item.blog_category}
                </a>
                
              </div>
              {/* /.post-tag__text-box */}
            </div>
            {/* /.post-tag */}
          </div>
          </Link>
        </div>
        ))}
        {/* /.col-xl-8 col-lg-7 */}
      </div>
      {/* /.row */}
    </div>
    </div>
    {/* /.container */}
  </div>
 

            </section>
            <button
       className="post-category__btn trevlo-btn trevlo-btn--base"
            style={{
                position: 'fixed',
                bottom: '5%',
                left: '5%',
                zIndex: 99999,
                padding: '10px 24px'
            }}
            onClick={scrollToTop}
        >
          <span>Scroll to top</span>
        </button>
        </div>
    )
}

export default Blog
