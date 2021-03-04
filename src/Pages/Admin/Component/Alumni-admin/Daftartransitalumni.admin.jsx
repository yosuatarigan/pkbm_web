import React from 'react';
import Materialtablecustom from '../Materialtable-admin/Materialtablewithactioncustom.admin';
import {deletedata,adddata,adddatacustomid} from '../../firebase/firebase.utils';

const Daftaralumni = ()=>{

    const collection="transitalumni";
    const title = "Daftar Alumni yang Belum dikonfirmasi";
   const  columns= [
        { title: 'Nama', field: 'nama' },
        { title: 'Pekerjaan', field: 'pekerjaan' },
        { title: 'Tahun Ajaran', field: 'tahun' },
        { title: 'Gambar', field: 'coverurl' , render: rowData => <img src={rowData.coverurl} alt='gambarya' style={{width: 50, borderRadius: '50%'}}/>},
        { title: 'Action', field: 'action' , render: rowData => <div> <button onClick={()=>deletedata(collection,rowData.id)}  > Hapus</button><button onClick={()=>new Promise(() => {
            setTimeout(() => {
              adddatacustomid('alumni',rowData.id,{...rowData})
              deletedata(collection,rowData.id)
            }, 1000);
          })}  > Konfirmasi</button></div>},
    ]

    return(
        <Materialtablecustom columns={columns} collection={collection} title={title}/>
    )
}

export default Daftaralumni;