import React from 'react';


const CardAlumni = ({nama,coverurl,pekerjaan,tahun}) => {
    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow ">
            <img src={coverurl} width='200px' height='200px' alt="alumni" />
            <div>
                <text className="f6">{nama}</text><br/>
                <text>{pekerjaan}</text>
                <p>Tahun Ajaran : {tahun}</p>
            </div>
        </div>
    );
}

export default CardAlumni;