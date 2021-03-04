import React from 'react';
import Articlepage from './Articlepage';
import {withRouter} from 'react-router-dom';
import './article.css';

const Article = ({title,desc,coverurl,account,seturlimage,setdesc,toggle,settitle}) => {

    const switchpage = (titleswitch)=>{
        return(<p>ini aja ya</p>)
    }

    

    return (
        <div onClick={()=> new Promise(()=> {
            setTimeout(() => {
              toggle();
              seturlimage(coverurl)
              setdesc(desc)
              settitle(title)
              
            }, 200);
          })} class="row pa4">
            
            <div class="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                <img src={coverurl} className="imgarticle" width="300px" height="300px"  alt="Gambar Depan artikel" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
    <h4 className='yellow' >{title}</h4>
                            <p class="f6 f5-l lh-copy">
                            {desc.substring(0,200)}
                            <p className='blue'>[...Klik untuk baca seluruhnya]</p>
                            
                           
          </p>
                            <p class="f6 lh-copy mv0">{account}</p>
            </div>
        </div>
    )
}

export default withRouter(Article);