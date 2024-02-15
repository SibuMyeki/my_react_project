import React from 'react'
import './ContactPage.css/'

const ContactPage = () => {
return (
    <div className='nav'>
      <div class="top-header">
            <h1>Get in touch</h1>
            <span>Do you have a project in your mind, contact me here</span>
          </div>
    <div class="row">
             <div class="col">
                <div class="contact-info">
                    <h2>Find Me <i class="uil uil-corner-right-down"></i></h2>
                    <p><i class="uil uil-envelope"></i> Email: sibumyeki@gmail.com</p>
                    <p><i class="uil uil-phone"></i> Tel: +27 82 359 9715</p>
                </div>
            </div>
    </div>

    <div class="col">
                <div class="form-control">
                    <div class="form-inputs">
                        <input type="text" class="input-field" placeholder="Name" />
                        <input type="text" class="input-field" placeholder="Email" />
                    </div>
                    <div class="text-area">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div class="form-button">
                        <button class="btn">Send <i class="uil uil-message"></i></button>
                    </div>
                </div>
             </div>
          

    </div>


   
  ) 
  
}

export default ContactPage;
