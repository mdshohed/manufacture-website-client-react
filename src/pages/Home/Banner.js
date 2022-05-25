import React from 'react';
import banner1 from '../../assets/Banner/banner1.jpg'

const Banner = () => {
  return (
     <div>
       <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <div class="hero " style={{
            background: `url(${banner1})`,
            backgroundSize: 'cover'
          }}>
            {/* <div class="hero-overlay"></div> */}
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-3 text-4xl font-bold text-base-700">DJI ACTION 2</h1>
                <p class="mb-5">More Than Action</p>
                <button class="btn btn-outline text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button class="btn btn-outline btn-success btn-sm">Purchase</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle btn-sm ">❮</a> 
            <a href="#slide2" class="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <div class="hero min-h-screen" style={{
              background: `url(${banner1})`,
              backgroundSize: 'cover'
            }}>
            
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-3 text-4xl font-bold text-base-700">DJI ACTION 2</h1>
                <p class="mb-5">More Than Action</p>
                <button class="btn btn-outline text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button class="btn btn-outline btn-success btn-sm">Purchase</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle btn-sm">❮</a> 
            <a href="#slide3" class="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <div class="hero min-h-screen" style={{
              background: `url(${banner1})`,
              backgroundSize: 'cover'
            }}>
            
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-3 text-4xl font-bold text-base-700">DJI ACTION 2</h1>
                <p class="mb-5">More Than Action</p>
                <button class="btn btn-outline text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button class="btn btn-outline btn-success btn-sm">Purchase</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle btn-sm">❮</a> 
            <a href="#slide4" class="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
          <div class="hero min-h-screen" style={{
              background: `url(${banner1})`,
              backgroundSize: 'cover'
            }}>
            
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-3 text-4xl font-bold text-base-700">DJI ACTION 2</h1>
                <p class="mb-5">More Than Action</p>
                <button class="btn btn-outline text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button class="btn btn-outline btn-success btn-sm">Purchase</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle btn-sm">❮</a> 
            <a href="#slide1" class="btn btn-circle btn-sm">❯</a>
          </div>
        </div>
      </div>
     </div>
    // <div className="">
    //   <div class="carousel w-full">
    //     <div id="item1" class="carousel-item w-full">
    //       <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" />
    //     </div> 
    //     <div id="item2" class="carousel-item w-full">
    //       <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
    //     </div> 
    //     <div id="item3" class="carousel-item w-full">
    //       <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
    //     </div> 
    //     <div id="item4" class="carousel-item w-full">
    //       <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
    //     </div>
    //   </div> 
    //   <div class="flex justify-center w-full py-2 gap-2">
    //     <a href="#item1" class="btn btn-xs">1</a> 
    //     <a href="#item2" class="btn btn-xs">2</a> 
    //     <a href="#item3" class="btn btn-xs">3</a> 
    //     <a href="#item4" class="btn btn-xs">4</a>
    //   </div>
    // </div>
    
  );
};

export default Banner;