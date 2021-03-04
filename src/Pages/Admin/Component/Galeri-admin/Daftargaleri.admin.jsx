import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftargaleri = ()=>{

    const collection="galeri";
    const title = "Galeri";
   const  columns= [
    { title: 'Gambar', field: 'coverurl' , render: rowData => <img src={rowData.coverurl} alt="" style={{width: 50, borderRadius: '50%'}}/>},
    { title: 'Title', field: 'title' },
    { title: 'Deskripsi', field: 'desc' },
  
  ]
  

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftargaleri;