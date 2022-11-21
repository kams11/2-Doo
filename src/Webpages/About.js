import React from 'react';
import "./Css/About.css";
import company from '../Webpages/Images/company.png';

const About = () => {
  return (
    <div className='bigcontent' >
        
        <h1 className='heading' style={{textAlign:"center", paddingTop:"60px"}}>About 2-Doo </h1>
        <h5>We help businesses grow and people become more successful</h5>
        
        <div className="content" style={{paddingTop:"40px"}}>
            <div className="content1">
                <br/>
                <h2>Built first for us, then made available to others</h2>
                <br/>
                <h5>2-Doo was born out of the need for the Draugiem Group to manage their many employees. An internal application was developed, and we soon realized that we'd made a tool that could be useful for many other companies. Why not offer it to them? - we thought. And so, the development began.

                At 2-Doo, we are committed to accountability, transparency, and fairness. 2-Doo is a product designed to increase productivity in an open and empowering environment. The added benefit? Boosting your employees and motivating them to perform at 100% of their potential.</h5>
            </div>
            <div className="content2">
                <img  src={company} alt="team_image" />
            </div>
        </div>
        <div className="about-footer">
        <h2 style={{paddingTop:"35px", color:"wheat"}}>Join 400,000+ users already managing their <br/> time with the 2-Doo app</h2>
        <br />
        
        <input type="text" class="form-control-sm" placeholder="your work email" />

        <button type="button" style={{marginLeft:"5px"}} class="btn btn-outline-secondary">Get Started</button>
        <br />
        <h5 style={{paddingTop:"35px", color:"wheat"}} >Try free for 14 days. No credit card required. <br />
            By signing up, you agree to our <a href="">terms</a>  and <a href="">privacy policy</a> .</h5>
        </div>
        
    </div>
  )
}

export default About