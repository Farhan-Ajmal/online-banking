import React from 'react'
import logoPuma from '../../img/logo-puma.webp'
import logoAdobe from '../../img/logo-adobe.webp'
import logoGoogle from '../../img/logo-google.webp'
import logoPaypal from '../../img/logo-paypal.webp'
import './Partners.css'

function Partners() {
  return (
    <div className="partners">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <img src={logoPuma} alt="Image" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={logoAdobe} alt="Image" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={logoGoogle} alt="Image" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={logoPaypal} alt="Image" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners
