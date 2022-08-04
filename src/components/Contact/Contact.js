import React, {useState, useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wsu7umk', 'template_cemt771', form.current, 'y_vXcdARxVl2y-cGq')
          .then((result) => {
              console.log(result.text);
              // After sending message
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="contact">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 contact-column">
            
                <div className="contact-title">
                    <strong className="f-strong">Contact Us</strong>
                    <h2 className="heading2">Let's have a talk</h2>
                </div>
                <div className="form">
                <form action="" ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-6">
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label mb-2 ">First Name</label>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label mb-2">Last Name</label>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label mb-2">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label mb-2">Message</label>
                        <textarea className="form-control" cols="3" rows="5"></textarea>
                    </div>
                    <div className="form-check">
                        <button type="submit" className="btn btn-primary">Send Meesage</button>
                    </div> 
                    <span>{done && "Thanks for Contacting me"}</span>
                    </form>
                </div>
                
            </div>    
        </div>
    </div>
  </div>
  )
}

export default Contact
