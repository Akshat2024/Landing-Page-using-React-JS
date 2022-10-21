import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function App() {
  return (
    <>
     <div className="container">
        <div className="Nav_div">
          <span className="image">
            BADA BUSINESS</span>
            <Link className="home" to ="/">Home</Link>
          <Link className="about" to="/about">About </Link>
          <Link className="term" to="/term">Terms of Use </Link>
          <Link className = "contacts" to="/contact">Contact Us</Link>
        </div>
        </div>
      <div className="comp"><img src="https://online.vu.edu.au/sites/default/files/field/image/Easiest_countries_to_start_a_business_main_image.jpeg"></img></div>
      <div className="heading">One Stop To All Your Business Problems...</div>
   <div className="btn"><button id="butn"> Login </button></div>
   <div className="btn2"><button id="butn2"> Sign Up </button></div>
  <div className="one">Create a Business Website and Start Growing Online.</div>
  <div className="two">Establish your small business website with all the essentials - from intuitive design features to built in management tools.</div>
  <div className="three"><button id="get">Get Started</button></div>
   <div class="parent">
        <div class="first">
            <img src="https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2021/03/14_Best_Business_Website_Examples_of_2021.png"></img>
            <div class="child3">Order Food Online</div>
            </div>
        <div class="first">
            <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109757041b232d834e2_601b1c6c1d0c39e266399be0_soundstripe.jpeg"></img>
            <div class="child3">Dining Out</div>
        </div>
        <div class="first">
           <img src="https://athemes.com/wp-content/uploads/Enzio-Business-WordPress-Theme.jpg"></img>
            <div class="child3">Nightlife & Club</div>
        </div>
    </div>
    <div className="ex">Explore Business Templates-</div>
    <div className="temp">Templates designed to set you up for success</div>
    <div className="footer">
      <div className="foot-con">Copyright@2022 BadaBusiness.com</div>
    </div>
    </> 
  );
}

export default App;
