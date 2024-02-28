import React, { useRef } from 'react';
import "./ContactPage.css/";
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_iej6yvf', 'template_q9zewbm', form.current, 'G12ed_t0df1GAIySu')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
