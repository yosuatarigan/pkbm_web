import React from 'react';
import './Cardfitur.css';
import Topiwisuda from '../../Media/image/topiwisuda-min.png';
import Teacher from '../../Media/image/teacher-min.png';
import Fasilitas from '../../Media/image/fasilitas-min.png';
import Question from '../../Media/image/question-min.png';


const Cardfitur = ()=>{
    return(
        <section id="featured-services" className="featured-services center">
      <div className="container" data-aos="fade-up">

        <div className="row ">
          <div className=" col-md-6 col-lg-3 centertext d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon "><img src={Topiwisuda} alt="imagedd" width="50" height="50"/></div>
              <h4 className="title  ">Alumni</h4>
              <p className="description ">Daftar Alumni PKBM Hanuba</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 centertext d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><img src={Teacher} alt="imagedd" width="50" height="50"/></div>
              <h4 className="title">Spesial Tutor</h4>
              <p className="description">Guru-guru yang berpengalaman</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex centertext align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><img src={Fasilitas} alt="imagedd" width="50" height="50"/></div>
              <h4 className="title">Fasilitas</h4>
              <p className="description">Fasilitas PKBM Hanuba</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex centertext align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><img src={Question} alt="imagedd" width="50" height="50"/></div>
              <h4 className="title">Informasi</h4>
              <p className="description">Informasi PKBM Hanuba Medan</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Cardfitur;