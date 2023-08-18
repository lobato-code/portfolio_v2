import ContactForm from "./ContactForm";
import Social from "./Social";
import "./contact.css";
function Contact() {
  return (
    <div>
      {" "}
      <section id="contact" className="contact section">
        <h1 className="contact__title">Get in touch</h1>
        <div className="contact__container container">
          <ContactForm />
          <Social />
        </div>
      </section>
    </div>
  );
}

export default Contact;
