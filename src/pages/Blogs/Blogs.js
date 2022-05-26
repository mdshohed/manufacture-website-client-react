import React from 'react';

const Blogs = () => {
  return (
    <div className=" mx-20">
      <div class="card ">
        <div class="card-body flex gap-5">
          <div className="border p-3 rounded">
            <h2 class="card-title text-secondary">How will you improve the performance of a React Application?</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus esse aliquam laudantium sed doloribus laboriosam nostrum. Ipsam est suscipit sint facere minima facilis laudantium natus? Corporis fugiat animi voluptatum natus?</p>
          </div>
          <div className="border p-3 rounded">
            <h2 class="card-title text-secondary">What are the different ways to manage a state in a React application?</h2>
            <p>We are using cookies for no reason.</p>
          </div>
          <div className="border p-3 rounded">
            <h2 class="card-title text-secondary">How does prototypical inheritance work?</h2>
            <p>We are using cookies for no reason.</p>
          </div>
          <div className="border p-3 rounded">
            <h2 class="card-title text-secondary">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
            <p>We are using cookies for no reason.</p>
          </div>
          <div className="border p-3 rounded">
            <h2 class="card-title text-secondary">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p>We are using cookies for no reason.</p>
          </div>
          <div className="border p-3 rounded">
            <h2 class="card-title text-secondary">What is a unit test? Why should write unit tests?</h2>
            <p>We are using cookies for no reason.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;