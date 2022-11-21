import React from 'react';
import "./Css/Contact.css";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbMessageCircle } from 'react-icons/tb';
import {AiOutlineInstagram} from 'react-icons/ai';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {DiGithubFull} from 'react-icons/di';

const Contact = () => {
  return (
    <>
    <div className='contactbody'>
      <div className="banner"> <img src="https://image.rush49.com/web-images/contact_us_mobile-banner.jpg" alt="" /></div>
      <div className="contact-inner-body">
         <div className="data1">
         <BsFillTelephoneFill className='tele-icon'/>
         <h2>Talk to Sales</h2> <br />
         <h4>Interested in 2-Doo software? Just pick up the phone to chat with a member of our  team.</h4> <br />
         <h3> <a href="">+91 9110986036</a></h3>
         <div className='mycontact'> <AiOutlineInstagram/>kandy_singh_kamzz</div>
         <div className='mycontact'><RiFacebookCircleFill/>www.facebook.com/kams11.kams/</div>
         <div className='mycontact'><DiGithubFull/>www.github.com/kams11/</div>
         </div>
         <div className="data2">
            <TbMessageCircle className='msg-icon'/>
            <h2>Contact Customer Support</h2> <br />
            <h4>Sometimes you need a little help from your friends. Or a 2-Doo support rep. Don’t worry… we’re here for you.</h4> <br />
            <button type="button" class="btn btn-danger">Contact Support</button>
         </div>
      </div>


    </div>
    </>
  )
}

export default Contact;