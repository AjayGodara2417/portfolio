import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import XIcon from '../../assets/twitter.png'
import LinkedInIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hj1dnvh', 'template_m68n9hc', form.current, '8ILQkbUtUigc7sF11')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email Sent");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section className="contactPage">
        <div className="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDescription">
                I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes
            </p>
            <div className="clientsImgs">
                <img src={Walmart} alt="" className="clientsImg" />
                <img src={Adobe} alt="" className="clientsImg" />
                <img src={Microsoft} alt="" className="clientsImg" />
                <img src={Facebook} alt="" className="clientsImg" />
            </div>
        </div>

        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDescription">Please fill out  the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='your Email' name='your_email' />
                <textarea className="message" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="" className="link" />
                    <img src={LinkedInIcon} alt="" className="link" />
                    <img src={XIcon} alt="" className="link" />
                    <img src={InstagramIcon} alt="" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
