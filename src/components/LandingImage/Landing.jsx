import React from 'react';
import Logo from '../../Media/image/logosekolah-min.png'

const Landing  = ()=>{
    return(
        <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <img src={Logo} width="200px" height="200px" alt="logo" />
          <h1>Welcome to <span>PKBM Hanuba</span>
          </h1>
          <h2>Sekolah untuk mereka semua</h2>
          <div className="d-flex">
            <a href="#artikel" className="btn-get-started scrollto">Read More</a>
            
            {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i class="icofont-play-alt-2"></i></a>
           */}
          </div>
        </div>
      </section>
    )
}

export default Landing;