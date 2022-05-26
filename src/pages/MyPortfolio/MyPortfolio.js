import React from 'react';

const MyPortfolio = () => {
  return (
    <div className="mx-20 my-10">
      <div class="hero max-h-screen bg-base-200 rounded">
        <div class="hero-content flex-col lg:flex-row">
          <div class="avatar">
            <div class="w-72 rounded">
              <img src="https://i.ibb.co/GJq1Nzv/282383810-527134669084582-6953093189893616409-n.jpg" />
            </div>
          </div>
          <div className='mx-5'>
            <h1 class="text-3xl font-bold">This is Shohedul Islam</h1>
            <p class="py-5">I am student of southeast University. I am competitive programmer. besides studies, i do problem solve. i have solve 400+ problem in online judge like codeforces, lightOj, Codechef, hackerrank and SpOj, etc. Now, I have completed Programming hero full stack web developing course. at present, i have hugs knowledge about frontEnd and backEnd. like 
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
              <li><a target="_blank" href="https://electronicswarehouse-2078b.web.app/" class="link link-primary">https://electronicswarehouse-2078b.web.app</a></li>
              <li><a target="_blank" href="https://programming-tutor-28276.web.app/" class="link link-primary">https://programming-tutor-28276.web.app</a></li>
              <li><a target="_blank" href="https://apple-watch-bd.netlify.app/" class="link link-primary">https://apple-watch-bd.netlify.app</a></li>
            </ul>

            
            <h3 className='text-xl font-bold mt-3'>My Personal Site Link: <button class="btn btn-secondary btn-sm"><a target="_blank" href="https://mdshohed.me/">See Site</a></button></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;