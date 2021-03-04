import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftarfasilitas = ()=>{

    const collection="fasilitas";
    const title = "Fasilitas";
   const  columns= [
    { title: 'Nama Fasilitas', field: 'namafasilitas' },
    { title: 'Deskripsi', field: 'desc' },
    { title: 'Gambar', field: 'coverurl' , render: rowData => <img src={rowData.coverurl} alt='gambarya' style={{width: 50, borderRadius: '50%'}}/>},
   
  ]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftarfasilitas;