import React from 'react'
import './Blog.css'
import tv from '../../img/tv.jpg'
import laptop from '../../img/laptop.jpg'
import office from '../../img/office.jpg'
import ceilingLamp from '../../img/ceiling-lamp.jpg'

function Blog() {
  return (
    <div className="blog paddingtopbottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="b-title">
              <strong className="f-strong">Blog</strong>
              <h2 className="heading2">Blog Posts</h2>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 b-columns">
              <div className="image">
                <a href="#" className="ref"><img src={tv} alt="Image" className="img-fluid " /></a>
                <div className="image-overlay">

                </div>
              </div>
              <div className="b-description">
                <span className="text-muted">May 14, 2020</span>
                <h4 className="heading4">Far far away, behind the word mountains</h4>
                <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                <span className="read-more">
                  <a href="">Read More</a>
                </span>
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 col-lg-3 b-columns">
              <div className="image">
                <a href="#" className="ref"><img src={laptop} alt="Image" className="img-fluid " /></a>
                <div className="image-overlay">

                </div>
              </div>
              
              <div className="b-description">
                <span className="text-muted">May 14, 2020</span>
                <h4 className="heading4">Far far away, behind the word mountains</h4>
                <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                <span className="read-more">
                  <a href="">Read More</a>
                </span>
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 col-lg-3 b-columns">
              <div className="image">
                <a href="#" className="ref"><img src={office} alt="Image" className="img-fluid " /></a>
                <div className="image-overlay">

                </div>
              </div>
              <div className="b-description">
                <span className="text-muted">May 14, 2020</span>
                <h4 className="heading4">Far far away, behind the word mountains</h4>
                <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                <span className="read-more">
                  <a href="">Read More</a>
                </span>
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 col-lg-3 b-columns">
              <div className="image">
                <a href="#" className="ref"><img src={ceilingLamp} alt="Image" className="img-fluid " /></a>
                <div className="image-overlay">

                </div>
              </div>
              <div className="b-description">
                <span className="text-muted">May 14, 2020</span>
                <h4 className="heading4">Far far away, behind the word mountains</h4>
                <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                <span className="read-more">
                  <a href="">Read More</a>
                </span>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Blog
