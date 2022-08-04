import React from 'react'
import './Carousel.css'
import xbg_1 from '../../img/xbg_1.webp'
import xbg_2 from '../../img/xbg_2.webp'
import xbg_3 from '../../img/xbg_3.webp'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'


function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide paddingtopbottom" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={xbg_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={xbg_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={xbg_3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="prev-icon" aria-hidden="true"><span><AiOutlineArrowLeft /></span></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="next-icon" aria-hidden="true"><span><AiOutlineArrowRight  /></span></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carousel
