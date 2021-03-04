import React from 'react';
import Cardgaleri from './Cardgaleri2';


const Cardlist = ({data,seturlimage,toggle,settitle})=>{
    return(
        data.map((user, i) => {
            return (
                <Cardgaleri
                    key={i}
                    title={data[i].title}
                    desc={data[i].desc}
                    coverurl={data[i].coverurl}
                    seturlimage={seturlimage}
                    settitle={settitle}
                    toggle={toggle}
                />
            );
        })
    )
}

export default Cardlist;