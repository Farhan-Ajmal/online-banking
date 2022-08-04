import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <div className="pricing paddingtopbottom">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="p-title">
                  <strong className="f-strong">PRICING FOR EVERYONE</strong>
                  <h2 className="heading2">Our Pricing</h2>
                  <div style={{display: "inline-block"}}>
                    <span>Monthly</span>
                    <span className="price-toggle" style={{display: "inline-block"}}><i className="indicator"></i></span>
                    <span>Yearly</span>
                    <span className="yearly-plan">save 25%</span>
                  </div>
                </div>
                
                <div className="col-sm-12 col-md-4 col-lg-4 p-columns">
                  <h3 className="heading3">Personal</h3>
                  <p>Far far away, behind the word mountains</p>
                  <hr/>
                  <div className="price1">$29</div>
                  <div className="per-month">Per <span className="month1">Month</span></div>
                  <ul className="price-ul">
                    <li>Far far away, behind the word mountains</li>
                    <li>Far far away, behind the word mountains</li>
                  </ul>
                  <button className="btn btn-primary" type="submit">Get Started</button>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 p-columns active">
                  <h3 className="heading3">Enterprise</h3>
                  <p>Far far away, behind the word mountains</p>
                  <hr/>
                  <div className="price2">$49</div>
                  <div className="per-month">Per <span className="month2">Month</span></div>
                  <ul className="price-ul">
                    <li>Far far away, behind the word mountains</li>
                    <li>Far far away, behind the word mountains</li>
                  </ul>
                  <button className="btn btn-primary" type="submit">Get Started</button>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 p-columns">
                  <h3 className="heading3">Enterprise</h3>
                  <p>Far far away, behind the word mountains</p>
                  <hr/>
                  <div className="price3">$99</div>
                  <div className="per-month">Per <span className="month3">Month</span></div>
                  <ul className="price-ul">
                    <li>Far far away, behind the word mountains</li>
                    <li>Far far away, behind the word mountains</li>
                  </ul>
                  <button className="btn btn-primary" type="submit">Get Started</button>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Pricing
