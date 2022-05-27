import React, { useState } from 'react';

const Blogs = () => {
  const code = 
  `
    const value = products.find(product=>product===name)
         
  `
  return (
    <div className=" mx-20">
      <div className="card ">
        <div className="card-body flex gap-5">
          <div className="border p-3 rounded">
            <h2 className="card-title text-secondary">How will you improve the performance of a React Application?</h2>
            <p>We can improve React application performance many way. for example, 1: We can avoid online link to use in application. 2: When we need to use component state for application then we use component. otherwise we don't need. 3: Code-splitting in React using dynamic import and 4: do need to use in application big size image. </p>
          </div>
          <div className="border p-3 rounded">
            <h2 className="card-title text-secondary">What are the different ways to manage a state in a React application?</h2>
            <p>the Four ways we can manage react state. 
            <ul>
              <li>
                local state: local state is a useState we manage in one or another component.
              </li>
              <li>
                Global state: Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least
              </li>
              <li>
              Server state: Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
              </li>
              <li>
              URL state: URL state is often missing as a category of state
              </li>
            </ul>  
            </p>
          </div>
          <div className="border p-3 rounded">
            <h2 className="card-title text-secondary">How does prototypical inheritance work?</h2>
            <p>When we read a property from object in javascript, and it's missing, JavaScript automatically takes it from the prototype. In code, this way prototypical inheritance work.</p>
          </div>
          <div className="border p-3 rounded">
            <h2 className="card-title text-secondary">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
            <p>The React useState() hook is a best wey to track in function component data. Suppose, if we set default data in products then after changing data it will not change itself. But useState always track when products have changed. then it will do automatic push or remove data. </p>
          </div>
          <div className="border p-3 rounded">
            <h2 className="card-title text-secondary">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p>To find name in an array we can use find function. below i have added implement
            {code}
            </p>
          </div>
          <div className="border p-3 rounded">
            <h2 className="card-title text-secondary">What is a unit test? Why should write unit tests?</h2>
            <p>Unit testing is a software development process to ensure that a section of an application meets its design and behaver as intended. We should write unit test so that we can repeatedly run and check that no bugs have been introduced. it unit test are slow. then we can skip running</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

