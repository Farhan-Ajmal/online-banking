import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'

function Footer() {
  return (
    <div className="footer paddingtopbottom">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-12 col-md-4 col-lg-4 widgets">
              <h3 className="heading3">About</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
              <h3 className="heading3">Connect with us</h3>
              <ul>
                <li><a href=""><FaFacebookF/></a></li>
                <li><a href=""><AiOutlineTwitter /></a></li>
                <li><a href=""><AiOutlineInstagram /></a></li>
                <li><a href=""><AiOutlineDribbble /></a></li>
                <li><a href=""><AiFillLinkedin /></a></li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 navigations">
              <div className="row">
                <h3 className="heading3">Navigations</h3>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 f-n-columns">
                  <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Process</a></li>
                    <li><a href="">About Us</a></li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 f-n-columns">
                  <ul>
                    <li><a href="">Press</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Privacy</a></li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 f-n-columns">
                  <ul>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Process</a></li>
                    <li><a href="">About Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row copyright">
            <div className="col-12">
              <p className="text-center">Copyright ©2022 All rights reserved | This template is made with <span><AiFillHeart /></span> by Colorlib</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
