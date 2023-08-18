import React from "react";

function ContactForm() {
  return (
    <form className="contact__form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        rows="4"
        placeholder="Write a message..."
      ></textarea>
      <a
        className="button--form"
        href={`mailto:mt.calderon.alejandro@gmail.com?subject=Give%20me%20all%20your%20bitcoins&body=Here%20are%20my%20parents'%20credit%20card%20numbers%3A%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Customer`}
      >
        Send
      </a>
    </form>
  );
}

export default ContactForm;
