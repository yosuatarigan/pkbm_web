import React from 'react';
import Fotos from '../../Media/image/1.jpg';

var sectionStyle = {
    // width: "max",
    // height: "400px",
    maxwidth : "100%",
    // backgroundSize : "cover",
    height : "auto",
    backgroundImage: `url(${Fotos})`,
    backgroundRepeat : "no-repeat"
  };

const LandingImage = () => {
    return (
        <article  class="vh-100 dt w-100 black bg-light-silver" style={sectionStyle}>
            <div class="dtc v-mid tc white ph3 ph4-l">
                <h1 class="f6 f2-m f-subheadline-l fw6 tc">Welcome to PKBM Hanuba Medan</h1>
            </div>
            
        </article>
    )
}

export default LandingImage;