import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftararticle = ({emailuser})=>{

    const collection="article";
    const title = "Article";
   const  columns= [
    { title: 'Judul', field: 'title' },
    { title: 'Deskripsi', field: 'desc' },
    { title: 'Gambar', field: 'coverurl' , render: rowData => <img src={rowData.coverurl} alt="gambarya" style={{width: 50, borderRadius: '50%'}}/>},
    { title: 'Kategory', field: 'category' },
    { title: 'Tanggal Pembuatan', field: 'createdAt' },
  ]
  

    return(
        <Materialtable columns={columns} collection={collection} title={title} emailuser={emailuser} />
    )
}

export default Daftararticle;