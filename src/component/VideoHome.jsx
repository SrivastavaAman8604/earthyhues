import axios from 'axios'
import React,{useState,useEffect} from 'react'


const VideoHome = () => {
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         try{
    //             const response = await axios.get('https://www.earthyhues.com/newadmin/api-home-page-video')
    //             setData(response.data)
    //         }catch(error){
    //             console.error('Error fetching video:',error)
    //         }
    //     };
    //     fetchData() 
    // },[])

  return (
    <div>
      <section className="video-one">
        <div className="video-one__bg jarallax" data-jarallax="" data-speed="0.3" data-imgposition="50% -100%" style={{ backgroundImage: "url(assets/images/backgrounds/video-bg-1.jpg)" }} />
        <div className="container">
          <div className="video-one__content wow fadeInUp" data-wow-delay="100ms">
            <div className="row">
              {/* {data.map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <iframe src={item.youtube_video_src} title="video section" style={{ width: '100%', height: '60vh' }} />
                </div>
              ))} */}
              <div className="col-lg-6" >
                  <iframe src="https://www.youtube.com/embed/oBWjAZrhO3k?autoplay=1&mute=1&loop=1&playlist=oBWjAZrhO3k" title="video section" loading="lazy" style={{ width: '100%', height: '60vh' }} />
                </div>
                <div className="col-lg-6" >
                  <iframe src="https://www.youtube.com/embed/H_ZVax0-ZtA?autoplay=1&mute=1&loop=1&playlist=H_ZVax0-ZtA" title="video section" loading="lazy" style={{ width: '100%', height: '60vh' }} />
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoHome
