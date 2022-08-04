import React, {useState, useRef} from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';

function Form() {

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
    <div>
            <h4>Form</h4>
            
            <div className="row form">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 form-column">
              <form action="" ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">Password</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>  
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">Select</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>color lib</option>
                    <option value="1">Offers high quality free template</option>
                  </select>
                </div> 
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" checked />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Custom checkbox
                  </label>
                </div> 
                <div className="form-check mb-3">
                  <button type="submit" className="btn btn-light">Submit</button>
                </div> 
                <span>{done && "Thanks for Contacting me"}</span>
                </form>
              </div>
            </div>
            
             
        </div>
  )
}

export default Form
