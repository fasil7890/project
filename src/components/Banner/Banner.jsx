import React from 'react';
import banner from '../../assets/banner.png';
import './Banner.css';
import ImageSlider from '../ImageSlider/ImageSlider';

const Banner = () => {
  return (
    <div className="banner-container">
    <div className="banner-content">
      <div className="banner-content-left">
        <h1 className="banner-content-title">
          Meet Your <br /> All·in·One <br /> Creator Store
        </h1>
        <p className="banner-content-text">
          Stan is the easiest way to make money <br /> online. All of your courses,
          digital products, <br /> and bookings are now hosted in <br /> your link·in·bio
        </p>
        <button className="banner-content-click">Continue →</button>
      </div>
      <div className="banner-content-right">
        <img className='banner-image' src={banner} alt="banner" />
      </div>
    </div>
    <div className="banner-imageslider">
    <ImageSlider/>
  </div>
  </div>
  );
};

export default Banner;
