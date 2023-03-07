import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./contact.css"
import { useState } from "react";



const Contact = ()=>{
    const [formStatus, setFormStatus] = useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
    setFormStatus('Submited')
  }
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