import React from "react";
import "./ContactPage.css/";

const ContactPage = () => {
  return (
    <div id="Contacts" className="ContactsContainer">
      <div className="GetInTouch">
        <h1>
          <strong>Get in touch</strong>
        </h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div>
        <div>
          <div className="FindMe">
            <h2>Find Me</h2>
            <p>Email: sibumyeki@gmail.com</p>
            <p>Tel: +27 82 359 9715</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="input-text">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
          </div>

          <div>
            <button class="btn">
              Send <i class="uil uil-message"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
