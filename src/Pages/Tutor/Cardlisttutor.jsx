import React from 'react';
import CardTutor from './CardTutor';


const Cardlist = ({data})=>{
    return(
        data.map((user, i) => {
            return (
               
                <CardTutor
                    key={i}
                    nama={data[i].nama}
                    coverurl={data[i].coverurl}
                    pekerjaan={data[i].pekerjaan}
                    tahun ={data[i].tahun}
                    bidang = {data[i].bidang}
                />
                
            );
        })
    )
}

export default Cardlist;