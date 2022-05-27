import React from 'react';
import banner1 from '../../assets/Banner/banner1.jpg'
import banner2 from '../../assets/Banner/banner2.jpg'
import banner3 from '../../assets/Banner/banner3.jpg'
import banner4 from '../../assets/Banner/banner5.jpg'

const Banner = () => {
  return (
     <div>
       <div className="carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero " style={{
            background: `url(${banner1})`,
            backgroundSize: 'cover'
          }}>
            {/* <div className="hero-overlay"></div> */}
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-3 text-4xl font-bold text-base-700">DJI ACTION 2</h1>
                <p className="mb-5">More Than Action</p>
                <button className="btn btn-outline text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button className="btn btn-outline btn-success btn-sm">Purchase</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-sm ">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero max-h-screen" style={{
              background: `url(${banner2})`,
              backgroundSize: 'cover'
            }}>
            
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-3 text-4xl font-bold text-base-700">DJI ACTION 2</h1>
                <p className="mb-5">More Than Action</p>
                <button className="btn btn-outline text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button className="btn btn-outline btn-success btn-sm">Purchase</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-sm">❮</a> 
            <a href="#slide3" className="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{
              background: `url(${banner3})`,
              backgroundSize: 'cover'
            }}>
            
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-3 text-4xl font-bold text-base-700">DJI ACTION 2</h1>
                <p className="mb-5">More Than Action</p>
                <button className="btn btn-outline text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button className="btn btn-outline btn-success btn-sm">Purchase</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-sm">❮</a> 
            <a href="#slide4" className="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{
              background: `url(${banner4})`,
              backgroundSize: 'cover'
            }}>
            
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-3 text-4xl font-bold text-base-700">DJI ACTION 2</h1>
                <p className="mb-5">More Than Action</p>
                <button className="btn btn-outline text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button className="btn btn-outline btn-success btn-sm">Purchase</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-sm">❮</a> 
            <a href="#slide1" className="btn btn-circle btn-sm">❯</a>
          </div>
        </div>
      </div>
     </div>
    
  );
};

export default Banner;