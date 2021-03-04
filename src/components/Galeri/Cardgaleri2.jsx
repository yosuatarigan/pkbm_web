import React from 'react';
import './galeri.css'

const Cardgaleri = ({ title, desc, coverurl,seturlimage,toggle,settitle }) => {
    return (
        <div onClick={()=> new Promise(()=> {
            setTimeout(() => {
              toggle();
              seturlimage(coverurl)
              settitle(title)
              
              
            }, 200);
          })} class="col-lg-3 col-md-4 col-6">
        <p href="" class="d-block mb-4 h-100">
            <img class="imgarticle" width="auto" height="200vw" src={coverurl} alt="" />
    <p>{title}</p>
    <p>{desc}</p>
        </p>
    </div>


    )
}

export default Cardgaleri;