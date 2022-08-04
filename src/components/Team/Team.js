import React from 'react'
import person_1 from '../../img/person_1.webp'
import person_2 from '../../img/person_2.webp'
import person_3 from '../../img/person_3.webp'
import person_4 from '../../img/person_4.webp'

function Team() {
  return (
    <div className="team">
        <div className="container">
          <div className="row justify-content-center">
              <div className="team-title mb-5">
                <strong className="f-strong">LEADERSHIP</strong>
                <h2 className="heading2">Our team</h2>
              </div>
              <div className="col-8 justify-content-center">
                <div className="row justify-content-around">
                  <div className="col-6">
                    <img className="img-fluid" src={person_1} alt="" />
                    <div className="px-3">
                     <h4>James Watson</h4>
                     <span className="designation">Co-Founder & CEO</span>
                    </div>      
                  </div>
                  <div className="col-6 mt-5">
                    <img className="img-fluid" src={person_2} alt="" />
                    <div className="px-3">
                     <h4>Carl Anderson</h4>
                     <span className="designation">Co-Founder & CEO</span>
                    </div> 
                  </div>
                </div>
                <div className="row justify-content-around">
                  <div className="col-6">
                    <img className="img-fluid" src={person_3} alt="" />
                    <div className="px-3">
                     <h4>James Watson</h4>
                     <span className="designation">Co-Founder & CEO</span>
                    </div>      
                  </div>
                  <div className="col-6 mt-5">
                    <img className="img-fluid" src={person_4} alt="" />
                    <div className="px-3">
                     <h4>Carl Anderson</h4>
                     <span className="designation">Co-Founder & CEO</span>
                    </div> 
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
  )
}

export default Team
