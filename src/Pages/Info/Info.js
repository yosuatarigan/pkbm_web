import React from 'react';
import Program from './program';
import VisidanMisi from './visidanmisi';
import Kritik from './kritikdansaran';
import Tampilpesan from './Tampilkritikdansaran';
import Igicon from './../../Media/svgicon/instagram.png';
import fbicon from './../../Media/svgicon/facebook.png';
import yticon from './../../Media/svgicon/youtube.png';

const Info = () => {
    return (

        <div>
            <VisidanMisi/>
            <Program/>
        <section className="center bg-light-gray pa3 ph5-ns">

            <article className="cf ">

                <div className="fl w-50 bg-near-white tc">
                    <img src="http://greenville.ancorathemes.com/wp-content/uploads/2017/03/image-36-411x552.png" width="max" height="auto" alt="d" />
                </div>
                <div className="pl-3 fl w-50 bg-light-gray  dib v-mid">
                    <h3 className='blue'>Anda punya pertanyaan???</h3>
                    <h4 className="blue">Hubungi kami</h4>

                    <p><b>Alamat</b> : 
                    Jl. A.H Nasution Gg Jadi No 18 B Simpang Pos.
                    Kelurahan Kwala Bekala, Kecamatan Medan Johor, Sumatera Utara
                    </p>

                    <p><b> Contact Person</b> : 
                    Jontar Sinaga : 08126572348<br/>
                    Sarah Sihombing : 082150915781
                    </p>

                    <p><b> Jam Operasi Sekolah</b> : 
                    Senin - Sabtu<br/>
                    08.00 Wib - 19.00 Wib
                    </p>

                    

                    <p><b> Hubungi Kami</b> : <br/>
                    <a target="_blank" href="https://www.instagram.com/pkbmhanubamedan/?hl=en"> <img className="pr3 pa2" src={Igicon}/>pkbmhanubamedan</a><br/>
                    <a target="_blank" href="https://web.facebook.com/pkbm.hanubamedan"> <img className="pr3 pa2" src={fbicon}/>Pkbm Hanuba Medan</a><br/>
                    <a target="_blank" href="https://www.youtube.com/channel/UCCd-jEw7aNWAe2gdKAOn2Ng"> <img className="pr3 pa2" src={yticon}/>PKBM Hanuba01</a>
                    </p>
                    
                </div>
            </article>
        </section>
        
        <Kritik/>
        <hr/>
        <Tampilpesan/>
        </div>


    );
}

export default Info;