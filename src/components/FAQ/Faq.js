import React from 'react'
import './Faq.css'
import xgal_1 from '../../img/xgal_1.webp'
import xgal_2 from '../../img/xgal_2.webp'
import xgal_3 from '../../img/xgal_3.webp'
import xgal_4 from '../../img/xgal_4.webp'
import xgal_5 from '../../img/xgal_5.webp'
import xgal_6 from '../../img/xgal_6.webp'
import xbg_1 from '../../img/xbg_1.webp'
import {FaPlay} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import Form from './Form/Form'
import Accordian from '../Accordian/Accordian'

function Faq() {
  return (
    <div className="container paddingtopbottom">
        <div className="row justify-content-between" >
          <div className="col-12 col-md-6 col-lg-6">  
          <Accordian />
            {/* <!-- Gallery --> */}
            <h4>Gallery</h4>
              <div className="row gallery">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-4 mb-2">
                      <a href={xgal_1} data-lightbox="mygallery"><img className={"img-fluid"} src={xgal_1} alt="" /></a>
                    </div>
                    <div className="col-4 mb-2">
                      <a href={xgal_2} data-lightbox="mygallery"><img className="img-fluid" src={xgal_2} alt="" /></a>
                    </div>
                      <div className="col-4 mb-2">
                        <a href={xgal_3} data-lightbox="mygallery"><img className="img-fluid" src={xgal_3} alt="" /></a>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-4 mb-2">
                        <a href={xgal_4} data-lightbox="mygallery"><img className="img-fluid" src={xgal_4} alt="" /></a>
                      </div>
                      <div className="col-4 mb-2">
                        <a href={xgal_5} data-lightbox="mygallery"><img className="img-fluid" src={xgal_5} alt="" /></a>
                      </div>
                      <div className="col-4 mb-2">
                        <a href={xgal_6} data-lightbox="mygallery"><img className="img-fluid" src={xgal_6} alt="" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- video --> */}
                <h4>Video</h4>
                <div className="row video">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <a href="https://www.youtube.com/watch?v=9YffrCViTVk" target="_blank" >
                      <img className="img-fluid" src={xbg_1} alt="" />
                      <span className="play-icon">
                        <span><FaPlay /></span>
                      </span>
                    </a>
                  </div>
                </div>
          </div>

          <div class="col-12 col-md-5 col-lg-5">
            <Form />
            {/* <!-- social icons --> */}
            <h4>Social Icons</h4>
            <div class="row social-icons">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <ul>
                <a href=""><li><FaFacebookF/></li></a>
                <a href=""><li><AiOutlineTwitter /></li></a>
                <a href=""><li><AiOutlineInstagram /></li></a>
                <a href=""><li><AiOutlineDribbble /></li></a>
                <a href=""><li><AiFillLinkedin /></li></a>
              </ul>
              {/* <ul>
                <li><a href=""><FaFacebookF/></a></li>
                <li><a href=""><AiOutlineTwitter /></a></li>
                <li><a href=""><AiOutlineInstagram /></a></li>
                <li><a href=""><AiOutlineDribbble /></a></li>
                <li><a href=""><AiFillLinkedin /></a></li>
              </ul> */}
              </div>
            </div>
          </div>
      </div>
      </div>
  )
}

export default Faq
