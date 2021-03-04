import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftartutor = ()=>{

    const collection="tutor";
    const title = "Tutor";
   const  columns= [
    { title: 'Nama', field: 'nama' },
    { title: 'Bidang', field: 'bidang' },
    { title: 'Gambar', field: 'coverurl',render: rowData => <img src={rowData.coverurl} alt="gambarya" style={{width: 50, borderRadius: '50%'}}/> },
  ]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftartutor;