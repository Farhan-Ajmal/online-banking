import React from 'react'
import person_1 from '../../img/person_1.webp'
import person_2 from '../../img/person_2.webp'
import person_3 from '../../img/person_3.webp'
import './Reviews.css'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Reviews() {
  return (
    <div className="container reviews paddingtopbottom">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 r-columns">
            <strong className="f-strong">Join Now</strong>
            <h2 className="heading2">Join More Than 90,000+ Amazing People Loves Our Product</h2>
            <p className="para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <button className="btn btn-primary" type="submit">Product Tour</button>
          </div>
          <div className="col-sm-12 col-md-1 col-lg-1">

          </div>
          <div className="col-sm-12 col-md-7 col-lg-7">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="testimonial">
                    <span>
                        <img src={person_1} alt="" />
                    </span>
                    <span>
                        <b>Jennifer Smith</b>, Owner, Greenland, Inc.
                    </span>
                    <span>
                        <b>
                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
                        </b>
                    </span>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <span>
                        <img src={person_2} alt="" />
                    </span>
                    <span>
                        <b>Jennifer Smith</b>, Owner, Greenland, Inc.
                    </span>
                    <span>
                        <b>
                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
                        </b>
                    </span>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <span>
                        <img src={person_3} alt="" />
                    </span>
                    <span>
                        <b>Jennifer Smith</b>, Owner, Greenland, Inc.
                    </span>
                    <span>
                        <b>
                            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
                        </b>
                    </span>
                </SwiperSlide>
            </Swiper>              
          </div>
        </div>
    </div>
  )
}

export default Reviews
