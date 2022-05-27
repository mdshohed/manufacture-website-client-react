import React from 'react';

const MyPortfolio = () => {
  return (
    <div className="mx-20 my-10">
      <div className="hero max-h-screen bg-base-200 rounded">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar">
            <div className="w-72 rounded">
              <img src="https://i.ibb.co/GJq1Nzv/282383810-527134669084582-6953093189893616409-n.jpg" />
            </div>
          </div>
          <div className='mx-5'>
            <h1 className="text-2xl mt-3">Hello,</h1>
            <h1 className="text-2xl ">This is Shohedul Islam</h1>
            <p className="py-3">I am student of southeast University. I am competitive programmer. besides studies, i do problem solve. i have solve 400+ problem in online judge like codeforces, lightOj, Codechef, hackerrank and SpOj, etc. Now, I have completed Programming hero full stack web developing course. at present, i have hugs knowledge about frontEnd and backEnd. like 
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            </p>
            
            <h3 className='text-xl font-bold'>Completed Project Link:</h3>
            <ul>
              <li><a target="_blank" href="https://electronicswarehouse-2078b.web.app/" className="link link-primary">https://electronicswarehouse-2078b.web.app</a></li>
              <li><a target="_blank" href="https://programming-tutor-28276.web.app/" className="link link-primary">https://programming-tutor-28276.web.app</a></li>
              <li><a target="_blank" href="https://apple-watch-bd.netlify.app/" className="link link-primary">https://apple-watch-bd.netlify.app</a></li>
            </ul>

            
            <h3 className='text-xl font-bold mt-3'>My Personal Site Link: <button className="btn btn-secondary btn-sm"><a target="_blank" href="https://mdshohed.me/">See Site</a></button></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;