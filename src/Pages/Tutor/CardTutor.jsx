import React from 'react';

const CardTentor = ({nama,coverurl,bidang}) => {

    
    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow ">
            <img src={coverurl} width='200px' height='200px' alt="tentor" />
            <div>
                <p className="f6">{nama}</p>
                <p className="f6 blue">{bidang}</p>
            </div>
        </div>
    );
}

export default CardTentor;