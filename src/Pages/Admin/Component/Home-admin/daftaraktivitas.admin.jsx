import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftarkritikdanpesan = ()=>{

    const collection="aktivitas";
    const title = "Aktivitas Server PKBM HANUBA MEDAN";
   const  columns= [
    { title: 'Email', field: 'emailuser' },
    { title: 'Aksi', field: 'aksi' }]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftarkritikdanpesan;