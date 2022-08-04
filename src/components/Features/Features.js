import React from 'react'
import coins from '../../img/coins.svg'
import stats from '../../img/stats.svg'
import garage from '../../img/garage.svg'
import './Features.css'

function Features() {
  return (
    <div className="features paddingtopbottom">
        <div className="container">
            <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-duration="2000">
                <strong className="f-strong">Awesome Features</strong>
                <h2 className="heading2">Cool Features</h2>
                <p className="para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 f-columns" data-aos="fade-up" data-aos-duration="300">
                    <div className="f_img"> 
                        <img src={coins} className="img-fluid" alt="" />
                    </div>
                    <h3 className="heading3">Cash Collection</h3>
                    <p>Manage your invoces from creation to payment. With Upflow you'll collect 100% of.</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 f-columns" data-aos="fade-up" data-aos-duration="600">
                    <div className="f_img"> 
                        <img src={stats} className="img-fluid" alt="" />
                    </div>
                    <h3 className="heading3">Analytics</h3>
                    <p>Manage your invoces from creation to payment. With Upflow you'll collect 100% of.</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 f-columns" data-aos="fade-up" data-aos-duration="900">
                    <div className="f_img"> 
                        <img src={garage} className="img-fluid" alt="" />
                    </div>
                    <h3 className="heading3">Payment</h3>
                    <p>Manage your invoces from creation to payment. With Upflow you'll collect 100% of.</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 f-columns" data-aos="fade-up" data-aos-duration="300">
                    <div className="f_img"> 
                        <img src={coins} className="img-fluid" alt="" />
                    </div>
                    <h3 className="heading3">Cash Collection</h3>
                    <p>Manage your invoces from creation to payment. With Upflow you'll collect 100% of.</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 f-columns" data-aos="fade-up" data-aos-duration="600">
                    <div className="f_img"> 
                        <img src={stats} className="img-fluid" alt="" />
                    </div>
                    <h3 className="heading3">Analytics</h3>
                    <p>Manage your invoces from creation to payment. With Upflow you'll collect 100% of.</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 f-columns" data-aos="fade-up" data-aos-duration="900">
                    <div className="f_img"> 
                        <img src={coins} className="img-fluid" alt="" />
                    </div>
                    <h3 className="heading3">Payment</h3>
                    <p>Manage your invoces from creation to payment. With Upflow you'll collect 100% of.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
