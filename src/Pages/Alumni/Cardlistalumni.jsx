import React from 'react';
import CardAlumni from './CardAlumni';


const Cardlist = ({data})=>{
    return(
        data.map((user, i) => {
            return (
               
                <CardAlumni
                    key={i}
                    nama={data[i].nama}
                    coverurl={data[i].coverurl}
                    pekerjaan={data[i].pekerjaan}
                    tahun ={data[i].tahun}
                />
                
            );
        })
    )
}

export default Cardlist;