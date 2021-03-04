import React from 'react';

const Cardgaleri = ({title,desc,coverurl}) => {
    return (
        <div >
            
                    <div class="fl w-third pa2">
                            <img  alt="images" src={coverurl}   />
                            <dl class="mt2 f6 lh-copy">
                                <dt class="clip">Title</dt>
    <dd class="ml0 black truncate w-100">{title}</dd>
                                <dt class="clip">Artist</dt>
    <dd class="ml0 gray truncate w-100">{desc}</dd>
                            </dl>
                    </div>
                   
              

        </div>
    )
}

export default Cardgaleri;