import React from 'react';
import Materialtablecustom from '../Materialtable-admin/Materialtablewithactioncustom.admin';
import {adddatacustomid,deletedata} from '../../firebase/firebase.utils';

const Daftarkritikdanpesan = ()=>{

    const collection="kritikdanpesan";
    const title = "Kritik & Pesan";
   const  columns= [
    { title: 'Action', field: 'action' , render: rowData => <div> <button onClick={()=>deletedata(collection,rowData.id)}  > Hapus</button><button onClick={()=>new Promise(() => {
        setTimeout(() => {
          adddatacustomid('transitkritikdanpesan',rowData.id,{...rowData})
          deletedata(collection,rowData.id)
        }, 1000);
      })}  > Hide</button></div>}, 
    { title: 'Nama', field: 'displayName' },
    { title: 'Kritik & Pesan', field: 'kritikdanpesan' }]

    return(
        <Materialtablecustom columns={columns} collection={collection} title={title}/>
    )
}

export default Daftarkritikdanpesan;