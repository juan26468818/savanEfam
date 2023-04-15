import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./contact.css"
import { useState } from "react";
import emailjs from "emailjs-com";



const Contact = ()=>{
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = async (e) => {
      e.preventDefault();
      setFormStatus("Submitting...");
  
      const { name, email, message } = e.target.elements;
      const templateParams = {
        to_name: "Nombre del destinatario",
        from_name: name.value,
        from_email: email.value,
        message: message.value,
      };
  
      try {
        await emailjs.send(
          "service_mzc1w4w", // Reemplaza con tu Service ID
          "template_m84rixo", // Reemplaza con tu Template ID
          templateParams,
          "l5NBv8aSyTqzUARFo"
        );
        setFormStatus("Submitted");
      } catch (error) {
        console.error("Error sending email:", error);
        setFormStatus("Error");
      }
    };
    return (
      <div>
        <Header />
        <div className="contact__container">
          <h2 className="contact__title">Connect With Me</h2>
          <form onSubmit={onSubmit}>

            <div className="input__container">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required placeholder="Your Name..." />
            </div>

            <div className="input__container">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
                placeholder="Your Email..."
              />
            </div>

            <div className="input__container">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required placeholder="Write Your Message..."/>
            </div>
            <button className="btn" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    );
}



export default Contact;