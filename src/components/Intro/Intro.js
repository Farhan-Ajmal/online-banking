import React from 'react'
import './Intro.css'
import introImg from '../../img/intro-img.webp'

function Intro() {
  return (
    <div className="hero">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-5 col-md-5 intro" >
                    <h1 className="text-white font-weight-bold mb-4">Get Paid Easily <br/>without Hassle</h1>
                    <p className="text-white mb-4">Far far away, behind the word mountains, far from the <br/>countries Vokalia and Consonantia, there live the blind <br/>texts. Separated they live.</p>
                    <form action="#" className="sign-up-form d-flex">
                        <input type="text" className="form-control" placeholder="Enter email address" />
                        <input type="submit" className="btn btn-primary" value="Sign up" />
                    </form>
                </div>
                <div className="col-sm-12 col-lg-5 col-md-5 hero_img">
                    <img src={introImg} alt="Image" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro
