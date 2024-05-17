import React from 'react';
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './component/Home';
import Destinations from './Pages/Destinations';
import Passion from './Pages/Passion';
import Footer from './component/Footer';
import Packages from './Pages/Packages';
import Testimonial from './Pages/Testimonial';
import Blog from './Pages/Blog';
import Conscious from './Pages/Conscious';
import WBlog from './Pages/WBlog';
import Affiliation from './component/Affiliation';
import PackageDetail from './Pages/PackageDetail';
import TestimonialDetail from './Pages/TestimonialDetail';
import TravelBlogDetail from './Pages/TravelBlogDetail';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfServices from './Pages/TermsOfServices';
import RefundPolicy from './Pages/RefundPolicy';
import YEarthyhues from './Pages/YEarthyhues';
import OurStory from './Pages/OurStory';
import FeedBack from './Pages/FeedBack';



function App() {

  return (
    <Router>
      <Header style={{backgroundColor: '#2D2330'}}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/destinations/' element={<Destinations/>}/> */}
        <Route path="/destinations/:destination_id" element={<Destinations/>} />
        {/* <Route path='/passion/' element={<Passion/>}/> */}
        <Route path='/passion/:passion_id' element={<Passion/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/packages/:package_id' element={<PackageDetail/>}/>
        {/* <Route path='/packages' element={<PackageDetail/>}/> */}
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/testimonial/:testimonials_id' element={<TestimonialDetail/>}/>
        {/* <Route path='/testimonialDetail' element={<TestimonialDetail/>}/> */}
        <Route path='/conscious-travel' element={<Conscious/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:travel_blog_id' element={<TravelBlogDetail/>}/>
        <Route path='/write-a-blog' element={<WBlog/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/TermsOfServices' element={<TermsOfServices/>}/>
        <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
        <Route path='/Why-EarthyHues' element={<YEarthyhues/>}/>
        <Route path='/Our-story' element={<OurStory/>}/>
        <Route path='/feedback' element={<FeedBack/>}/>
      </Routes>
      <Affiliation/>
      {/* <Call/> */}
      <Footer/>
    </Router>
  );
}

export default App;
