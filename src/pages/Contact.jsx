import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{backgroundImage: `url(${pizzaLeft})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>

            <form id='contactForm' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name' placeholder='Enter Full Name...'/>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email.'/>
                <label htmlFor="phone">Phone number</label>
                <input type="text" name='phone' placeholder='Enter Your phone number'/>
                <label htmlFor="message">Message</label>
                <textarea
                     name="message" 
                     rows="6" 
                     placeholder='Enter Message' 
                     required>

                     </textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact