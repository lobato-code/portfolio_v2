import React from 'react';

function ContactForm() {
  return (
    <form className='contact__form'>
      {/* <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        rows="4"
        placeholder="Write a message..."
      ></textarea> */}
      <a
        className='button--form'
        href={`mailto:mt.calderon.alejandro@gmail.com`}
      >
        Send me an email
      </a>
    </form>
  );
}

export default ContactForm;
