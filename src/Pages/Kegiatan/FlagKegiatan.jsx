import React from 'react';
import './kegiatan.css';

const Cardgaleri = ({title,desc,coverurl}) => {
    return (
        <div>
            
                    <div className="fl w-third pa2 grow">
                            <img alt="images" className="gambar1" src={coverurl}  />
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip center">Title</dt>
    <dd className="ml0 black truncate w-100">{title}</dd>
                                <dt className="clip">Artist</dt>
    <dd className="ml0 gray truncate w-100">{desc}</dd>
                            </dl>
                    </div>
                   
              

        </div>
    )
}

export default Cardgaleri;