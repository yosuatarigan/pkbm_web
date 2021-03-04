import React from 'react';

const Navtop = ()=>{
    return(
      <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
      <div class="container d-flex">
        <div class="contact-info mr-auto">
          <i class="icofont-phone"></i> 081378695832
          <i class="icofont-envelope"></i> <a href="mailto:pkbmhanuba@gmail.com">pkbmhanuba@gmail.com</a>
        </div>
        <div class="social-links">
          <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
          <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        </div>
      </div>
    </div>
    )
}

export default Navtop;