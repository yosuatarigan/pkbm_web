import React from 'react';

const CardFasilitas = ({namafasilitas,desc,coverurl}) => {
    return (
        <div>
            <h3 className="baskerville blue fw1 ph3 ph0-l">{namafasilitas}</h3>
        <article className="bt bb b--black-10">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={coverurl} className="db" alt="fasilitas" />
                
                <p>{desc}</p>
              </div>
              <div className="w-100 w-60-ns pl3-ns">
              
               
                
              </div>
            </div>
        </article>
        </div>

        

    );
}

export default CardFasilitas;