import React from 'react'
import undraw from '../../img/undraw.svg'
import './AppFeatures1.css'

function AppFeatures1() {
  return (
    <div className="features-2">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <strong className="f-strong">Life Changing App</strong>
              <h2 className="heading2">Far far away, behind the word mountains</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
              <button className="btn btn-primary" type="submit">Get Started</button>
            </div>
            
            <div className="col-sm-12 col-md-7 col-lg-7">
              <img src={undraw} alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default AppFeatures1
